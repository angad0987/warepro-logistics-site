import { Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { howWeWorkPage } from "@/content/howWeWork";

const columnIcons = ["PackageCheck", "Warehouse", "ClipboardList", "Truck"] as const;

export function ControlPointsSection() {
  const { controlPoints } = howWeWorkPage;

  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
            {controlPoints.headline}{" "}
            <span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              {controlPoints.headlineHighlight}
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {controlPoints.columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card-soft h-full transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-primary/8">
                  <DynamicIcon name={columnIcons[i]} className="h-5 w-5 text-navy" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy font-heading">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
