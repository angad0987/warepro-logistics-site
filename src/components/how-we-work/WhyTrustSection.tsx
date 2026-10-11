import { Eye, TrendingUp } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { howWeWorkPage } from "@/content/howWeWork";

export function WhyTrustSection() {
  const { whyTrust } = howWeWorkPage;

  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
            {whyTrust.headline}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              {whyTrust.headlineHighlight}
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid gap-6 sm:grid-cols-3">
          {whyTrust.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-card-soft text-center h-full transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-primary/40 bg-primary/8">
                  <DynamicIcon name={reason.icon} className="h-8 w-8 text-navy" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy font-heading">{reason.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
