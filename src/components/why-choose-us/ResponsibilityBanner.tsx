import { ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { whyChooseUsResponsibility } from "@/content/why-choose-us";

export function ResponsibilityBanner() {
  const { titleLine1, titleLine2Prefix, titleLine2Highlight, body } = whyChooseUsResponsibility;

  return (
    <section className="bg-secondary/40 pb-20 md:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-14 text-center text-white shadow-card-soft md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_15%,oklch(0.9_0.17_95/0.4),transparent_55%)]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -top-1/3 right-1/4 h-[180%] w-40 rotate-12 bg-primary/[0.06]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                <ShieldCheck className="h-7 w-7" />
              </span>

              <h2 className="mt-6 text-3xl font-extrabold uppercase leading-[1.12] tracking-tight font-heading md:text-5xl">
                {titleLine1}{" "}
                <span className="text-primary">
                  {titleLine2Prefix}
                  {titleLine2Highlight}
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
