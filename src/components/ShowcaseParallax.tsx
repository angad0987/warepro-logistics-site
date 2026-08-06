import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import showcaseImg from "@/assets/showcase-warehouse.jpg";
import { showcaseSection } from "@/content/homeSections";

export function ShowcaseParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.img
        src={showcaseImg}
        alt="Inside a CoreWarehousing distribution centre"
        loading="lazy"
        width={1920}
        height={1080}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />

      <div className="container-x relative py-28 md:py-40 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {showcaseSection.eyebrow}
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-[1.05] text-balance">
            {showcaseSection.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            {showcaseSection.description}
          </p>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm md:text-base font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.04]"
          >
            {showcaseSection.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
