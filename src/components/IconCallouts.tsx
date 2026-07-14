import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Activity, Cpu, Zap, Users, DollarSign, Warehouse } from "lucide-react";

const values = [
  { icon: ShieldCheck, label: "SECURITY", title: "Reliable Operations", lines: ["Disciplined SLAs", "Daily accountability"] },
  { icon: Activity, label: "SCALE", title: "Scalable Solutions", lines: ["Flex capacity", "No lock-in"] },
  { icon: Cpu, label: "TECH", title: "Technology Driven", lines: ["WMS + integrations", "Digital order flow"] },
  { icon: Zap, label: "SPEED", title: "Faster Fulfillment", lines: ["Same-day dispatch", "Optimized pick-pack"] },
  { icon: Users, label: "SUPPORT", title: "Professional Support", lines: ["Dedicated managers", "Responsive comms"] },
  { icon: DollarSign, label: "VALUE", title: "Cost-Effective", lines: ["Transparent pricing", "Volume-based tiers"] },
];

export function IconCallouts({
  eyebrow = "Why CoreWarehousing",
  title = "Built for ambitious supply chains.",
  intro,
  variant = "light",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <section className={`py-24 md:py-28 relative overflow-hidden ${dark ? "gradient-dark text-white" : ""}`}>
      {dark && (
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.18_92_/_0.25),transparent_50%)]" />
      )}
      <div className="container-x relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{eyebrow}</span>
          <h2 className={`mt-3 text-3xl md:text-5xl font-bold ${dark ? "" : "text-navy"}`}>{title}</h2>
          {intro && (
            <p className={`mt-4 text-lg ${dark ? "text-white/75" : "text-muted-foreground"}`}>{intro}</p>
          )}
        </Reveal>

        <div className="relative mt-16">
          {/* Central hub — desktop only */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className={`h-40 w-40 rounded-full ${dark ? "bg-white/5 border border-white/10" : "bg-primary/10 border border-primary/20"} grid place-items-center shadow-elegant`}>
              <div className="h-24 w-24 rounded-full gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                <Warehouse className="h-10 w-10" />
              </div>
            </div>
          </div>

          {/* Dashed radial connectors — desktop only */}
          <svg
            aria-hidden
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="dashx" width="8" height="1" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0.5" x2="4" y2="0.5" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-56">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div
                  className={`h-full rounded-2xl p-6 text-center flex flex-col items-center transition-all hover:-translate-y-1 ${
                    dark
                      ? "border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10"
                      : "border border-border bg-card shadow-card-soft hover:shadow-elegant"
                  }`}
                >
                  <div className={`grid h-20 w-20 place-items-center rounded-full ${dark ? "bg-primary/20" : "bg-primary/15"} border-2 ${dark ? "border-white/10" : "border-primary/20"}`}>
                    <div className="grid h-14 w-14 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow">
                      <v.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 text-[11px] font-bold tracking-[0.2em] text-primary">{v.label}</div>
                  <h3 className={`mt-1 text-lg font-bold ${dark ? "" : "text-navy"}`}>{v.title}</h3>
                  <ul className={`mt-3 space-y-1 text-sm ${dark ? "text-white/70" : "text-muted-foreground"}`}>
                    {v.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
