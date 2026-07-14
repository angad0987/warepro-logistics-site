import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowRight, Warehouse, Boxes, Truck, ShoppingCart, PackageOpen, RotateCcw,
  Package, Layers, ShieldCheck, Activity, Zap, Users, DollarSign, Cpu,
  CheckCircle2, Send, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import fleetImg from "@/assets/fleet.jpg";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { HowItWorks } from "@/components/HowItWorks";
import { IconCallouts } from "@/components/IconCallouts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreWarehousing — B2B Warehousing & 3PL Fulfillment in India" },
      { name: "description", content: "Reliable warehousing, inventory, B2B & eCommerce fulfillment, transportation and cross-docking. Get a tailored 3PL quote from CoreWarehousing." },
      { property: "og:title", content: "CoreWarehousing — B2B Warehousing & 3PL Fulfillment" },
      { property: "og:description", content: "End-to-end warehousing and fulfillment for growing brands. Request a quote today." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: BRAND.name,
        url: "/",
        description: "B2B Warehousing and 3PL fulfillment services.",
        address: { "@type": "PostalAddress", streetAddress: BRAND.address },
        contactPoint: { "@type": "ContactPoint", telephone: BRAND.phone, contactType: "customer service" },
      }),
    }],
  }),
  component: Home,
});

const benefits = [
  "Pan-India warehousing footprint",
  "Real-time inventory visibility",
  "Seamless marketplace integrations",
  "Scalable capacity — no lock-in",
  "Dedicated B2B & 3PL specialists",
  "Same-day dispatch capability",
];

const services = [
  { icon: Warehouse, title: "Warehousing", desc: "Secure, scalable storage across shared and dedicated facilities." },
  { icon: Boxes, title: "Inventory Management", desc: "SKU-level accuracy with cycle counts and reconciliation." },
  { icon: Package, title: "B2B Fulfillment", desc: "Bulk order processing for distributors, wholesalers and retail." },
  { icon: ShoppingCart, title: "eCommerce Fulfillment", desc: "Pick, pack and ship across all major marketplaces." },
  { icon: Truck, title: "Transportation", desc: "PTL, FTL and last-mile distribution nationwide." },
  { icon: RotateCcw, title: "Reverse Logistics", desc: "Returns, quality checks and restocking made simple." },
  { icon: PackageOpen, title: "Packaging & Kitting", desc: "Custom kitting, bundling and value-added packaging." },
  { icon: Layers, title: "Cross Docking", desc: "Direct dock-to-dock transfers with minimal dwell time." },
];

const platforms = ["Amazon", "Flipkart", "Shopify", "WooCommerce", "Meesho"];

const whyUs = [
  { icon: ShieldCheck, title: "Reliable Operations" },
  { icon: Activity, title: "Scalable Solutions" },
  { icon: Cpu, title: "Technology Driven" },
  { icon: Zap, title: "Faster Fulfillment" },
  { icon: Users, title: "Professional Support" },
  { icon: DollarSign, title: "Cost-Effective" },
];

const testimonials = [
  { name: "Client Name", role: "Company", quote: "Add your first client testimonial here to build trust with prospects." },
  { name: "Client Name", role: "Company", quote: "Placeholder testimonial — replace with real B2B/3PL success stories." },
  { name: "Client Name", role: "Company", quote: "Placeholder testimonial — highlight measurable results like accuracy or SLA." },
];

const quickSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  businessType: z.string().min(1, "Select a business type"),
  contact: z.string().trim().min(5, "Phone or email required").max(120),
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center text-white overflow-hidden">
        <img src={heroImg} alt="CoreWarehousing modern warehouse" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-navy/50" />

        <div className="container-x relative z-10 pt-28 pb-20 md:pt-32">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                B2B Warehousing & 3PL Fulfillment
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Warehousing that <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">scales with your brand.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                CoreWarehousing runs the storage, inventory and fulfillment backbone behind ambitious B2B and D2C companies — reliably, and at any volume.
              </p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors">
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Quick enquiry form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <QuickEnquiry />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src={fleetImg} alt="CoreWarehousing operations" loading="lazy" width={1280} height={800} className="rounded-3xl shadow-elegant w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our story</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Built by supply-chain operators, for growing brands.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              CoreWarehousing was founded to solve a simple problem: modern brands need warehousing that keeps pace with their growth — without the overhead of running their own operations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we operate strategically located facilities, integrate with every major marketplace, and provide dedicated support to B2B distributors, D2C brands and 3PL partners across the country.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant">
                About Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/why-choose-us" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy hover:bg-muted">
                Why Choose Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we do</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">End-to-end logistics, under one roof.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Eight integrated services covering the full journey from inbound receipt to last-mile delivery.</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.18_92_/_0.25),transparent_50%)]" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why CoreWarehousing</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for ambitious supply chains.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
                  <w.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-display font-bold text-lg">{w.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Integrations</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">Plug into the platforms you already sell on.</h2>
            <p className="mt-3 text-muted-foreground">Native marketplace integrations for seamless order flow and inventory sync.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {platforms.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card p-6 text-center shadow-card-soft hover:shadow-elegant transition-shadow">
                  <div className="font-display text-lg font-bold text-navy">{p}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Trusted by brands</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">Real results, from real partners.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft">
                  <div className="h-10 w-24 rounded bg-muted grid place-items-center text-xs text-muted-foreground">LOGO</div>
                  <Quote className="mt-6 h-8 w-8 text-primary/40" />
                  <blockquote className="mt-3 text-foreground leading-relaxed">"{t.quote}"</blockquote>
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

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary px-8 py-16 md:p-20 text-center text-primary-foreground shadow-elegant">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to optimize your supply chain?</h2>
              <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Share your volumes and we'll build a tailored 3PL proposal within 24 hours.</p>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-elegant hover:scale-[1.03] transition-transform">
                Request Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function QuickEnquiry() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: fd.get("name"),
      businessType: fd.get("businessType"),
      contact: fd.get("contact"),
    };
    const parsed = quickSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string") errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Send via mailto (Phase 1 — no backend)
    const subject = encodeURIComponent(`Quick enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nBusiness Type: ${parsed.data.businessType}\nContact: ${parsed.data.contact}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-elegant">
      <div className="text-white">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary">Quick Enquiry</div>
        <h3 className="mt-2 text-2xl font-bold">Get a callback in minutes.</h3>
        <p className="mt-2 text-sm text-white/75">Tell us who you are — our team responds fast.</p>
      </div>
      {sent ? (
        <div className="mt-6 rounded-xl bg-white/10 border border-white/20 p-5 text-white">
          <div className="flex items-center gap-2 font-semibold"><CheckCircle2 className="h-5 w-5 text-primary" /> Thanks! Opening your email…</div>
          <button onClick={() => setSent(false)} className="mt-3 text-sm underline text-primary">Send another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <input name="name" placeholder="Your name" className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary" />
            {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
          </div>
          <div>
            <select name="businessType" defaultValue="" className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white outline-none focus:border-primary">
              <option value="" disabled className="text-navy">Business type</option>
              {["D2C / eCommerce Brand", "B2B Distributor", "Manufacturer", "Retailer", "3PL Partner", "Other"].map((o) => (
                <option key={o} value={o} className="text-navy">{o}</option>
              ))}
            </select>
            {errors.businessType && <p className="mt-1 text-xs text-primary">{errors.businessType}</p>}
          </div>
          <div>
            <input name="contact" placeholder="Phone or email" className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-primary" />
            {errors.contact && <p className="mt-1 text-xs text-primary">{errors.contact}</p>}
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform">
            Request Callback <Send className="h-4 w-4" />
          </button>
          <p className="text-[11px] text-white/60 text-center">By submitting, you agree to be contacted about your enquiry.</p>
        </form>
      )}
    </div>
  );
}
