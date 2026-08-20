import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { ApplyForm } from "@/components/careers/ApplyForm";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { careersPage, jobOpenings, GOOGLE_FORM_URL, type JobOpening } from "@/content/careers";
import teamA from "@/assets/careers-team-1.jpg";
import teamB from "@/assets/careers-team-2.jpg";
import teamC from "@/assets/careers-team-3.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at CW | Warehousing & Fulfillment Jobs" },
      { name: "description", content: "Work at CoreWarehousing. Explore open roles in operations, technology and business development, or submit your profile for future opportunities." },
      { property: "og:title", content: "Careers at CW | Warehousing & Fulfillment Jobs" },
      { property: "og:description", content: "Join CoreWarehousing and help build smarter warehousing, fulfillment and distribution across India." },
      { property: "og:url", content: "/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function applyHref() {
  return GOOGLE_FORM_URL || "#apply";
}

function ApplyButton({ label, className = "" }: { label: string; className?: string }) {
  const href = applyHref();
  const isForm = Boolean(GOOGLE_FORM_URL);
  return (
    <a
      href={href}
      {...(isForm ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] ${className}`}
    >
      {label} <ArrowRight className="h-4 w-4" />
    </a>
  );
}

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
          <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-5xl">{careersPage.headline}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75">{careersPage.subheadline}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#open-positions"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {careersPage.heroCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#apply"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {careersPage.heroSecondaryCta}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container-x relative mt-12 md:mt-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {[teamA, teamB, teamC].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className={`overflow-hidden rounded-2xl border border-white/10 shadow-card-soft ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img
                src={src}
                alt="Life at CoreWarehousing"
                loading="lazy"
                width={960}
                height={640}
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-56"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{careersPage.whyTitle}</h2>
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

function JobCard({ job }: { job: JobOpening }) {
  return (
    <div className="h-full min-w-0 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <h3 className="font-heading text-lg font-semibold">{job.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><Briefcase className="h-3.5 w-3.5 text-primary" />{job.department}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><MapPin className="h-3.5 w-3.5 text-primary" />{job.location}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><Clock className="h-3.5 w-3.5 text-primary" />{job.type}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
      <ApplyButton label="Apply Now" className="mt-6 w-full sm:w-auto" />
    </div>
  );
}

function OpenPositions() {
  return (
    <section id="open-positions" className="scroll-mt-24 bg-muted/40 py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{careersPage.positionsTitle}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{careersPage.positionsIntro}</p>
          </div>
        </Reveal>

        {jobOpenings.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.06}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
              <h3 className="font-heading text-lg font-semibold">{careersPage.emptyTitle}</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{careersPage.emptyMessage}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{careersPage.perksTitle}</h2>
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
    <section className="pb-24">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl gradient-dark px-6 py-12 text-center text-white md:px-12">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{careersPage.finalTitle}</h2>
            <p className="mt-3 text-white/75">{careersPage.finalText}</p>
            <ApplyButton label={careersPage.finalCta} className="mt-6" />
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
      <OpenPositions />
      <ApplyForm />
      <Perks />
      <FinalCTA />
    </>
  );
}
