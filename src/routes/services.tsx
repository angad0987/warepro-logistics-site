import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { HowItWorks } from "@/components/HowItWorks";
import { DynamicIcon } from "@/lib/DynamicIcon";
import { DetailModal } from "@/components/DetailModal";
import { services, servicesPage, type ServiceItem } from "@/content/services";
import img3pl from "@/assets/3pl.png";
import imgB2b from "@/assets/b2b.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Warehousing, Fulfillment & Distribution | CoreWarehousing" },
      {
        name: "description",
        content:
          "Eight integrated 3PL services: warehousing, inventory management, B2B & eCommerce fulfillment, transportation, reverse logistics, packaging, cross-docking.",
      },
      { property: "og:title", content: "Services | CoreWarehousing" },
      {
        property: "og:description",
        content: "Explore our full range of warehousing and 3PL fulfillment services.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState<ServiceItem | null>(null);
  const [flow, setFlow] = useState<"3PL" | "B2B">("3PL");

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {servicesPage.heroEyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">
              {servicesPage.heroHeadline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {servicesPage.heroSubheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
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

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {servicesPage.workflowEyebrow}
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy font-heading">
              {servicesPage.workflowHeadline}
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">{servicesPage.workflowSubheadline}</p>
          </Reveal>
          <div className="flex justify-center mt-10">
            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1 gap-1">
              {(["3PL", "B2B"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFlow(tab)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    flow === tab
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <Reveal className="mt-12" key={flow}>
            <img
              src={flow === "3PL" ? img3pl : imgB2b}
              alt={`${flow} workflow`}
              className="w-full max-w-5xl mx-auto object-contain"
            />
          </Reveal>
        </div>
      </section>

      <HowItWorks className="bg-secondary/40" />

      <DetailModal item={active} onClose={() => setActive(null)} />
    </>
  );
}
