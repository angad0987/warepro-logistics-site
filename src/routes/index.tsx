import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Warehouse, Boxes, Truck, Route as RouteIcon, MapPin, ShoppingCart,
  ShieldCheck, Activity, Users, DollarSign, Globe2, Clock,
  ClipboardList, PackageOpen, Radar, Send, Quote, Plus, Minus,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-warehouse.jpg";
import fleetImg from "@/assets/fleet.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WarePro Logistics — Smart Warehousing & Distribution" },
      { name: "description", content: "End-to-end warehousing, fulfillment, transportation and real-time inventory tracking. Nationwide coverage, 99.9% accuracy, 24/7 operations." },
      { property: "og:title", content: "WarePro Logistics — Smart Warehousing & Distribution" },
      { property: "og:description", content: "Premium 3PL services: storage, fulfillment, transportation. Get a free quote." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "WarePro Logistics",
          url: "/",
          description: "Smart warehousing and logistics solutions.",
          address: { "@type": "PostalAddress", streetAddress: "2100 Logistics Park Blvd", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
          contactPoint: { "@type": "ContactPoint", telephone: "+1-555-010-2200", contactType: "customer service" },
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "500K+", label: "sq ft Warehouse Space" },
  { value: "1,000+", label: "Deliveries Monthly" },
  { value: "99.9%", label: "Inventory Accuracy" },
  { value: "24/7", label: "Operations" },
];

const services = [
  { icon: Warehouse, title: "Warehousing", desc: "Secure, scalable storage with dedicated and shared options." },
  { icon: Boxes, title: "Inventory Management", desc: "Real-time visibility, cycle counts, and SKU-level accuracy." },
  { icon: RouteIcon, title: "Distribution", desc: "Pick, pack, and ship with regional and national network coverage." },
  { icon: Truck, title: "Transportation", desc: "LTL, FTL, and last-mile delivery powered by our owned fleet." },
  { icon: MapPin, title: "Fleet Tracking", desc: "GPS tracking, ETAs, and proof of delivery in a single dashboard." },
  { icon: ShoppingCart, title: "E-commerce Fulfillment", desc: "Direct integrations with Shopify, Amazon, and WooCommerce." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Secure Storage", desc: "24/7 monitored facilities with fire suppression and biometric access." },
  { icon: Activity, title: "Real-Time Tracking", desc: "Live inventory and shipment dashboards with API access." },
  { icon: Users, title: "Experienced Team", desc: "Logistics specialists with 20+ years of supply chain expertise." },
  { icon: DollarSign, title: "Cost Effective", desc: "Volume-based pricing tailored to your storage and shipping mix." },
  { icon: Globe2, title: "Nationwide Coverage", desc: "Strategically placed hubs across the country for fast delivery." },
  { icon: Clock, title: "24/7 Operations", desc: "Around-the-clock receiving, processing, and outbound shipping." },
];

const steps = [
  { icon: ClipboardList, title: "Request a Quote", desc: "Tell us about your storage and shipping needs." },
  { icon: PackageOpen, title: "Store Your Inventory", desc: "We onboard, label, and rack your SKUs." },
  { icon: Radar, title: "Track in Real Time", desc: "Monitor stock and shipments from one dashboard." },
  { icon: Send, title: "Fast Delivery", desc: "Orders ship same-day, nationwide." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "COO, NorthPeak Goods", quote: "WarePro became an extension of our team. Our order accuracy hit 99.9% and shipping times dropped by 40%." },
  { name: "David Chen", role: "Founder, Brightline DTC", quote: "Their fulfillment integrations are seamless. We scaled from 200 to 2,000 daily orders without missing a beat." },
  { name: "Marisol Pérez", role: "VP Ops, FreshHaul", quote: "Cold storage, transportation, and reporting all in one partner. The visibility is incredible." },
];

const faqs = [
  { q: "How quickly can I onboard with WarePro?", a: "Most clients are receiving inventory within 5–10 business days of signing." },
  { q: "Do you offer dedicated or shared warehousing?", a: "Both. We tailor the model to your volume, SKU profile, and growth plans." },
  { q: "Which e-commerce platforms do you integrate with?", a: "Shopify, Amazon, WooCommerce, BigCommerce, Magento, and custom APIs." },
  { q: "Where are your facilities located?", a: "Nationwide hubs across major distribution corridors with multi-node coverage." },
  { q: "Is there a minimum contract length?", a: "We offer flexible month-to-month plans as well as long-term partnerships." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Modern warehouse interior at WarePro"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-navy/40" />

        <div className="container-x relative z-10 pt-28 pb-20 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse" />
              Trusted 3PL Partner Since 2008
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Smart Warehousing & <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">Logistics Solutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Secure storage, inventory management, transportation, and distribution services for businesses of all sizes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="container-x pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 overflow-hidden">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-navy/40 p-5 md:p-7 text-center"
                >
                  <div className="text-2xl md:text-4xl font-bold font-display text-white">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm text-white/70">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we do</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">End-to-end logistics, under one roof.</h2>
            <p className="mt-4 text-muted-foreground text-lg">From the dock door to the doorstep — we run the operational backbone behind growing brands.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.66_0.16_248_/_0.35),transparent_50%)]" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary-glow">Why WarePro</span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for ambitious supply chains.</h2>
                <p className="mt-4 text-white/70 text-lg">We blend modern technology with operational discipline — so you get reliability at every scale.</p>
                <img src={fleetImg} alt="WarePro fleet" loading="lazy" width={1280} height={800} className="mt-10 rounded-2xl shadow-elegant w-full" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
                    <w.icon className="h-7 w-7 text-primary-glow" />
                    <h3 className="mt-4 font-display font-bold text-lg">{w.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">How it works</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">From quote to delivery in 4 simple steps.</h2>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant relative z-10">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-2 text-xs font-bold tracking-widest text-primary">STEP {i + 1}</div>
                  <h3 className="mt-2 text-xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/50">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Brands that trust us with their inventory.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Questions, answered.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Don't see what you're looking for? Reach out — our team responds within a few hours.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={f.q} {...f} defaultOpen={i === 0} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 md:p-20 text-center text-white shadow-elegant">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to Optimize Your Supply Chain?</h2>
                <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">Get a tailored quote in under 24 hours — no commitment required.</p>
                <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-elegant hover:scale-[1.03] transition-transform">
                  Request Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card shadow-card-soft overflow-hidden">
      <button onClick={() => setOpen((s) => !s)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}
