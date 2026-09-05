/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import ourStory2 from "@/assets/ourStory2.png";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { IconCallouts } from "@/components/IconCallouts";
import { WarehouseJourney } from "@/components/WarehouseJourney";
import { ShowcaseParallax } from "@/components/ShowcaseParallax";
import { ClientMarquee } from "@/components/ClientMarquee";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { InteractiveCTA } from "@/components/InteractiveCTA";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { hero, brandStory, servicesOverview } from "@/content/home";
import { services } from "@/content/services";

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
              transition={{ duration: 0.4, delay: 0.1 }}
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
              <LazyQuickEnquiry />
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
                src={ourStory2}
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
}

function LazyQuickEnquiry() {
  const [Mounted, setMounted] = useState<React.ComponentType | null>(null);
  const loadRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let active = true;
    const load = () =>
      import("@/components/QuickEnquiry").then((m) => {
        if (active) setMounted(() => m.QuickEnquiry);
      });
    loadRef.current = load();
    return () => {
      active = false;
    };
  }, []);

  return <ClientOnly>{Mounted ? <Mounted /> : <QuickEnquiryPlaceholder />}</ClientOnly>;
}

function QuickEnquiryPlaceholder() {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 md:p-6 shadow-elegant">
      <div className="text-white">
        <div className="text-[11px] font-semibold tracking-widest uppercase text-primary">
          Quick enquiry
        </div>
        <h3 className="mt-1.5 text-xl font-bold font-heading">Quick Enquiry</h3>
        <p className="mt-1 text-sm text-white/75">Tell us a little about your requirements.</p>
      </div>
      <div className="mt-5 space-y-3">
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/15" />
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/15" />
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/15" />
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/15" />
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/15" />
      </div>
    </div>
  );
}
