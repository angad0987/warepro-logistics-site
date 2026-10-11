import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { howWeWorkPage } from "@/content/howWeWork";

const stepIcons = [
  "Compass",
  "Boxes",
  "PackageCheck",
  "Warehouse",
  "ClipboardList",
  "Truck",
] as const;

export function InventoryJourneySection() {
  const { journey } = howWeWorkPage;

  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
            {journey.headline}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              {journey.headlineHighlight}
            </span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-amber-500" />
        </Reveal>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="mt-14 md:mt-16 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 pb-4" style={{ scrollSnapType: "x mandatory" }}>
          {journey.steps.map((step, i) => (
            <div
              key={step.num}
              className="relative shrink-0 w-[260px] pt-5"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Number badge — child of card */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 z-10 grid h-[38px] w-[38px] place-items-center rounded-full gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                {step.num}
              </span>

              {/* Card */}
              <div className="rounded-xl border border-border bg-card shadow-card-soft flex flex-col items-center px-4 pt-5 pb-4 text-center">
                <div className="grid h-[65px] w-[75px] place-items-center shrink-0">
                  <DynamicIcon name={stepIcons[i]} className="h-[50px] w-[50px] text-primary" />
                </div>
                <h3 className="mt-3 text-xs font-bold uppercase tracking-wide text-navy font-heading leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: all 6 in a row */}
      <div className="hidden md:block container-x">
        <div className="flex items-stretch justify-center gap-4 lg:gap-5">
          {journey.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.06}>
              <div className="flex items-center gap-4 lg:gap-5">
                <div className="relative shrink-0 w-[155px] lg:w-[165px] pt-5">
                  {/* Number badge — child of card */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 z-10 grid h-[38px] w-[38px] place-items-center rounded-full gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                    {step.num}
                  </span>

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant flex flex-col items-center px-3 pt-5 pb-4 text-center">
                    <div className="grid h-[65px] w-[75px] place-items-center shrink-0">
                      <DynamicIcon name={stepIcons[i]} className="h-[50px] w-[50px] text-primary" />
                    </div>
                    <h3 className="mt-3 text-[11px] lg:text-xs font-bold uppercase tracking-wide text-navy font-heading leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[10px] lg:text-[11px] text-muted-foreground leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {i < journey.steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 text-navy shrink-0 self-center mt-4" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
