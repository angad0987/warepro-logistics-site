import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { DetailModal } from "@/components/DetailModal";
import { industries, industriesPage, type IndustryItem } from "@/content/industries";
import industriesLogo from "@/assets/industrieslogo.png";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | CoreWarehousing" },
      {
        name: "description",
        content:
          "3PL warehousing and fulfillment for eCommerce, Retail, FMCG, Electronics, Fashion, Manufacturing, Consumer Goods, Automotive and Healthcare.",
      },
      { property: "og:title", content: "Industries We Serve | CoreWarehousing" },
      {
        property: "og:description",
        content: "Purpose-built logistics for the industries we know best.",
      },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  const [active, setActive] = useState<IndustryItem | null>(null);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {industriesPage.heroEyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">
              {industriesPage.heroHeadline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {industriesPage.heroSubheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="group text-left w-full h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft cursor-pointer transition-all hover:shadow-elegant hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <DynamicIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-navy font-heading">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowRight className="h-3 w-3" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-x">
          <Reveal className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {industriesPage.logoSectionEyebrow}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {industriesPage.logoSectionHeadline}
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              {industriesPage.logoSectionSubheadline}
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <img
              src={industriesLogo}
              alt="Industries we serve"
              className="w-full max-w-5xl mx-auto object-contain"
            />
          </Reveal>
          <Reveal className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform"
            >
              {industriesPage.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <DetailModal item={active} onClose={() => setActive(null)} ctaLabel="Get a Quote" />
    </>
  );
}
