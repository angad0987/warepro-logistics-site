import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, FileText, RotateCcw, UploadCloud, X } from "lucide-react";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { submitCareerApplication } from "@/services/careerApplicationService";

const AREAS = [
  "Technology",
  "Warehouse Operations",
  "Business Development",
  "Sales",
  "Marketing",
  "Finance & Administration",
  "Other",
];

const EXPERIENCE = [
  "Student / Fresher",
  "Less than 1 year",
  "1–2 years",
  "2–5 years",
  "5–10 years",
  "10+ years",
];

const BENEFITS = [
  { n: "01", title: "Stay Connected", desc: "Keep your profile in our talent network." },
  { n: "02", title: "Future Opportunities", desc: "We'll consider your profile when relevant opportunities arise." },
  { n: "03", title: "Build With CW", desc: "Get the opportunity to contribute to what we're building." },
];

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  location: z.string().trim().min(2, "Please enter your current location.").max(100),
  areaOfInterest: z.string().min(1, "Please select an area of interest."),
  areaOther: z.string().trim().max(100).optional(),
  experience: z.string().min(1, "Please select your experience level."),
  currentJobTitle: z.string().trim().max(120).optional(),
  linkedin: z.string().trim().max(200).optional(),
  portfolio: z.string().trim().max(200).optional(),
  about: z.string().trim().max(1000).optional(),
});

type FormState = z.infer<typeof schema>;

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  areaOfInterest: "",
  areaOther: "",
  experience: "",
  currentJobTitle: "",
  linkedin: "",
  portfolio: "",
  about: "",
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

