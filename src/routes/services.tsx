import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Warehouse, Boxes, Package, ShoppingCart, Truck, RotateCcw, PackageOpen, Layers, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Warehousing, Fulfillment & Distribution | CoreWarehousing" },
      { name: "description", content: "Eight integrated 3PL services: warehousing, inventory management, B2B & eCommerce fulfillment, transportation, reverse logistics, packaging, cross-docking." },
      { property: "og:title", content: "Services | CoreWarehousing" },
      { property: "og:description", content: "Explore our full range of warehousing and 3PL fulfillment services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Warehouse, title: "Warehousing", desc: "Secure, scalable storage with shared and dedicated options across strategic locations. Racked, floor and bulk storage." },
  { icon: Boxes, title: "Inventory Management", desc: "SKU-level accuracy with cycle counts, reconciliation and manual MIS handled by our operations team." },
  { icon: Package, title: "B2B Fulfillment", desc: "Bulk order processing, palletized dispatch and retailer-compliant labelling for distributors and wholesalers." },
  { icon: ShoppingCart, title: "eCommerce Fulfillment", desc: "Pick, pack and ship across Amazon, Flipkart, Shopify, WooCommerce and Meesho with same-day dispatch." },
  { icon: Truck, title: "Transportation & Distribution", desc: "PTL, FTL and last-mile distribution nationwide via our vetted carrier network." },
  { icon: RotateCcw, title: "Reverse Logistics", desc: "Returns processing, quality checks, refurbishment and restocking with full audit trail." },
  { icon: PackageOpen, title: "Packaging & Kitting", desc: "Custom kitting, bundling, gift-wrapping and value-added packaging services." },
  { icon: Layers, title: "Cross Docking", desc: "Direct dock-to-dock transfers to cut dwell time, reduce handling and speed up delivery." },
];

function Services() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our services</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Everything you need to run a modern supply chain.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              Eight integrated services designed for B2B, D2C and 3PL operations — delivered from a single accountable partner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
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
              Discuss your requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
