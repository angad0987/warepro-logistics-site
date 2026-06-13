import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Snowflake, Boxes, Truck, Route as RouteIcon, ShoppingCart, Check } from "lucide-react";
import inventoryImg from "@/assets/inventory.jpg";
import coldImg from "@/assets/cold-storage.jpg";
import fulfillmentImg from "@/assets/fulfillment.jpg";
import warehouseImg from "@/assets/warehouse-aerial.jpg";
import fleetImg from "@/assets/fleet.jpg";
import heroImg from "@/assets/hero-warehouse.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Warehousing, Transportation & Fulfillment | WarePro" },
      { name: "description", content: "Explore WarePro's full suite of logistics services: general warehousing, cold storage, inventory management, transportation, distribution, and e-commerce fulfillment." },
      { property: "og:title", content: "WarePro Services" },
      { property: "og:description", content: "Premium logistics services tailored to your supply chain." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: warehouseImg },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Warehouse,
    title: "General Warehousing",
    image: heroImg,
    description: "Flexible, scalable storage for pallets, cases, and oversized goods in monitored facilities.",
    benefits: ["Dedicated or shared space", "Pallet & case-level storage", "Cycle counts & reporting", "Climate-controlled options"],
  },
  {
    icon: Snowflake,
    title: "Cold Storage",
    image: coldImg,
    description: "Temperature-controlled facilities for food, pharma, and perishable inventory.",
    benefits: ["–20°F to 55°F ranges", "FDA & HACCP compliant", "Continuous monitoring", "Cross-dock capable"],
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    image: inventoryImg,
    description: "Real-time inventory visibility with SKU-level accuracy and powerful reporting.",
    benefits: ["Live dashboards & APIs", "Lot & serial tracking", "Automated reorder alerts", "99.9% accuracy SLA"],
  },
  {
    icon: Truck,
    title: "Transportation",
    image: fleetImg,
    description: "Owned fleet with LTL, FTL, and last-mile delivery options across the country.",
    benefits: ["Owned & contracted fleet", "GPS tracking & ETAs", "Same-day & next-day", "Proof of delivery"],
  },
  {
    icon: RouteIcon,
    title: "Distribution",
    image: warehouseImg,
    description: "Multi-node distribution network with strategic hubs for fast nationwide coverage.",
    benefits: ["Multi-node fulfillment", "2-day shipping coverage", "Routing optimization", "Carrier rate shopping"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Fulfillment",
    image: fulfillmentImg,
    description: "Direct integrations and same-day shipping for DTC brands and marketplaces.",
    benefits: ["Shopify / Amazon / WooCommerce", "Same-day pick & pack", "Branded packaging", "Returns processing"],
  },
];

function Services() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,oklch(0.66_0.16_248_/_0.6),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-glow">Our Services</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">A complete logistics toolkit for modern brands.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              From storage to last-mile delivery, every WarePro service is designed to scale with you and integrate seamlessly with your systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-24">
        <div className="container-x space-y-20">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <article className={`grid lg:grid-cols-2 gap-10 items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative">
                    <div className="aspect-[5/4] overflow-hidden rounded-3xl shadow-elegant">
                      <img src={s.image} alt={s.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                    <div className="absolute -bottom-5 -left-5 grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
                      <s.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">Service {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">{s.title}</h2>
                    <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{s.description}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-foreground">
                          <span className="grid h-6 w-6 mt-0.5 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-3xl gradient-primary p-12 md:p-16 text-center text-white shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which service fits?</h2>
            <p className="mt-4 text-white/85 text-lg max-w-xl mx-auto">Our team will design a custom logistics plan tailored to your volume and growth goals.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-primary shadow-elegant hover:scale-[1.03] transition-transform">
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
