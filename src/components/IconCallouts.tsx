import { Reveal } from "@/components/Reveal";
import { getIcon } from "@/lib/icons";
import { whyChooseUs } from "@/content/why-choose-us";

export function IconCallouts({
  eyebrow = "Why partner with us",
  title = "Built for modern supply chain.",
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
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((v, i) => {
              const Icon = getIcon(v.icon);
              return (
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
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mt-4 text-[11px] font-bold tracking-[0.2em] text-primary font-heading">{v.microLabel}</div>
                    <h3 className={`mt-1 text-lg font-bold ${dark ? "" : "text-navy"}`}>{v.title}</h3>
                    <ul className={`mt-3 space-y-1 text-sm ${dark ? "text-white/70" : "text-muted-foreground"}`}>
                      {v.bullets.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}