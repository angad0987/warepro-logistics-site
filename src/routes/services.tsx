import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Warehouse, Boxes, Package, ShoppingCart, Truck, RotateCcw, PackageOpen, Layers, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { HowItWorks } from "@/components/HowItWorks";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Warehousing, Fulfillment & Distribution | CoreWarehousing" },
      { name: "description", content: "Eight integrated 3PL services: warehousing, inventory management, B2B & eCommerce fulfillment, transportation, reverse logistics, packaging, cross-docking." },
      { property: "og:title", content: "Services | CoreWarehousing" },
      { property: "og:description", content: "Explore our full range of warehousing and 3PL fulfillment services." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  long: string;
  bullets: string[];
  image: string;
};

const services: Service[] = [
  {
    icon: Warehouse,
    title: "Warehousing",
    tagline: "Secure, scalable storage across India.",
    desc: "Secure, scalable storage with shared and dedicated options across strategic locations. Racked, floor and bulk storage.",
    long: "Purpose-built facilities across strategic locations offering shared, dedicated and hybrid storage models. Choose racked, floor or bulk storage — all with CCTV, fire safety and access-controlled zones. Scale up during peak seasons without long-term commitments.",
    bullets: ["Racked, floor & bulk storage", "24/7 CCTV + access control", "Fire & safety compliant", "Shared or dedicated space", "Pan-India footprint"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&auto=format&fit=crop",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    tagline: "SKU-level accuracy, always.",
    desc: "SKU-level accuracy with cycle counts, reconciliation and manual MIS handled by our operations team.",
    long: "Track every SKU in real time with our WMS-backed inventory workflows. Routine cycle counts, reconciliation and shrinkage reports give you the visibility you need to plan replenishment and prevent stock-outs.",
    bullets: ["Real-time SKU tracking", "Daily & weekly cycle counts", "Batch & expiry management", "Reconciliation reports", "Low-stock alerts"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
  },
  {
    icon: Package,
    title: "B2B Fulfillment",
    tagline: "Built for distributors and wholesalers.",
    desc: "Bulk order processing, palletized dispatch and retailer-compliant labelling for distributors and wholesalers.",
    long: "High-volume B2B order processing with palletized dispatch, retailer-compliant labelling and full ASN documentation. Purpose-built for distributors, wholesalers and modern trade partners across India.",
    bullets: ["Palletized bulk dispatch", "Retailer-compliant labels", "ASN & GRN documentation", "Modern trade ready", "Dedicated B2B lanes"],
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&auto=format&fit=crop",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Fulfillment",
    tagline: "Ship faster on every marketplace.",
    desc: "Pick, pack and ship across Amazon, Flipkart, Shopify, WooCommerce and Meesho with same-day dispatch.",
    long: "Native marketplace integrations, automated order flow and same-day dispatch cut-offs help you delight customers on every channel — Amazon, Flipkart, Shopify, WooCommerce and Meesho all handled from one operational hub.",
    bullets: ["Amazon, Flipkart, Meesho ready", "Shopify & WooCommerce sync", "Same-day dispatch cut-off", "Branded packaging options", "Returns handling included"],
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&auto=format&fit=crop",
  },
  {
    icon: Truck,
    title: "Transportation & Distribution",
    tagline: "Nationwide reach, one accountable partner.",
    desc: "PTL, FTL and last-mile distribution nationwide via our vetted carrier network.",
    long: "Move product across India through our vetted carrier network. Whether you need PTL, FTL, express or last-mile, we route your shipments for the best balance of cost, speed and reliability — with a single point of accountability.",
    bullets: ["PTL, FTL & express modes", "Last-mile delivery network", "Route optimization", "Vetted carrier partners", "Single point of contact"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&auto=format&fit=crop",
  },
  {
    icon: RotateCcw,
    title: "Reverse Logistics",
    tagline: "Turn returns into recovered value.",
    desc: "Returns processing, quality checks, refurbishment and restocking with full audit trail.",
    long: "End-to-end returns handling — from pickup coordination to inspection, refurbishment and restocking. Recover as much value as possible while giving your customers a smooth returns experience.",
    bullets: ["Returns pickup coordination", "Quality inspection & grading", "Refurbishment workflows", "Restocking & disposal", "Full return audit trail"],
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=1200&auto=format&fit=crop",
  },
  {
    icon: PackageOpen,
    title: "Packaging & Kitting",
    tagline: "Value-added prep, done right.",
    desc: "Custom kitting, bundling, gift-wrapping and value-added packaging services.",
    long: "From bundling multi-SKU kits to seasonal gift-wrapping and promotional inserts, our value-added services turn your inventory into shelf-ready or customer-ready product — at any scale.",
    bullets: ["Multi-SKU kitting & bundling", "Custom & branded packaging", "Promotional inserts", "Gift wrapping", "Compliance labelling"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Cross Docking",
    tagline: "Skip storage, speed up delivery.",
    desc: "Direct dock-to-dock transfers to cut dwell time, reduce handling and speed up delivery.",
    long: "Move inbound freight directly to outbound trucks with minimal dwell time. Ideal for high-velocity SKUs, promotional launches and time-sensitive B2B distribution — cut inventory costs and speed up delivery cycles.",
    bullets: ["Dock-to-dock transfers", "Reduced handling", "Faster time-to-shelf", "Lower inventory holding", "Ideal for promotions"],
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200&auto=format&fit=crop",
  },
];

function Services() {
  const [active, setActive] = useState<Service | null>(null);

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
              Discuss your requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks className="bg-secondary/40" />

      <DetailDialog item={active} onClose={() => setActive(null)} />
    </>
  );
}

function DetailDialog({ item, onClose }: { item: Service | null; onClose: () => void }) {
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
