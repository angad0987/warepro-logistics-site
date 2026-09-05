/* eslint-disable prettier/prettier */
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, FileText, RotateCcw, UploadCloud, X } from "lucide-react";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { submitCareerApplication } from "@/services/careerApplicationService";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "@/geoapify-overrides.css";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GEOAPIFY_API_KEY = "599ec45612474e8ea2babe2cd8b9bef4";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const AREA_OF_INTEREST_OPTIONS = [
  "Warehouse Operations",
  "Inventory Management",
  "Supply Chain & Logistics",
  "Business Development",
  "Technology",
  "Finance & Administration",
  "Other",
];

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  location: z.string().trim().min(1, "Please enter your current location.").max(100),
  linkedin: z
    .string()
    .trim()
    .max(200, "LinkedIn URL is too long.")
    .optional()
    .refine(
      (value) => {
        // Field is optional
        if (!value) return true;

        try {
          const url = new URL(value);

          // Must be LinkedIn
          const isLinkedIn = url.hostname === "linkedin.com" || url.hostname === "www.linkedin.com";

          // Must be a personal profile URL
          const isProfile = url.pathname.startsWith("/in/");

          return isLinkedIn && isProfile;
        } catch {
          return false;
        }
      },
      {
        message:
          "Please enter a valid LinkedIn profile URL (e.g. https://www.linkedin.com/in/username).",
      },
    ),
  areaOfInterest: z.string().trim().max(120).optional(),
  yearsExperience: z.coerce
    .number()
    .min(0, "Years of experience cannot be negative.")
    .max(50, "Please enter a valid number of years.")
    .optional(),
  aboutYourself: z.string().trim().max(2000).optional(),
});

const fieldBase =
  "w-full min-w-0 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
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
            <span className="text-primary underline underline-offset-2">Click to upload</span> or
            drag and drop
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">{hint}</p>
        </div>
      )}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-full mb-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {children}
      </p>
      <div className="mt-2 h-px bg-border" />
    </div>
  );
}

