import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Send, UserPlus } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ApplyForm } from "@/components/careers/ApplyForm";
import { HiringWorkflowSection } from "@/components/careers/HiringWorkflowSection";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { careersPage } from "@/content/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at CW | Warehousing & Fulfillment Jobs" },
      {
        name: "description",
        content:
          "Work at CoreWarehousing. Explore open roles in operations, technology and business development, or submit your profile for future opportunities.",
      },
      { property: "og:title", content: "Careers at CW | Warehousing & Fulfillment Jobs" },
      {
        property: "og:description",
        content:
          "Join CoreWarehousing and help build smarter warehousing, fulfillment and distribution across India.",
      },
      { property: "og:url", content: "/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersHero() {
  return (
    <section className="relative overflow-hidden gradient-dark pt-32 pb-16 text-white md:pt-44 md:pb-20">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_20%,oklch(0.85_0.18_92_/_0.4),transparent_55%)]" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {careersPage.eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-5xl">
            {careersPage.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {careersPage.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {careersPage.heroCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#why-join"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {careersPage.heroSecondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section id="why-join" className="scroll-mt-24 py-10 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              {careersPage.whyTitle}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{careersPage.whyIntro}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careersPage.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <DynamicIcon name={w.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-2xl font-bold text-muted-foreground/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TalentNetwork() {
  return (
    <section className="bg-muted/40 py-10 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <UserPlus className="h-4 w-4" />
              Talent Network
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight md:text-4xl">
              {careersPage.talentTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {careersPage.talentIntro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
            <p className="text-sm font-medium leading-relaxed text-foreground md:text-base">
              {careersPage.talentHighlight}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex justify-center">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              {careersPage.talentCta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              {careersPage.perksTitle}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{careersPage.perksIntro}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {careersPage.perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <DynamicIcon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="pb-12">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl gradient-dark px-6 py-12 text-center text-white md:px-12">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              {careersPage.finalTitle}
            </h2>
            <p className="mt-3 text-white/75">{careersPage.finalText}</p>
            <a
              href="#apply"
              className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              {careersPage.finalCta} <Send className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhyJoin />
      <HiringWorkflowSection />
      <TalentNetwork />
      <ApplyForm />
      <Perks />
      <FinalCTA />
    </>
  );
}
