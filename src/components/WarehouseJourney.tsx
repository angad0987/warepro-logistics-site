import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { DynamicIcon } from "@/lib/DynamicIcon";
import { journeySection, journeySteps, journeyStepsB2B } from "@/content/homeSections";
import { opImages } from "@/lib/opImages";

type Flow = "3PL" | "B2B";

export function WarehouseJourney() {
  const [flow, setFlow] = useState<Flow>("3PL");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const steps = flow === "3PL" ? journeySteps : journeyStepsB2B;

  return (
    <section className="relative section-y overflow-hidden gradient-dark text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {journeySection.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-[1.08] text-balance">
            {journeySection.headline}
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            {journeySection.subheadline}
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 p-1">
            {(["3PL", "B2B"] as Flow[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFlow(f)}
                className={
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 " +
                  (flow === f
                    ? "bg-primary text-primary-foreground"
                    : "text-white/60 hover:text-white")
                }
              >
                {f === "3PL" ? "3PL Fulfillment" : "B2B Bulk"}
              </button>
            ))}
          </div>
        </motion.div>

        <div ref={containerRef} key={flow} className="relative mt-16 md:mt-20">
          {/* progress rail */}
          <div className="pointer-events-none absolute left-[27px] top-2 bottom-2 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-primary/70 to-transparent"
            />
          </div>

          <ol className="space-y-12 md:space-y-20">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-4 md:grid-cols-2 md:gap-14"
              >
                {/* node */}
                <span className="relative z-10 mt-1 grid h-14 w-14 place-items-center rounded-2xl glass-panel text-primary transition-transform duration-500 group-hover:scale-110 md:absolute md:left-1/2 md:top-8 md:-translate-x-1/2">
                  <DynamicIcon name={step.icon} className="h-6 w-6" />
                </span>

                <div className={i % 2 === 0 ? "md:pr-20 md:text-right" : "md:order-2 md:pl-20"}>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold font-heading">{step.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>

                <div
                  className={
                    i % 2 === 0
                      ? "col-span-2 md:col-span-1 md:pl-20"
                      : "col-span-2 md:order-1 md:col-span-1 md:pr-20"
                  }
                >
                  <div className="gradient-outline overflow-hidden rounded-[22px] shadow-elegant">
                    <img
                      src={opImages[step.image]}
                      alt={`${step.title} operations at CoreWarehousing`}
                      loading="lazy"
                      width={1280}
                      height={900}
                      className="h-52 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 md:h-60"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