export function TalentNetwork() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resume, setResume] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const handleFile = (file: File | undefined | null) => {
    if (!file) return;
    if (!ALLOWED.includes(file.type) || file.size > MAX_SIZE) {
      setErrors((e) => ({ ...e, resume: "Please upload a PDF, DOC, or DOCX file under 5 MB." }));
      return;
    }
    setErrors((e) => ({ ...e, resume: "" }));
    setResume(file);
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
    if (values.areaOfInterest === "Other" && !values.areaOther?.trim()) {
      nextErrors["areaOther"] = "Please tell us what area you're interested in.";
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
        areaOfInterest:
          values.areaOfInterest === "Other" ? `Other — ${values.areaOther}` : values.areaOfInterest,
        experience: values.experience,
        currentJobTitle: values.currentJobTitle,
        linkedin: values.linkedin,
        portfolio: values.portfolio,
        about: values.about,
        resume,
      });
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError("We couldn't submit your profile right now. Please try again.");
      }
    } catch {
      setSubmitError("We couldn't submit your profile right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialState);
    setResume(null);
    setErrors({});
    setSubmitError("");
    setSubmitted(false);
  };

  return (
    <section id="talent-network" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-x grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
        {/* LEFT */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Talent Network</span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight md:text-3xl">Join Our Talent Network</h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              We're always interested in meeting talented people. Share your profile and resume with us, and we'll keep
              you in mind for future opportunities.
            </p>
            <ul className="mt-8 space-y-6">
              {BENEFITS.map((b) => (
                <li key={b.n} className="flex gap-4">
                  <span className="font-heading text-sm font-bold text-primary">{b.n}</span>
                  <div className="min-w-0">
                    <div className="font-heading text-base font-semibold">{b.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.08}>
          <div className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-card-soft sm:p-7 md:p-8">
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
                  <h3 className="mt-6 font-heading text-xl font-bold">Profile Received</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thanks for sharing your profile with CW. We'll keep your information in mind for future
                    opportunities that match your experience and interests.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We appreciate your interest in being part of our journey.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
                    >
                      Back to Careers
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
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={onSubmit}
                  noValidate
                >
                  <h3 className="font-heading text-xl font-bold tracking-tight">Share Your Profile</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Tell us about yourself and we'll keep your profile in mind for future opportunities.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Fields marked with <span className="text-primary">*</span> are required.
                  </p>

                  <fieldset disabled={submitting} className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2">
                    <div className="min-w-0">
                      <Label htmlFor="fullName" required>Full Name</Label>
                      <input id="fullName" className={fieldBase} placeholder="Enter your full name"
                        value={values.fullName} onChange={(e) => set("fullName", e.target.value)} />
                      <FieldError message={errors["fullName"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="email" required>Email Address</Label>
                      <input id="email" type="email" inputMode="email" className={fieldBase} placeholder="you@example.com"
                        value={values.email} onChange={(e) => set("email", e.target.value)} />
                      <FieldError message={errors["email"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="phone" required>Phone Number</Label>
                      <input id="phone" type="tel" inputMode="tel" className={fieldBase} placeholder="+91 98765 43210"
                        value={values.phone} onChange={(e) => set("phone", e.target.value)} />
                      <FieldError message={errors["phone"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="location" required>Current Location</Label>
                      <input id="location" className={fieldBase} placeholder="City, State"
                        value={values.location} onChange={(e) => set("location", e.target.value)} />
                      <FieldError message={errors["location"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="areaOfInterest" required>Area of Interest</Label>
                      <select id="areaOfInterest" className={cn(fieldBase, "appearance-none bg-[length:0]")}
                        value={values.areaOfInterest} onChange={(e) => set("areaOfInterest", e.target.value)}>
                        <option value="">Select an area</option>
                        {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <FieldError message={errors["areaOfInterest"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="experience" required>Years of Experience</Label>
                      <select id="experience" className={cn(fieldBase, "appearance-none")}
                        value={values.experience} onChange={(e) => set("experience", e.target.value)}>
                        <option value="">Select experience</option>
                        {EXPERIENCE.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <FieldError message={errors["experience"]} />
                    </div>

                    <AnimatePresence initial={false}>
                      {values.areaOfInterest === "Other" ? (
                        <motion.div
                          key="areaOther"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="min-w-0 overflow-hidden sm:col-span-2"
                        >
                          <Label htmlFor="areaOther" required>Tell us what area you're interested in</Label>
                          <input id="areaOther" className={fieldBase} placeholder="e.g. Data analytics, HR, Design"
                            value={values.areaOther} onChange={(e) => set("areaOther", e.target.value)} />
                          <FieldError message={errors["areaOther"]} />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="currentJobTitle">Current / Previous Job Title</Label>
                      <input id="currentJobTitle" className={fieldBase} placeholder="e.g. Operations Executive"
                        value={values.currentJobTitle} onChange={(e) => set("currentJobTitle", e.target.value)} />
                    </div>
                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <input id="linkedin" className={fieldBase} placeholder="linkedin.com/in/your-profile"
                        value={values.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
                    </div>
                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="portfolio">GitHub / Portfolio</Label>
                      <input id="portfolio" className={fieldBase} placeholder="github.com/username or your website"
                        value={values.portfolio} onChange={(e) => set("portfolio", e.target.value)} />
                    </div>

                    {/* Resume upload */}
                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="resume" required>Resume</Label>
                      <input
                        ref={inputRef}
                        id="resume"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFile(e.target.files?.[0])}
                      />
                      {resume ? (
                        <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-4">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                            <FileText className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium">{resume.name}</div>
                            <div className="text-xs text-muted-foreground">{formatSize(resume.size)}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => { setResume(null); if (inputRef.current) inputRef.current.value = ""; }}
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
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current?.click(); } }}
                          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                          onDragLeave={() => setDragging(false)}
                          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files?.[0]); }}
                          className={cn(
                            "cursor-pointer rounded-xl border border-dashed p-6 text-center transition-colors duration-200",
                            dragging ? "border-primary bg-primary/10" : "border-border bg-muted/25 hover:border-primary/60 hover:bg-muted/40",
                          )}
                        >
                          <motion.span
                            animate={dragging ? { y: -4 } : { y: 0 }}
                            transition={{ repeat: dragging ? Infinity : 0, repeatType: "reverse", duration: 0.6 }}
                            className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary"
                          >
                            <UploadCloud className="h-5 w-5" />
                          </motion.span>
                          <div className="mt-3 text-sm font-semibold">Upload your resume</div>
                          <p className="mt-1 text-xs text-muted-foreground">Drag &amp; drop your CV here or browse files</p>
                          <p className="mt-2 text-[11px] text-muted-foreground">PDF, DOC or DOCX · Maximum 5 MB</p>
                        </div>
                      )}
                      <FieldError message={errors["resume"]} />
                    </div>

                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="about">Tell Us About Yourself</Label>
                      <textarea
                        id="about"
                        rows={4}
                        className={cn(fieldBase, "resize-y")}
                        placeholder="Share anything you'd like us to know about your experience, skills, interests, or what you'd like to build with CW."
                        value={values.about}
                        onChange={(e) => set("about", e.target.value)}
                      />
                    </div>
                  </fieldset>

                  <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                    Your information and resume will only be used for recruitment and future career opportunities at CW.
                  </p>

                  {submitError ? (
                    <div className="mt-4 flex flex-col gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-destructive">{submitError}</p>
                      <button
                        type="submit"
                        className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
                      >
                        <RotateCcw className="h-3.5 w-3.5" /> Try Again
                      </button>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {submitting ? "Submitting..." : <>Submit My Profile <ArrowRight className="h-4 w-4" /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
