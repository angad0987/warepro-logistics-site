import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { testimonials } from "@/content/testimonials";
import { testimonialsSection } from "@/content/home";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsMarquee() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden gradient-dark py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[120px] animate-float-slow" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {testimonialsSection.eyebrow}
          </span>
          <span className="ml-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
            {testimonialsSection.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold font-heading text-balance">
            {testimonialsSection.headline}
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">{testimonialsSection.subheadline}</p>
        </motion.div>
      </div>

      <div className="fade-edges relative mt-14 overflow-hidden">
        <div className="marquee-track flex w-max">
          <div className="animate-marquee-slow flex w-max items-stretch gap-5 pr-5">
            {loop.map((t, i) => (
              <figure
                key={`${t.label}-${i}`}
                className="gradient-outline glass-panel relative flex w-[20rem] shrink-0 flex-col rounded-[22px] p-7 transition-transform duration-500 hover:-translate-y-1.5 md:w-[24rem]"
              >
                {!t.isVerified && (
                  <span className="absolute right-5 top-5 rounded-full border border-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/45">
                    Example
                  </span>
                )}
                <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
                <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.label}
                </span>
                <blockquote className="mt-3 flex-1 text-sm md:text-base leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>

                {t.isVerified && (
                  <div className="mt-5 flex gap-0.5" aria-label={`${t.rating ?? 5} out of 5 stars`}>
                    {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}

                <figcaption className="mt-5 border-t border-white/10 pt-5">
                  {t.isVerified ? (
                    <div className="flex min-w-0 items-center gap-3">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.name ?? ""}
                          loading="lazy"
                          decoding="async"
                          width={44}
                          height={44}
                          className="h-11 w-11 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                          {initials(t.name ?? "")}
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">
                          {t.name}
                        </span>
                        <span className="block truncate text-xs text-white/55">
                          {[t.role, t.company].filter(Boolean).join(", ")}
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        Illustrative Client Perspective
                      </span>
                      <span className="mt-1 block text-xs text-white/55">
                        Example content — verified client stories coming soon
                      </span>
                    </div>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x relative">
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-white/45">
          {testimonialsSection.disclaimer}
        </p>
      </div>
    </section>
  );
}
