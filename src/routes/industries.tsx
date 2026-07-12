import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag, Store, Utensils, Cpu, Shirt, Factory, Package, Car, HeartPulse, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | CoreWarehousing" },
      { name: "description", content: "3PL warehousing and fulfillment for eCommerce, Retail, FMCG, Electronics, Fashion, Manufacturing, Consumer Goods, Automotive and Healthcare." },
      { property: "og:title", content: "Industries We Serve | CoreWarehousing" },
      { property: "og:description", content: "Purpose-built logistics for the industries we know best." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const industries = [
  { icon: ShoppingBag, title: "eCommerce", desc: "Multi-marketplace fulfillment with same-day dispatch." },
  { icon: Store, title: "Retail", desc: "Store replenishment, compliance labelling and returns." },
  { icon: Utensils, title: "FMCG", desc: "High-velocity SKU handling and batch tracking." },
  { icon: Cpu, title: "Electronics", desc: "Serial-number capture, secure storage and safe handling." },
  { icon: Shirt, title: "Fashion", desc: "Seasonal storage, kitting, tagging and returns processing." },
  { icon: Factory, title: "Manufacturing", desc: "Raw material storage, JIT delivery and cross-docking." },
  { icon: Package, title: "Consumer Goods", desc: "National distribution and bulk B2B fulfillment." },
  { icon: Car, title: "Automotive", desc: "Spare parts warehousing and dealer distribution." },
  { icon: HeartPulse, title: "Healthcare", desc: "Compliant storage and time-sensitive dispatch." },
];

function Industries() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Industries</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Logistics tuned to your sector.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              We serve high-growth brands across nine industries — each with its own compliance, handling and dispatch playbooks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-navy">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
              Talk to a sector specialist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
