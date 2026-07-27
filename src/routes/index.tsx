import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { submitCallbackRequest } from "@/services/callbackService";
import { ArrowRight, CheckCircle2, Send, Quote } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import fleetImg from "@/assets/fleet.jpg";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { HowItWorks } from "@/components/HowItWorks";
import { IconCallouts } from "@/components/IconCallouts";
import { DynamicIcon } from "@/lib/DynamicIcon";
import {
  hero,
  brandStory,
  servicesOverview,
  platformsSection,
  testimonialsSection,
  ctaSection,
  quickEnquiry,
} from "@/content/home";
import { services } from "@/content/services";
import { platforms } from "@/content/platforms";
import { testimonials } from "@/content/testimonials";
import amazonLogo from "@/assets/amazonlogo.png";
import flipkartLogo from "@/assets/flipkartlogo.png";
import shopifyLogo from "@/assets/shopify-seeklogo.png";
import woocommerceLogo from "@/assets/woocommerce-seeklogo.png";
import meeshoLogo from "@/assets/meesho-seeklogo.png";

const platformLogoMap: Record<string, string> = {
  amazonlogo: amazonLogo,
  flipkartlogo: flipkartLogo,
  "shopify-seeklogo": shopifyLogo,
  "woocommerce-seeklogo": woocommerceLogo,
  "meesho-seeklogo": meeshoLogo,
};

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

        <div className="container-x relative z-10 pt-28 pb-20 md:pt-32">
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
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-heading">
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
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
                </Link>
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
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy font-heading">
              {platformsSection.headline}
            </h2>
            <p className="mt-3 text-muted-foreground">{platformsSection.subheadline}</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="flex items-center justify-center h-32">
                  <img
                    src={platformLogoMap[p.logo]}
                    alt={p.name}
                    className={`max-w-full object-contain ${p.name === "Flipkart" ? "h-28" : "h-16"}`}
                  />
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
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {testimonialsSection.headline}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                  <div className="h-10 w-24 rounded bg-muted grid place-items-center text-xs text-muted-foreground">
                    LOGO
                  </div>
                  <Quote className="mt-6 h-8 w-8 text-primary/40" />
                  <blockquote className="mt-3 text-foreground leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
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

function QuickEnquiry() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setName("");
    setBusinessType("");
    setPhone("");
    setEmail("");
    setErrors({});
    setErrorMessage("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const data = { name, businessType, phone, email };
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
        phone: parsed.data.phone,
        email: parsed.data.email,
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? quickEnquiry.submittingLabel : quickEnquiry.buttonLabel}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </button>
          <p className="text-[11px] text-white/60 text-center">{quickEnquiry.privacyNotice}</p>
        </form>
      )}
    </div>
  );
}
