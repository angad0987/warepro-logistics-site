import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { howWeWorkPage } from "@/content/howWeWork";
import heroImg from "@/assets/how-we-work-1.webp";

export function HeroSection() {
  const { hero } = howWeWorkPage;

  return (
    <section className="relative overflow-hidden gradient-dark text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />

      <div className="container-x relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {hero.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading leading-[1.1] text-balance">
              {hero.headline}
            </h1>

            {/* 3-step row with arrows */}
            <div className="mt-10 flex items-center gap-4 sm:gap-6">
              {hero.steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex flex-col items-center text-center">
                    <span className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full border-2 border-primary/50 bg-white/10">
                      <DynamicIcon
                        name={step.icon}
                        className="h-6 w-6 sm:h-7 sm:w-7 text-primary"
                      />
                    </span>
                    <span className="mt-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-white/80">
                      {step.label}
                    </span>
                  </div>
                  {i < hero.steps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-primary/60 shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
            >
              {hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right image + overlay card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[22px] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Warehouse operations"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={533}
                className="w-full h-[340px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            </div>

            {/* Overlay card */}
            <Reveal
              delay={0.3}
              className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 shadow-elegant">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                    <Info className="h-4 w-4" />
                  </span>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                      {hero.importantHeading}
                    </h2>
                    <p
                      className="mt-2 text-xs leading-relaxed text-white/70"
                      dangerouslySetInnerHTML={{ __html: hero.importantBody }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
