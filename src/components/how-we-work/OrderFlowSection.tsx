import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { howWeWorkPage } from "@/content/howWeWork";
import imgPick from "@/assets/01-pick.webp";
import imgVerify from "@/assets/02-verify.webp";
import imgPack from "@/assets/03-pack.webp";
import imgDispatch from "@/assets/04-dispatch.webp";

const stepImages = [imgPick, imgVerify, imgPack, imgDispatch];

const stepIcons = ["Package", "ShieldCheck", "PackageCheck", "Truck"] as const;

export function OrderFlowSection() {
  const { orderFlow } = howWeWorkPage;

  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {orderFlow.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-navy font-heading leading-[1.1] text-balance">
            {orderFlow.headline}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            {orderFlow.subheadline}
          </p>
        </Reveal>

        <div className="mt-12 md:mt-14 flex items-start justify-start md:justify-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0">
          {orderFlow.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="relative shrink-0 w-[220px] sm:w-[240px] md:w-[250px] lg:w-[260px] pt-5">
                  {/* Number badge */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 z-10 grid h-9 w-9 place-items-center rounded-full gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                    <div className="p-4 sm:p-5 pt-6 text-center">
                      <div className="grid h-14 w-14 mx-auto place-items-center rounded-full border border-primary/40 bg-primary/8 mb-3">
                        <DynamicIcon name={stepIcons[i]} className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide text-navy font-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {i < orderFlow.steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-navy shrink-0 mt-6" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
