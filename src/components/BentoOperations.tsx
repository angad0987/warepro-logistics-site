import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { DynamicIcon } from "@/lib/DynamicIcon";
import { bentoSection, bentoCards } from "@/content/homeSections";
import { opImages } from "@/lib/opImages";
import { cn } from "@/lib/utils";

export function BentoOperations() {
  return (
    <section className="section-y mesh-bg">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {bentoSection.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-navy font-heading leading-[1.08] text-balance">
            {bentoSection.headline}
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {bentoSection.subheadline}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem]">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                card.featured && "sm:col-span-2 lg:row-span-2",
                card.featured ? "min-h-[22rem]" : "min-h-[15rem]",
              )}
            >
              <Link
                to="/services"
                className="group gradient-outline relative block h-full overflow-hidden rounded-[22px] shadow-card-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <img
                  src={opImages[card.image]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(28rem_18rem_at_50%_120%,oklch(0.9_0.17_95/0.28),transparent_70%)]" />

                <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                  <span className="glass-panel mb-auto grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-primary">
                    <DynamicIcon name={card.icon} className="h-5 w-5" />
                  </span>
                  <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                    <div className="min-w-0">
                      <h3
                        className={cn(
                          "font-heading font-bold text-white",
                          card.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
                        )}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 leading-relaxed text-white/70",
                          card.featured ? "text-sm md:text-base max-w-md" : "text-sm",
                        )}
                      >
                        {card.desc}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-400 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