export function ApplyForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const selectedPlaceRef = useRef<any>(null);
  const [token, setToken] = useState("");

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
    if (!token) {
      setSubmitError("Please complete the security verification.");
      return;
    }
    if (submitting) return;

    const data = {
      fullName,
      email,
      phone,
      location,
      linkedin,
      areaOfInterest,
      yearsExperience,
      aboutYourself,
    };
    const parsed = schema.safeParse(data);
    const nextErrors: Record<string, string> = {};
    if (!parsed.success) {
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string" && !nextErrors[k]) nextErrors[k] = i.message;
      });
      if (!resume) nextErrors["resume"] = "Please upload your resume.";
      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
      }
      return;
    }

    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    try {
      const result = await submitCareerApplication({
        token: token,
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        location: parsed.data.location ?? "",
        linkedin: parsed.data.linkedin ?? "",
        areaOfInterest: parsed.data.areaOfInterest ?? "",
        yearsExperience: parsed.data.yearsExperience ?? 0,
        aboutYourself: parsed.data.aboutYourself ?? "",
        resume,
      });
      if (result.success) {
        resetForm();
        setErrors({});
        setSubmitError("");
        setSubmitted(true);
        return;
      }

      switch (result.type) {
        case "VALIDATION_ERROR": {
          const mapped: Record<string, string> = {};
          if (result.errors) {
            for (const [key, value] of Object.entries(result.errors)) {
              mapped[key === "business" ? "businessType" : key] = value;
            }
          }
          setErrors(mapped);
          setSubmitError("");
          break;
        }
        case "SECURITY_ERROR":
          setSubmitError(result.message);
          break;
        case "DUPLICATE_ERROR":
          setSubmitError(result.message);
          break;
        case "SERVER_ERROR":
          setSubmitError(result.message);
          break;
        default:
          setSubmitError("Something went wrong.");
          break;
      }
    } catch {
      setSubmitError("Something Went Wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setLinkedin("");
    setAreaOfInterest("");
    setYearsExperience("");
    setAboutYourself("");
    setResume(null);
    setErrors({});
    setSubmitError("");
    setSubmitted(false);
    setSelectedPlace(null);
    selectedPlaceRef.current = null;
  };

  return (
    <section id="apply" className="scroll-mt-24 gradient-dark py-10 text-white md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
              Send Us Your Profile
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              Tell us about yourself and we'll keep your profile on file for future opportunities.
            </p>
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
                  <h3 className="mt-6 font-heading text-xl font-bold">Profile Received</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thank you for sharing your profile with CoreWarehousing. We'll review it and
                    reach out if a suitable opportunity comes up.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto"
                    >
                      Submit Another Profile
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
                  <fieldset
                    disabled={submitting}
                    className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2"
                  >
                    <SectionLabel>About You</SectionLabel>
                    <div className="min-w-0">
                      <Label htmlFor="fullName" required>
                        Full Name
                      </Label>
                      <input
                        id="fullName"
                        className={fieldBase}
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          setErrors((er) => ({ ...er, fullName: "" }));
                        }}
                      />
                      <FieldError message={errors["fullName"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="email" required>
                        Email Address
                      </Label>
                      <input
                        id="email"
                        type="email"
                        inputMode="email"
                        className={fieldBase}
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((er) => ({ ...er, email: "" }));
                        }}
                      />
                      <FieldError message={errors["email"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="phone" required>
                        Phone Number
                      </Label>
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        className={fieldBase}
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setErrors((er) => ({ ...er, phone: "" }));
                        }}
                      />
                      <FieldError message={errors["phone"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="location" required>
                        Current Location
                      </Label>
                      <GeoapifyContext apiKey={GEOAPIFY_API_KEY}>
                        <div
                          className="career-geoapify"
                          onBlur={() => {
                            setTimeout(() => {
                              if (!selectedPlaceRef.current) {
                                setLocation("");
                                setErrors((er) => ({ ...er, location: "" }));
                              }
                            }, 200);
                          }}
                        >
                          <GeoapifyGeocoderAutocomplete
                            placeholder="Enter your city"
                            type="city"
                            filterByCountryCode={["in"]}
                            limit={5}
                            debounceDelay={200}
                            skipIcons={true}
                            value={location}
                            placeSelect={(place) => {
                              if (!place) return;
                              setSelectedPlace(place);
                              selectedPlaceRef.current = place;
                              setLocation(place.properties.city ?? "");
                              setErrors((er) => ({ ...er, location: "" }));
                            }}
                            onUserInput={(value) => {
                              setSelectedPlace(null);
                              selectedPlaceRef.current = null;
                              setLocation(value);
                              setErrors((er) => ({ ...er, location: "" }));
                            }}
                            onClear={() => {
                              setSelectedPlace(null);
                              selectedPlaceRef.current = null;
                              setLocation("");
                              setErrors((er) => ({ ...er, location: "" }));
                            }}
                          />
                        </div>
                      </GeoapifyContext>
                      <FieldError message={errors["location"]} />
                    </div>

                    <SectionLabel>Your Professional Profile</SectionLabel>
                    <div className="min-w-0">
                      <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                      <input
                        id="linkedin"
                        className={fieldBase}
                        placeholder="https://linkedin.com/in/username"
                        value={linkedin}
                        onChange={(e) => {
                          setLinkedin(e.target.value);
                          setErrors((er) => ({ ...er, linkedin: "" }));
                        }}
                      />
                      <FieldError message={errors["linkedin"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="areaOfInterest">Area of Interest / Preferred Role</Label>
                      <Select
                        value={areaOfInterest}
                        onValueChange={(value) => {
                          setAreaOfInterest(value);
                          setErrors((er) => ({ ...er, areaOfInterest: "" }));
                        }}
                      >
                        <SelectTrigger
                          id="areaOfInterest"
                          className={cn(fieldBase, "data-[placeholder]:text-muted-foreground/70")}
                        >
                          <SelectValue placeholder="Select an area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {AREA_OF_INTEREST_OPTIONS.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError message={errors["areaOfInterest"]} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="yearsExperience">Years of Experience</Label>
                      <input
                        id="yearsExperience"
                        className={fieldBase}
                        placeholder="e.g. 3"
                        value={yearsExperience}
                        onChange={(e) => {
                          setYearsExperience(e.target.value);
                          setErrors((er) => ({ ...er, yearsExperience: "" }));
                        }}
                      />
                      <FieldError message={errors["yearsExperience"]} />
                    </div>

                    <SectionLabel>Tell Us More</SectionLabel>
                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="resume" required>
                        Upload Resume
                      </Label>
                      <FileDrop
                        id="resume"
                        file={resume}
                        onFile={(f) => setResume(validateFile(f, "resume") ?? resume)}
                        onClear={() => setResume(null)}
                        hint="PDF, DOC or DOCX — Max 5MB"
                      />
                      <FieldError message={errors["resume"]} />
                    </div>
                    <div className="min-w-0 sm:col-span-2">
                      <Label htmlFor="aboutYourself">Tell Us About Yourself</Label>
                      <textarea
                        id="aboutYourself"
                        rows={4}
                        className={cn(fieldBase, "resize-none")}
                        placeholder="Share anything you'd like us to know — your background, interests, what excites you about warehousing or logistics..."
                        value={aboutYourself}
                        onChange={(e) => setAboutYourself(e.target.value)}
                      />
                      <FieldError message={errors["aboutYourself"]} />
                    </div>
                  </fieldset>
                  <TurnstileWidget onVerify={setToken} onExpire={() => setToken("")} />

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

                  <div className="mt-6 flex flex-col items-center gap-4">
                    <button
                      type="submit"
                      disabled={!token || submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                    >
                      {submitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Send My Profile <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                    <p className="max-w-md text-center text-[11px] leading-relaxed text-muted-foreground">
                      By submitting your application, you acknowledge that CoreWarehousing will
                      process the information you provide, including your resume or CV, for
                      recruitment and application-related purposes as described in our{" "}
                      <Link to="/privacy-policy" className="underline hover:text-foreground/80">
                        Privacy Policy
                      </Link>
                      .
                    </p>
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
