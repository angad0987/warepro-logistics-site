import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { processTeaser } from "@/content/homeSections";

export function ProcessTeaser() {
  return (
    <section className="relative overflow-hidden bg-secondary/40 section-y">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {processTeaser.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
            {processTeaser.headline}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {processTeaser.subheadline}
          </p>
        </Reveal>

        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-10 bottom-24 -translate-x-1/2 border-l-2 border-dashed border-primary/30 md:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-10 left-[15%] right-[15%] hidden md:block border-t-2 border-dashed border-primary/30"
          />

          <div className="grid gap-12 place-items-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 md:place-items-stretch">
            {processTeaser.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <Reveal delay={i * 0.1} className="hidden md:grid place-items-start pt-[30px]">
                    <ArrowRight className="h-6 w-6 text-primary" aria-hidden />
                  </Reveal>
                )}
                <Reveal delay={i * 0.08} className="w-full md:w-auto">
                  <div className="flex flex-col items-center text-center">
                    <span className="grid h-20 w-20 place-items-center rounded-full border border-primary/40 bg-primary/8">
                      <DynamicIcon name={step.icon} className="h-7 w-7 text-navy" />
                    </span>
                    <span className="mt-5 text-[11px] font-bold tracking-[0.2em] uppercase text-primary font-heading">
                      Step 0{i + 1}
                    </span>
                    <h3 className="mt-1.5 text-xl md:text-2xl font-bold text-navy font-heading">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[16rem] text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              </Fragment>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Link
            to="/how-we-work"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm md:text-base font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
          >
            {processTeaser.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
