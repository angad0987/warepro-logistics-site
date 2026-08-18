import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { BRAND } from "@/lib/brand";
import { careersPage, jobOpenings, GOOGLE_FORM_URL, type JobOpening } from "@/content/careers";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | CW — CoreWarehousing" },
      { name: "description", content: "Explore career opportunities at CW and join our team building smarter solutions for warehousing, fulfillment, and distribution." },
      { property: "og:title", content: "Careers | CW — CoreWarehousing" },
      { property: "og:description", content: "Explore career opportunities at CW and join our team building smarter solutions for warehousing, fulfillment, and distribution." },
      { property: "og:url", content: "/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

/** Single place that decides where "apply" goes. */
function applyHref() {
  return GOOGLE_FORM_URL || `mailto:${BRAND.email}?subject=Application%20—%20CoreWarehousing`;
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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 gradient-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
      <div className="container-x relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{careersPage.eyebrow}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight font-heading">{careersPage.headline}</h1>
          <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed">{careersPage.subheadline}</p>
          <a
            href="#open-positions"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            {careersPage.heroCta} <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-center">{careersPage.whyTitle}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careersPage.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <DynamicIcon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
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
    <div className="h-full min-w-0 rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-shadow hover:shadow-elegant">
      <h3 className="font-heading text-lg font-semibold">{job.title}</h3>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><Briefcase className="h-3.5 w-3.5 text-primary" />{job.department}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><MapPin className="h-3.5 w-3.5 text-primary" />{job.location}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1"><Clock className="h-3.5 w-3.5 text-primary" />{job.type}</span>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{job.description}</p>
      <ApplyButton label="Apply Now" className="mt-6 w-full sm:w-auto" />
    </div>
  );
}

function OpenPositions() {
  return (
    <section id="open-positions" className="scroll-mt-24 py-16 md:py-20 bg-muted/40">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">{careersPage.positionsTitle}</h2>
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
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center shadow-card-soft">
              <h3 className="font-heading text-lg font-semibold">{careersPage.emptyTitle}</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">{careersPage.emptyMessage}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function GeneralApplication() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card-soft">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">{careersPage.generalTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{careersPage.generalText}</p>
            <ApplyButton label={careersPage.generalCta} className="mt-6" />
            {GOOGLE_FORM_URL ? (
              <div className="mt-8 min-w-0 overflow-hidden rounded-xl border border-border">
                <iframe
                  src={GOOGLE_FORM_URL}
                  title="CoreWarehousing application form"
                  className="h-[720px] w-full"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ApplicationCTA() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl gradient-dark px-6 py-12 md:px-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">{careersPage.finalTitle}</h2>
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
      <GeneralApplication />
      <ApplicationCTA />
    </>
  );
}
