import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { BRAND } from "@/lib/brand";
import { howWeWorkPage } from "@/content/howWeWork";
import ctaImg from "@/assets/howWeWork4.png";

export function CTABannerSection() {
  const { cta } = howWeWorkPage;

  return (
    <section className="pb-12 md:pb-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[24px] gradient-dark text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,oklch(0.85_0.18_92_/_0.35),transparent_50%)]" />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr]">
            {/* Left image — fills card, no card treatment */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1 h-[220px] sm:h-[280px] lg:h-auto lg:min-h-[340px]"
            >
              <img
                src={ctaImg}
                alt="Warehouse exterior at dusk"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/70" />
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 lg:order-2 flex items-center py-10 px-6 sm:px-10 lg:py-14 lg:pr-14"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading leading-[1.1] text-balance">
                  {cta.headline}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
                  {cta.subheadline}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
                  >
                    {cta.button}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-sm">{cta.phone}</span>
                    <a
                      href={BRAND.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" />
                      {cta.phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
