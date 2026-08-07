import { motion } from "framer-motion";

import { DynamicIcon } from "@/lib/DynamicIcon";
import { trustPillars } from "@/content/testimonials";
import { testimonialsSection } from "@/content/home";

export function TestimonialsMarquee() {
  return (
    <section className="relative overflow-hidden gradient-dark py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px] animate-float-slow" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {testimonialsSection.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold font-heading text-balance">
            {testimonialsSection.headline}
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">{testimonialsSection.subheadline}</p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:gap-5 sm:grid-cols-2">
          {trustPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-outline glass-panel flex gap-5 rounded-[22px] p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <DynamicIcon name={p.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
