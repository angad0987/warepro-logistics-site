import { Check, BarChart3, PieChart, Table2 } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { howWeWorkPage } from "@/content/howWeWork";

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-card-soft overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-[11px] font-semibold tracking-wider uppercase text-primary">
          MIS Report
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {[
          { label: "Inventory Summary", value: "12,540", sub: "Total SKUs" },
          { label: "Orders Shipped", value: "3,280", sub: "Total To Date" },
          { label: "Pending Orders", value: "256", sub: "Total To Date" },
          { label: "Stock Value", value: "\u20B948.6L", sub: "Current Value" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-background p-3">
            <div className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
              {stat.label}
            </div>
            <div className="mt-1 text-lg font-bold text-navy font-heading">{stat.value}</div>
            <div className="text-[10px] text-muted-foreground">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-4 grid grid-cols-[1.2fr_1fr] gap-3">
        {/* Bar chart placeholder */}
        <div className="rounded-xl border border-border bg-background p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <BarChart3 className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">
              Monthly Inward/Outward
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {[65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 65, 80].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/70" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[8px] text-muted-foreground">Jan</span>
            <span className="text-[8px] text-muted-foreground">Jun</span>
            <span className="text-[8px] text-muted-foreground">Dec</span>
          </div>
        </div>

        {/* Donut chart placeholder */}
        <div className="rounded-xl border border-border bg-background p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <PieChart className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">
              Stock by Category
            </span>
          </div>
          <div className="flex items-center justify-center h-20">
            <div className="relative h-16 w-16">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  className="stroke-secondary"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="4"
                  strokeDasharray="40 60"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  className="stroke-navy"
                  strokeWidth="4"
                  strokeDasharray="25 75"
                  strokeDashoffset="-40"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  className="stroke-steel"
                  strokeWidth="4"
                  strokeDasharray="35 65"
                  strokeDashoffset="-65"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 justify-center">
            {[
              { color: "bg-primary", label: "Active" },
              { color: "bg-navy", label: "Reserved" },
              { color: "bg-steel", label: "In Transit" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-full ${c.color}`} />
                <span className="text-[9px] text-muted-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table placeholder */}
      <div className="mt-4 rounded-xl border border-border bg-background p-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Table2 className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] font-semibold uppercase text-muted-foreground">
            Top SKUs
          </span>
        </div>
        <div className="space-y-1.5">
          {[
            { name: "SKU-1024", qty: "2,450", status: "In Stock" },
            { name: "SKU-2048", qty: "1,820", status: "In Stock" },
            { name: "SKU-4096", qty: "980", status: "Low" },
          ].map((row) => (
            <div key={row.name} className="flex items-center justify-between text-[10px]">
              <span className="font-medium text-navy">{row.name}</span>
              <span className="text-muted-foreground">{row.qty} units</span>
              <span
                className={`font-medium ${
                  row.status === "Low" ? "text-red-500" : "text-green-600"
                }`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MISReportsSection() {
  const { mis, dedicatedManager } = howWeWorkPage;

  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {/* Left — Dashboard mockup */}
          <Reveal className="order-1 lg:order-1">
            <DashboardMockup />
          </Reveal>

          {/* Middle — features */}
          <Reveal delay={0.1} className="order-3 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {mis.eyebrow}
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-navy font-heading leading-[1.1] text-balance">
              {mis.headline}
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              {mis.paragraph}
            </p>

            <div className="mt-8 grid gap-4">
              {mis.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/8 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy">{feat.label}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm font-medium text-navy leading-relaxed">{mis.callout}</p>
            </div>
          </Reveal>

          {/* Right — dark card */}
          <Reveal delay={0.2} className="order-2 lg:order-3">
            <div className="rounded-2xl gradient-dark p-6 md:p-7 text-white relative overflow-hidden">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
                {dedicatedManager.eyebrow}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading leading-tight">
                {dedicatedManager.headline}
              </h3>

              <ul className="mt-6 space-y-3.5">
                {dedicatedManager.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 24/7 badge */}
              <div className="mt-8 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-primary/10">
                  <span className="text-sm font-bold text-primary">24/7</span>
                </span>
                <span className="text-xs text-white/60 leading-snug">
                  Support whenever
                  <br />
                  you need it
                </span>
              </div>

              {/* Decorative blur */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
