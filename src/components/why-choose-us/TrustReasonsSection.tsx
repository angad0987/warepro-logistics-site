import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { whyChooseUs, whyChooseUsReasonsSection } from "@/content/why-choose-us";

export function TrustReasonsSection() {
  return (
    <section className="relative border-t border-border bg-secondary/40 py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {whyChooseUsReasonsSection.eyebrow}
          </span>
          <h2 className="mt-5 text-2xl font-extrabold uppercase leading-tight tracking-tight text-navy font-heading sm:text-3xl md:text-4xl">
            {whyChooseUsReasonsSection.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {whyChooseUsReasonsSection.subheading}
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {whyChooseUs.map((reason, i) => (
            <Reveal
              key={reason.id}
              delay={i * 0.06}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <article className="group relative flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                <span className="grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
                  <DynamicIcon name={reason.icon} className="h-7 w-7" />
                </span>

                <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {reason.microLabel}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy font-heading">{reason.title}</h3>

                <ul className="mt-3.5 space-y-1.5">
                  {reason.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center justify-center gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
