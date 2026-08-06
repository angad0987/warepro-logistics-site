import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IconCallouts } from "@/components/IconCallouts";
import { whyChooseUsPage } from "@/content/why-choose-us";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose CoreWarehousing | Reliable, Scalable, Tech-Driven 3PL" },
      { name: "description", content: "Six reasons brands choose CoreWarehousing: reliable operations, scalable solutions,fulfillment, professional support and cost-effectiveness." },
      { property: "og:title", content: "Why Choose CoreWarehousing" },
      { property: "og:description", content: "The reasons growing brands trust us with their warehousing and fulfillment." },
      { property: "og:url", content: "/why-choose-us" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

function WhyChooseUs() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{whyChooseUsPage.eyebrow}</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">{whyChooseUsPage.headline}</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {whyChooseUsPage.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <IconCallouts
        eyebrow={whyChooseUsPage.calloutEyebrow}
        title={whyChooseUsPage.calloutTitle}
        intro={whyChooseUsPage.calloutIntro}
      />

      <section className="pb-24 -mt-8">
        <div className="container-x text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
            {whyChooseUsPage.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}