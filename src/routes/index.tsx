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
import { WarehouseJourney } from "@/components/WarehouseJourney";
import { ShowcaseParallax } from "@/components/ShowcaseParallax";
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
      {/* HERO — cinematic */}
      <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="CoreWarehousing modern warehouse"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="pointer-events-none absolute -top-24 right-[-6rem] h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[130px] animate-float-slow" />

        <div className="container-x relative z-10 pt-28 pb-24 md:pt-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {hero.badge}
              </span>
              <h1 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading leading-[1.1] text-balance">
                {hero.headline}
                <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                  {hero.headlineHighlight}
                </span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
                {hero.subheadline}
              </p>

              <ul className="mt-9 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                {hero.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {b}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-11 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15"
                >
                  {hero.ctaSecondary}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Quick enquiry form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <QuickEnquiry />
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex">
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <ChevronDown className="h-3 w-3 text-white/70 animate-scroll-dot" />
          </span>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="group overflow-hidden rounded-[26px] shadow-elegant">
              <img
                src={fleetImg}
                alt="CoreWarehousing operations"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {brandStory.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
              {brandStory.headline}
            </h2>
            {brandStory.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
              >
                {brandStory.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-muted"
              >
                {brandStory.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANIMATED WAREHOUSE JOURNEY */}
      <WarehouseJourney />


      {/* FULL-WIDTH PARALLAX SHOWCASE */}
      <ShowcaseParallax />

      {/* SERVICES OVERVIEW */}
      <section className="section-y bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {servicesOverview.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
              {servicesOverview.headline}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              {servicesOverview.subheadline}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-card p-7 shadow-card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
                >
                  <span className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(18rem_10rem_at_50%_100%,oklch(0.9_0.17_95/0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110">
                    <DynamicIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy font-heading">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <IconCallouts variant="dark" />



      {/* TRUSTED CLIENTS */}
      <ClientMarquee />

      {/* TESTIMONIALS */}
      <TestimonialsMarquee />

      {/* INTERACTIVE CTA */}
      <InteractiveCTA />
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
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 md:p-6 shadow-elegant">
      <div className="text-white">
        <div className="text-[11px] font-semibold tracking-widest uppercase text-primary">
          {quickEnquiry.eyebrow}
        </div>
        <h3 className="mt-1.5 text-xl font-bold font-heading">{quickEnquiry.headline}</h3>
        <p className="mt-1 text-sm text-white/75">{quickEnquiry.subheadline}</p>
      </div>
      {submitted ? (
        <div className="mt-5 rounded-xl bg-white/10 border border-white/20 p-4 text-white">
          <div className="flex items-center gap-2 font-semibold text-sm">
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
          <form onSubmit={onSubmit} className="mt-5 space-y-3" noValidate>
            <div>
              <input
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
            </div>
            <div>
              <select
                name="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white outline-none focus:border-primary"
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
                className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
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
                className="w-full rounded-xl bg-white/15 border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary"
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
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? quickEnquiry.submittingLabel : quickEnquiry.buttonLabel}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </button>
            <div className="flex justify-center">
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-steel transition-all"
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
