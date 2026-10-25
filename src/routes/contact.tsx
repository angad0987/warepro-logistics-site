import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { z } from "zod";
import {
  ClipboardList,
  SearchCheck,
  PhoneCall,
  FileText,
  Warehouse,
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { seo } from "@/lib/seo";
import {
  contactPage,
  formLabels,
  businessTypes,
  volumeOptions,
  warehouseNeeds,
  contactInfoCards,
} from "@/content/contact";
import { submitCallbackRequest } from "@/services/callbackService";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { useTurnstile } from "react-turnstile";
import { ENV } from "@/config/environment";
import { OFFICE_LOCATION } from "@/config/office";
import { getRequiredFieldNames, scrollToFirstInvalidField } from "@/lib/formValidation";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "@/geoapify-overrides.css";

const OfficeMap = lazy(() => import("@/components/OfficeMap"));

const MAPS_SEARCH_URL = OFFICE_LOCATION.mapsSearchUrl;
const DIRECTIONS_URL = OFFICE_LOCATION.directionsUrl;

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact CoreWarehousing for a Warehousing Quote",
      description:
        "Share your B2B or 3PL requirements and get a tailored warehousing quote. Reach CoreWarehousing by form, phone, email or WhatsApp.",
      path: "/contact",
    }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(120),
  businessType: z.string().min(1, "Select a business type"),
  volume: z.string().min(1, "Select your monthly volume"),
  warehouseNeeds: z.string().min(1, "Select your warehouse need"),
  phone: z.string().trim().min(8, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required"),
  city: z.string().min(2, "City is required").max(100, "City is too long"),
  message: z.string().trim().max(1000).optional(),
});

const requiredFields = getRequiredFieldNames(schema);

const timelineSteps = [
  {
    icon: ClipboardList,
    title: "Submit Your Requirement",
    desc: "Fill in the enquiry form with your warehousing, fulfilment or logistics requirements.",
    badge: "~2 minutes",
  },
  {
    icon: SearchCheck,
    title: "Requirement Review",
    desc: "Our logistics specialists carefully review your business needs and operational requirements.",
    badge: "Within 2 Business Hours",
  },
  {
    icon: PhoneCall,
    title: "Consultation Call",
    desc: "A warehouse expert contacts you to discuss inventory, storage, fulfilment and transportation requirements.",
    badge: "15–30 mins",
  },
  {
    icon: FileText,
    title: "Receive Custom Proposal",
    desc: "We prepare a tailored quotation with pricing, storage recommendations and service options.",
    badge: "Same Day / Next Business Day",
  },
  {
    icon: Warehouse,
    title: "Start Operations",
    desc: "After approval, inventory onboarding begins and your warehouse operations go live.",
    badge: "Fast Onboarding",
  },
];

