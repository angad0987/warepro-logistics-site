import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, FileText, RotateCcw, UploadCloud, X } from "lucide-react";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { submitCareerApplication } from "@/services/careerApplicationService";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().min(8, "Please enter a valid phone number.").max(20, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  location: z.string().trim().min(2, "Please enter your current location.").max(100),
  qualification: z.string().trim().min(2, "Please enter your highest qualification.").max(120),
  linkedin: z.string().trim().max(200).optional(),
});

type FormState = z.infer<typeof schema>;

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  location: "",
  qualification: "",
  linkedin: "",
};

const fieldBase =
  "w-full min-w-0 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
      {children}
      {required ? <span className="text-primary"> *</span> : null}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}

function formatSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileDrop({
  id,
  file,
  onFile,
  onClear,
  hint,
}: {
  id: string;
  file: File | null;
  onFile: (f: File | undefined | null) => void;
  onClear: () => void;
  hint: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type="file"
        className="sr-only"
        accept=".pdf,.doc,.docx"
        onChange={(e) => onFile(e.target.files?.[0])}
      />
      {file ? (
        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">{file.name}</div>
            <div className="text-xs text-muted-foreground">{formatSize(file.size)}</div>
          </div>
          <button
            type="button"
            onClick={() => {
              onClear();
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-background"
          >
            <X className="h-3.5 w-3.5" /> Remove
          </button>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              inputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            onFile(e.dataTransfer.files?.[0]);
          }}
          className={cn(
            "cursor-pointer rounded-xl border border-dashed p-5 text-center transition-colors duration-200",
            dragging
              ? "border-primary bg-primary/10"
              : "border-border bg-muted/25 hover:border-primary/60 hover:bg-muted/40",
          )}
        >
          <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
            <UploadCloud className="h-5 w-5" />
          </span>
          <div className="mt-2.5 text-sm font-semibold">
            <span className="text-primary underline underline-offset-2">Click to upload</span> or drag and drop
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">{hint}</p>
        </div>
      )}
    </>
  );
}

export function ApplyForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const set = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validateFile = (file: File | undefined | null, key: string) => {
    if (!file) return null;
    if (!ALLOWED.includes(file.type) || file.size > MAX_SIZE) {
      setErrors((e) => ({ ...e, [key]: "Please upload a PDF, DOC or DOCX file under 5 MB." }));
      return null;
    }
    setErrors((e) => ({ ...e, [key]: "" }));
    return file;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const parsed = schema.safeParse(values);
    const nextErrors: Record<string, string> = {};
    if (!parsed.success) {
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string" && !nextErrors[k]) nextErrors[k] = i.message;
      });
    }
    if (!resume) nextErrors["resume"] = "Please upload your resume.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    try {
      const result = await submitCareerApplication({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        location: values.location,
        qualification: values.qualification,
        linkedin: values.linkedin,
        resume,
        coverLetter,
      });
      if (result.success) setSubmitted(true);
      else setSubmitError("We couldn't submit your application right now. Please try again.");
    } catch {
      setSubmitError("We couldn't submit your application right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialState);
    setResume(null);
    setCoverLetter(null);
    setErrors({});
    setSubmitError("");
    setSubmitted(false);
  };

  return (
    <section id="apply" className="scroll-mt-24 gradient-dark py-16 text-white md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">Apply Now</h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">Your gateway to exciting career opportunities</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-3xl min-w-0 rounded-2xl bg-card p-5 text-foreground shadow-card-soft sm:p-7 md:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary"
                  >
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </motion.span>
                  <h3 className="mt-6 font-heading text-xl font-bold">Application Received</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thanks for applying to CW. Our team reviews every profile and will reach out if your experience
                    matches a current or upcoming opening.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
                    >
                      Submit Another Application
                    </button>
                    <a
                      href="/"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] sm:w-auto"
                    >
                      Explore CW <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} noValidate>
                  <fieldset disabled={submitting} className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2">
                    <div className="min-w-0">
                      <Label htmlFor="fullName" required>Full Name</Label>
                      <input id="fullName" className={fieldBase} placeholder="John Doe"
                        value={values.fullName} onChange={(e) => set("fullName", e.target.value)} />
                      <FieldError message={errors["fullName"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="phone" required>Enter Your Phone Number</Label>
                      <input id="phone" type="tel" inputMode="tel" className={fieldBase} placeholder="+91 98765 43210"
                        value={values.phone} onChange={(e) => set("phone", e.target.value)} />
                      <FieldError message={errors["phone"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="email" required>Enter Your E-Mail Id</Label>
                      <input id="email" type="email" inputMode="email" className={fieldBase} placeholder="abc@gmail.com"
                        value={values.email} onChange={(e) => set("email", e.target.value)} />
                      <FieldError message={errors["email"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="location" required>Current Location</Label>
                      <input id="location" className={fieldBase} placeholder="Mumbai"
                        value={values.location} onChange={(e) => set("location", e.target.value)} />
                      <FieldError message={errors["location"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="qualification" required>Highest Educational Qualification</Label>
                      <input id="qualification" className={fieldBase} placeholder="B.Tech"
                        value={values.qualification} onChange={(e) => set("qualification", e.target.value)} />
                      <FieldError message={errors["qualification"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="linkedin">LinkedIn / Portfolio URL</Label>
                      <input id="linkedin" className={fieldBase} placeholder="https://linkedin.com/in/username"
                        value={values.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
                    </div>

                    <div className="min-w-0">
                      <Label htmlFor="resume" required>Upload your Resume/CV</Label>
                      <p className="-mt-1 mb-2 text-xs text-muted-foreground">We want to get to know you better!</p>
                      <FileDrop
                        id="resume"
                        file={resume}
                        onFile={(f) => setResume(validateFile(f, "resume") ?? resume)}
                        onClear={() => setResume(null)}
                        hint="Only .pdf, .doc and .docx files (Max 5MB)"
                      />
                      <FieldError message={errors["resume"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="coverLetter">Upload Cover Letter (Optional)</Label>
                      <p className="-mt-1 mb-2 text-xs text-muted-foreground">Tell us why you're a great fit!</p>
                      <FileDrop
                        id="coverLetter"
                        file={coverLetter}
                        onFile={(f) => setCoverLetter(validateFile(f, "coverLetter") ?? coverLetter)}
                        onClear={() => setCoverLetter(null)}
                        hint="Only .pdf, .doc and .docx files (Max 5MB)"
                      />
                      <FieldError message={errors["coverLetter"]} />
                    </div>
                  </fieldset>

                  {submitError ? (
                    <div className="mt-5 flex flex-col gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-destructive">{submitError}</p>
                      <button
                        type="submit"
                        className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Try Again
                      </button>
                    </div>
                  ) : null}

                  <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                    Your details and documents will only be used for recruitment at CW.
                  </p>

                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                    >
                      {submitting ? "Submitting..." : <>Submit Application <ArrowRight className="h-4 w-4" /></>}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
