import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import { BRAND } from "@/lib/brand";
import { whyChooseUsBrand, whyChooseUsHero } from "@/content/why-choose-us";
import heroImg from "@/assets/showcase-warehouse.jpg";

function BrandBadge() {
  const { monogram, name, taglineLead, taglineHighlight, taglineTail } = whyChooseUsBrand;
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-primary/40 bg-white/10 p-4 text-white shadow-elegant backdrop-blur-md lg:w-72">
      <span className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary font-heading text-lg font-extrabold text-primary-foreground">
          {monogram}
        </span>
        <div className="min-w-0">
          <div className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-white">
            {name}
          </div>
          <p className="mt-1 text-[11px] leading-snug text-white/70">
            {taglineLead} <span className="font-semibold text-primary">{taglineHighlight}</span>{" "}
            {taglineTail}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-16 text-white md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_75%_15%,oklch(0.9_0.17_95/0.35),transparent_55%)]" />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {whyChooseUsHero.eyebrow}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight font-heading sm:text-5xl md:text-6xl">
              <span className="block text-white">{whyChooseUsHero.headlineLine1}</span>
              <span className="block text-primary">
                {whyChooseUsHero.headlineLine2Prefix}
                {whyChooseUsHero.headlineLine2Highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {whyChooseUsHero.subheadline}
            </p>

            <div className="mt-7 h-1 w-20 rounded-full bg-primary" />

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/12"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                Talk to Sales
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[26px] shadow-elegant ring-1 ring-white/10">
              <img
                src={heroImg}
                alt="Modern warehouse storage racks and inventory operations"
                width={960}
                height={640}
                className="h-72 w-full object-cover sm:h-80 lg:h-[26rem]"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-navy via-navy/45 to-transparent lg:block" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
            </div>

            <div className="mt-6 flex lg:absolute lg:-top-8 lg:right-6 lg:mt-0">
              <BrandBadge />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
