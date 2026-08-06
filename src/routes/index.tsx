/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { z } from "zod";
import { submitCallbackRequest } from "@/services/callbackService";
import { ArrowRight, CheckCircle2, Send, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import fleetImg from "@/assets/fleet.jpg";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { IconCallouts } from "@/components/IconCallouts";
import { BentoOperations } from "@/components/BentoOperations";
import { WarehouseJourney } from "@/components/WarehouseJourney";
import { ShowcaseParallax } from "@/components/ShowcaseParallax";
import { KpiStats } from "@/components/KpiStats";
import { ClientMarquee } from "@/components/ClientMarquee";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { InteractiveCTA } from "@/components/InteractiveCTA";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "@/geoapify-overrides.css";
import {
  hero,
  brandStory,
  servicesOverview,
  quickEnquiry,
} from "@/content/home";
import { services } from "@/content/services";

const GEOAPIFY_API_KEY = "599ec45612474e8ea2babe2cd8b9bef4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreWarehousing — B2B Warehousing & 3PL Fulfillment in India" },
      {
        name: "description",
        content:
          "Reliable warehousing, inventory, B2B & eCommerce fulfillment, transportation and cross-docking. Get a tailored 3PL quote from CoreWarehousing.",
      },
      { property: "og:title", content: "CoreWarehousing — B2B Warehousing & 3PL Fulfillment" },
      {
        property: "og:description",
        content:
          "End-to-end warehousing and fulfillment for growing brands. Request a quote today.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: BRAND.name,
          url: "/",
          description: "B2B Warehousing and 3PL fulfillment services.",
          address: { "@type": "PostalAddress", streetAddress: BRAND.address },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: BRAND.phone,
            contactType: "customer service",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const quickSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  businessType: z.string().min(1, "Select a business type"),
  phone: z.string().trim().min(8, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required"),
  city: z.string().min(2, "City is required").max(100, "City is too long"),
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="CoreWarehousing modern warehouse"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-navy/50" />

        <div className="container-x relative z-10 pt-12 pb-20 md:pt-16">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </span>
              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading leading-tight text-balance">
                {hero.headline}
                <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                  {hero.headlineHighlight}
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                {hero.subheadline}
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                {hero.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {hero.ctaSecondary}
                </Link>
              </div>
            </motion.div>

            {/* Quick enquiry form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <QuickEnquiry />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src={fleetImg}
              alt="CoreWarehousing operations"
              loading="lazy"
              width={1280}
              height={800}
              className="rounded-3xl shadow-elegant w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {brandStory.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {brandStory.headline}
            </h2>
            {brandStory.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant"
              >
                {brandStory.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy hover:bg-muted"
              >
                {brandStory.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {servicesOverview.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {servicesOverview.headline}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">{servicesOverview.subheadline}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <DynamicIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy font-heading">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* WHY CHOOSE US */}
      <IconCallouts variant="dark" />

      <section className="py-20">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {platformsSection.eyebrow}
            </span>
            <span className="ml-2 inline-block rounded-full border border-navy/20 bg-navy/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy">
              Coming Soon
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy font-heading">
              {platformsSection.headline}
            </h2>
            <p className="mt-3 text-muted-foreground">{platformsSection.subheadline}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="flex items-center justify-center h-36 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                  {p.name === "Others" ? (
                    <span className="text-lg font-bold text-muted-foreground">Others</span>
                  ) : (
                    <img
                      src={platformLogoMap[p.logo]}
                      alt={p.name}
                      className={`max-w-full object-contain ${p.name === "Flipkart" ? "h-32" : "h-20"}`}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {testimonialsSection.eyebrow}
            </span>
            <span className="ml-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Coming Soon
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {testimonialsSection.headline}
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">{testimonialsSection.subheadline}</p>
          </Reveal>
          <Reveal className="mt-14" delay={0.1}>
            <div className="max-w-lg mx-auto rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <Quote className="mx-auto h-10 w-10 text-primary/30" />
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Client testimonials will appear here as we complete new partnerships.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 md:p-20 text-center text-primary-foreground shadow-elegant">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">{ctaSection.headline}</h2>
              <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                {ctaSection.subheadline}
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-elegant hover:scale-[1.03] transition-transform"
              >
                {ctaSection.cta} <ArrowRight className="h-5 w-5" />
              </Link>
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
}function QuickEnquiry() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const selectedPlaceRef = useRef<any>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  const resetForm = () => {
    setName("");
    setBusinessType("");
    setPhone("");
    setEmail("");
    setErrors({});
    setErrorMessage("");
    setCity("");
    setSelectedPlace(null);
    selectedPlaceRef.current = null;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    if (isSubmitting) return;

    const data = { name, businessType, phone, email, city };
    const parsed = quickSchema.safeParse(data);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
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
        formType: "QUICK_ENQUIRY"
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
      setErrorMessage(quickEnquiry.errorNetworkMessage);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-elegant">
      <div className="text-white">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary">
          {quickEnquiry.eyebrow}
        </div>
        <h3 className="mt-2 text-2xl font-bold font-heading">{quickEnquiry.headline}</h3>
        <p className="mt-2 text-sm text-white/75">{quickEnquiry.subheadline}</p>
      </div>
      {submitted ? (
        <div className="mt-6 rounded-xl bg-white/10 border border-white/20 p-5 text-white">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="h-5 w-5 text-primary" /> {quickEnquiry.successMessage}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-sm underline text-primary"
          >
            Send another
          </button>
        </div>
      ) : (
        <GeoapifyContext apiKey={GEOAPIFY_API_KEY}>
          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <input
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
            </div>
            <div>
              <select
                name="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white outline-none focus:border-primary"
              >
                <option value="" disabled className="text-navy">
                  Business type
                </option>
                {quickEnquiry.businessTypes.map((o) => (
                  <option key={o} value={o} className="text-navy">
                    {o}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="mt-1 text-xs text-primary">{errors.businessType}</p>
              )}
            </div>
            <div
              onBlur={() => {
                setTimeout(() => {
                  if (!selectedPlaceRef.current) setCity("");
                }, 200);
              }}
            >
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
                }}
                onUserInput={(value) => {
                  setSelectedPlace(null);
                  selectedPlaceRef.current = null;
                  setCity(value);
                }}
                onClear={() => {
                  setSelectedPlace(null);
                  selectedPlaceRef.current = null;
                  setCity("");
                }}
              />

              {errors.city && <p className="mt-1 text-xs text-primary">{errors.city}</p>}
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
              />
              {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone}</p>}
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
            </div>
            {errorMessage && (
              <div className="rounded-xl bg-red-500/15 border border-red-500/30 p-3 text-sm text-red-300">
                {errorMessage}
              </div>
            )}
            <TurnstileWidget onVerify={setToken} onExpire={() => setToken("")} />
            <button
              type="submit"
              disabled={!token || isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? quickEnquiry.submittingLabel : quickEnquiry.buttonLabel}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </button>
            <div className="flex justify-center">
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-3 text-sm font-semibold text-white hover:bg-steel transition-all"
              >
                Quick Call
              </a>
            </div>
            <p className="text-[11px] text-white/60 text-center">{quickEnquiry.privacyNotice}</p>
          </form>
        </GeoapifyContext>
      )}
    </div>
  );
}