const trustFeatures = [
  "Fast Response",
  "Dedicated Logistics Expert",
  "Tailored Pricing",
  "Scalable Warehousing",
];

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [volume, setVolume] = useState("");
  const [warehouseNeed, setWarehouseNeed] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const selectedPlaceRef = useRef<any>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const turnstile = useTurnstile();

  const clearError = (field: string) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setBusinessType("");
    setVolume("");
    setWarehouseNeed("");
    setPhone("");
    setEmail("");
    setMessage("");
    setCity("");
    setSelectedPlace(null);
    selectedPlaceRef.current = null;
    setErrors({});
    setErrorMessage("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    if (isSubmitting) return;

    const data = {
      name,
      company,
      businessType,
      volume,
      warehouseNeeds: warehouseNeed,
      phone,
      email,
      city,
      message,
    };
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
      scrollToFirstInvalidField(errs, formRef.current);
      return;
    }

    setErrors({});
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await submitCallbackRequest({
        name: parsed.data.name,
        business: parsed.data.businessType,
        city: parsed.data.city,
        phone: parsed.data.phone,
        email: parsed.data.email,
        token: token,
        formType: "DETAILED_QUOTE",
        companyName: parsed.data.company,
        monthlyOrder: parsed.data.volume,
        warehouseType: parsed.data.warehouseNeeds,
        message: parsed.data.message,
      });

      if (result.success) {
        resetForm();
        setErrors({});
        setErrorMessage("");
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
          scrollToFirstInvalidField(mapped, formRef.current);
          setErrorMessage("");
          break;
        }
        case "SECURITY_ERROR":
          setErrorMessage(result.message);
          break;
        case "DUPLICATE_ERROR":
          setErrorMessage(result.message);
          break;
        case "SERVER_ERROR":
          setErrorMessage(result.message);
          break;
        default:
          setErrorMessage("Something went wrong.");
          break;
      }
    } catch {
      setErrorMessage(contactPage.errorNetworkMessage);
    } finally {
      setToken("");
      turnstile.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {contactPage.eyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">
              {contactPage.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {contactPage.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-14">
          <Reveal>
            <div className="min-w-0 rounded-3xl border border-border bg-card p-5 sm:p-7 md:p-10 shadow-card-soft">
              <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading">
                {contactPage.formTitle}
              </h2>
              <p className="mt-2 text-muted-foreground">{contactPage.formDescription}</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy font-heading">{contactPage.successTitle}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {contactPage.successMessage}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm font-semibold text-primary"
                    >
                      {contactPage.successRetry}
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  className="mt-8 grid sm:grid-cols-2 gap-5"
                  noValidate
                >
                  <Field
                    label={formLabels.name}
                    name="name"
                    error={errors.name}
                    placeholder={formLabels.namePlaceholder}
                    value={name}
                    onChange={(value) => {
                      setName(value);
                      clearError("name");
                    }}
                    required={requiredFields.has("name")}
                  />
                  <Field
                    label={formLabels.company}
                    name="company"
                    error={errors.company}
                    placeholder={formLabels.companyPlaceholder}
                    value={company}
                    onChange={(value) => {
                      setCompany(value);
                      clearError("company");
                    }}
                    required={requiredFields.has("company")}
                  />

                  <Select
                    label={formLabels.businessType}
                    name="businessType"
                    options={businessTypes}
                    error={errors.businessType}
                    placeholder={formLabels.businessTypePlaceholder}
                    value={businessType}
                    onChange={(value) => {
                      setBusinessType(value);
                      clearError("businessType");
                    }}
                    required={requiredFields.has("businessType")}
                  />
                  <Select
                    label={formLabels.volume}
                    name="volume"
                    options={volumeOptions}
                    error={errors.volume}
                    placeholder={formLabels.volumePlaceholder}
                    value={volume}
                    onChange={(value) => {
                      setVolume(value);
                      clearError("volume");
                    }}
                    required={requiredFields.has("volume")}
                  />

                  <div className="sm:col-span-2">
                    <Select
                      label={formLabels.warehouseNeeds}
                      name="warehouseNeeds"
                      options={warehouseNeeds}
                      error={errors.warehouseNeeds}
                      placeholder={formLabels.warehouseNeedsPlaceholder}
                      value={warehouseNeed}
                      onChange={(value) => {
                        setWarehouseNeed(value);
                        clearError("warehouseNeeds");
                      }}
                      required={requiredFields.has("warehouseNeeds")}
                    />
                  </div>

                  <Field
                    label={formLabels.phone}
                    name="phone"
                    type="tel"
                    error={errors.phone}
                    placeholder={formLabels.phonePlaceholder}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      clearError("phone");
                    }}
                    required={requiredFields.has("phone")}
                  />
                  <Field
                    label={formLabels.email}
                    name="email"
                    type="email"
                    error={errors.email}
                    placeholder={formLabels.emailPlaceholder}
                    value={email}
                    onChange={(value) => {
                      setEmail(value);
                      clearError("email");
                    }}
                    required={requiredFields.has("email")}
                  />

                  <div className="sm:col-span-2" data-form-field="city">
                    <Label required={requiredFields.has("city")}>City</Label>
                    <div
                      className="mt-2 contact-geoapify"
                      onBlur={() => {
                        setTimeout(() => {
                          if (!selectedPlaceRef.current) setCity("");
                        }, 200);
                      }}
                    >
                      <GeoapifyContext apiKey={ENV.GEOAPIFY_API_KEY}>
                        <GeoapifyGeocoderAutocomplete
                          placeholder="Enter your city"
                          type="city"
                          filterByCountryCode={["in"]}
                          limit={5}
                          debounceDelay={500}
                          skipIcons={true}
                          value={city}
                          placeSelect={(place) => {
                            if (!place) return;
                            setSelectedPlace(place);
                            selectedPlaceRef.current = place;
                            setCity(place.properties.city ?? "");
                            clearError("city");
                          }}
                          onUserInput={(value) => {
                            setSelectedPlace(null);
                            selectedPlaceRef.current = null;
                            setCity(value);
                            clearError("city");
                          }}
                          onClear={() => {
                            setSelectedPlace(null);
                            selectedPlaceRef.current = null;
                            setCity("");
                            clearError("city");
                          }}
                        />
                      </GeoapifyContext>
                    </div>
                    {errors.city && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.city}</p>
                    )}
                  </div>

                  <div className="sm:col-span-2" data-form-field="message">
                    <Label required={requiredFields.has("message")}>{formLabels.messageLabel}</Label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={formLabels.messagePlaceholder}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        clearError("message");
                      }}
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="sm:col-span-2 rounded-xl bg-red-50 border border-red-300 p-3 text-sm text-red-600">
                      {errorMessage}
                    </div>
                  )}

                  <div className="sm:col-span-2 min-w-0 overflow-x-auto">
                    <TurnstileWidget onVerify={setToken} onExpire={() => setToken("")} />
                  </div>

                  <button
                    type="submit"
                    disabled={!token || isSubmitting}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? contactPage.submitLoadingLabel : contactPage.submitLabel}{" "}
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </button>
                  <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
                    We use the information you provide to respond to your enquiry and assist with
                    your warehousing or logistics requirements. Please review our{" "}
                    <Link to="/privacy-policy" className="underline hover:text-foreground/80">
                      Privacy Policy
                    </Link>{" "}
                    to understand how we handle your information.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="min-w-0 space-y-4 lg:-mt-8">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading">
                  What Happens Next?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From your enquiry to warehouse onboarding, here's exactly what you can expect.
                </p>
              </div>

              <div className="relative mt-6">
                <div className="absolute left-[23px] top-0 bottom-0 border-l-2 border-dashed border-primary/40" />

                <div className="space-y-5">
                  {timelineSteps.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.4 }}
                      className="relative pl-14 group"
                    >
                      <div className="absolute left-0 top-0 grid h-[46px] w-[46px] place-items-center rounded-full bg-primary/15 border-2 border-background shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/25">
                        <s.icon className="h-5 w-5 text-primary" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-navy text-white text-[9px] font-bold grid place-items-center shadow-sm">
                          {i + 1}
                        </span>
                      </div>

                      <div className="rounded-2xl border border-border bg-card p-5 shadow-card-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-elegant group-hover:border-primary/40">
                        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-2 sm:gap-3">
                          <div className="min-w-0">
                            <div className="font-semibold text-navy">{s.title}</div>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {s.desc}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                            {s.badge}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[32fr_68fr] lg:gap-12">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <MapPin className="h-3.5 w-3.5" />
                  Our Office
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold text-navy md:text-3xl">
                  Visit Our Office
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {BRAND.name} — {BRAND.tagline}
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {contactInfoCards.headOffice}
                      </div>
                      <p className="mt-1 leading-relaxed text-foreground">{BRAND.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {contactInfoCards.phone}
                      </div>
                      <a
                        href={BRAND.phoneHref}
                        className="mt-1 block hover:text-primary transition-colors"
                      >
                        {BRAND.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {contactInfoCards.email}
                      </div>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="mt-1 block break-all hover:text-primary transition-colors"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <Clock className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {contactInfoCards.businessHours}
                      </div>
                      <p className="mt-1 whitespace-pre-line leading-relaxed text-foreground">
                        {contactInfoCards.businessHoursDetail}
                      </p>
                    </div>
                  </li>
                </ul>

                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="relative isolate min-w-0 overflow-hidden rounded-3xl border border-border shadow-card-soft">
                <Suspense fallback={<div className="h-[360px] w-full sm:h-[440px] lg:h-[500px]" />}>
                  <ClientOnly>
                    <OfficeMap />
                  </ClientOnly>
                </Suspense>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-[1000] inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-navy shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  <Navigation className="h-4 w-4" />
                  Open in Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-sm font-semibold text-navy">
      {children}
      {required ? <span className="text-red-500"> *</span> : null}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div data-form-field={name}>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  error,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div data-form-field={name}>
      <Label required={required}>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
