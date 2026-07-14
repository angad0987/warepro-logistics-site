import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag, Store, Utensils, Cpu, Shirt, Factory, Package, Car, HeartPulse, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | CoreWarehousing" },
      { name: "description", content: "3PL warehousing and fulfillment for eCommerce, Retail, FMCG, Electronics, Fashion, Manufacturing, Consumer Goods, Automotive and Healthcare." },
      { property: "og:title", content: "Industries We Serve | CoreWarehousing" },
      { property: "og:description", content: "Purpose-built logistics for the industries we know best." },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

type Industry = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  long: string;
  bullets: string[];
  image: string;
};

const industries: Industry[] = [
  {
    icon: ShoppingBag, title: "eCommerce", tagline: "Multi-marketplace, same-day dispatch.",
    desc: "Multi-marketplace fulfillment with same-day dispatch.",
    long: "Sell everywhere without operational chaos. We integrate with every major marketplace and D2C storefront so orders flow straight into our pick-pack lines with same-day dispatch cut-offs.",
    bullets: ["Marketplace integrations", "Same-day dispatch", "Branded unboxing options", "Returns handling", "Peak-season scaling"],
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&auto=format&fit=crop",
  },
  {
    icon: Store, title: "Retail", tagline: "Store-ready, compliance-first.",
    desc: "Store replenishment, compliance labelling and returns.",
    long: "Keep shelves stocked with reliable replenishment cycles, retailer-compliant labelling and organized reverse flows for damaged or unsold stock.",
    bullets: ["Store replenishment cycles", "Retailer compliance labels", "Damaged stock handling", "Planogram-ready kitting", "Regional distribution"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop",
  },
  {
    icon: Utensils, title: "FMCG", tagline: "Fast-moving inventory, tightly controlled.",
    desc: "High-velocity SKU handling and batch tracking.",
    long: "High-velocity SKUs, tight expiry windows and batch-level control — our FMCG operations are built for speed without compromising traceability.",
    bullets: ["Batch & expiry tracking", "FIFO/FEFO workflows", "High-throughput pick lines", "Regional distribution", "Retailer-ready dispatch"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop",
  },
  {
    icon: Cpu, title: "Electronics", tagline: "Serialized, secured, safely handled.",
    desc: "Serial-number capture, secure storage and safe handling.",
    long: "High-value electronics need serialized traceability, secure zones and careful handling. We capture serial numbers on inbound and dispatch — with full chain of custody.",
    bullets: ["Serial number capture", "Access-controlled zones", "Anti-static handling", "Warranty return flows", "Insured storage"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
  },
  {
    icon: Shirt, title: "Fashion", tagline: "Seasonal, size-heavy, returns-ready.",
    desc: "Seasonal storage, kitting, tagging and returns processing.",
    long: "Season launches, wide size matrices and heavy returns — fashion needs a partner that flexes. Tagging, hanging, folded storage and QC-driven returns handled at scale.",
    bullets: ["Hanging & folded storage", "Size/color matrix pick", "Tagging & labelling", "Returns QC & restock", "Seasonal ramp-up"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop",
  },
  {
    icon: Factory, title: "Manufacturing", tagline: "Raw materials to finished goods.",
    desc: "Raw material storage, JIT delivery and cross-docking.",
    long: "Bonded raw material storage, JIT deliveries to production lines and cross-docking for finished goods — we keep your manufacturing supply chain moving.",
    bullets: ["Raw material storage", "JIT line delivery", "Cross-docking", "Bonded storage options", "Finished-goods distribution"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&auto=format&fit=crop",
  },
  {
    icon: Package, title: "Consumer Goods", tagline: "National distribution at any scale.",
    desc: "National distribution and bulk B2B fulfillment.",
    long: "From regional distributors to national brands, we handle bulk B2B fulfillment and pan-India distribution with palletized dispatch and modern-trade compliance.",
    bullets: ["Bulk B2B fulfillment", "Pallet & carton dispatch", "Pan-India distribution", "Modern trade ready", "Promotional kitting"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
  },
  {
    icon: Car, title: "Automotive", tagline: "Spare parts, dealer networks, uptime.",
    desc: "Spare parts warehousing and dealer distribution.",
    long: "Spare parts warehousing with SKU-heavy inventory, dealer network distribution and dedicated lanes for aftermarket demand.",
    bullets: ["High-SKU parts storage", "Dealer network dispatch", "Aftermarket lanes", "Serialized tracking", "Regional stocking points"],
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&auto=format&fit=crop",
  },
  {
    icon: HeartPulse, title: "Healthcare", tagline: "Compliant, time-sensitive, traceable.",
    desc: "Compliant storage and time-sensitive dispatch.",
    long: "Regulated storage conditions, batch-level traceability and time-sensitive dispatch — healthcare demands zero-compromise fulfillment and we deliver on it.",
    bullets: ["Regulatory compliance", "Batch & expiry control", "Time-sensitive dispatch", "Traceable chain of custody", "Secure storage zones"],
    image: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1200&auto=format&fit=crop",
  },
];

function Industries() {
  const [active, setActive] = useState<Industry | null>(null);

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
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="group text-left w-full h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft cursor-pointer transition-all hover:shadow-elegant hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-navy">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowRight className="h-3 w-3" />
                  </span>
                </button>
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

      <DetailDialog item={active} onClose={() => setActive(null)} />
    </>
  );
}

function DetailDialog({ item, onClose }: { item: Industry | null; onClose: () => void }) {
  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {item && (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <item.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-navy">{item.title}</DialogTitle>
                <DialogDescription className="text-primary font-semibold">{item.tagline}</DialogDescription>
              </DialogHeader>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.long}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm text-foreground pt-1.5">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" onClick={onClose} className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <button onClick={onClose} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy hover:bg-muted">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
