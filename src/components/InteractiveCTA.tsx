import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall } from "lucide-react";

import ctaImg from "@/assets/warehouse-aerial.jpg";
import { finalCta } from "@/content/homeSections";
import { BRAND } from "@/lib/brand";

export function InteractiveCTA() {
  return (
    <section className="section-y">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[28px] shadow-elegant"
        >
          <img
            src={ctaImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/92 to-navy/70" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-[110px] animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />

          <div className="relative px-7 py-16 text-center text-white md:px-16 md:py-24">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              {finalCta.eyebrow}
            </span>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-[1.08] text-balance">
              {finalCta.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              {finalCta.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm md:text-base font-bold text-primary-foreground animate-glow-pulse transition-transform duration-300 hover:scale-[1.04]"
              >
                {finalCta.primary}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm md:text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/12"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
