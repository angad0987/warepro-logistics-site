import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { DynamicIcon } from "@/lib/DynamicIcon";
import { kpiSection, kpis, type KpiItem } from "@/content/homeSections";

function useCountUp(target: number, active: boolean, decimals = 0, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, decimals, duration]);
  return value;
}

function KpiCard({ item, index, active }: { item: KpiItem; index: number; active: boolean }) {
  const value = useCountUp(item.value, active, item.decimals ?? 0);
  const display =
    (item.decimals ? value.toFixed(item.decimals) : Math.round(value).toLocaleString("en-IN")) + item.suffix;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-outline glass-panel group relative overflow-hidden rounded-[22px] p-7 transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
        <DynamicIcon name={item.icon} className="h-5 w-5" />
      </span>
      <div className="mt-7 font-heading text-4xl md:text-5xl font-bold tracking-tight text-white tabular-nums">
        {item.prefix}
        {display}
      </div>
      <p className="mt-2 text-sm text-white/60">{item.label}</p>
    </motion.div>
  );
}

export function KpiStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-70" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {kpiSection.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold font-heading leading-[1.08] text-balance">
            {kpiSection.headline}
          </h2>
        </motion.div>

        <div ref={ref} className="mt-14 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <KpiCard key={k.label} item={k} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
