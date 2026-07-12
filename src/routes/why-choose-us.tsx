import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Cpu, Zap, Users, DollarSign, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose CoreWarehousing | Reliable, Scalable, Tech-Driven 3PL" },
      { name: "description", content: "Six reasons brands choose CoreWarehousing: reliable operations, scalable solutions, technology-driven processes, faster fulfillment, professional support and cost-effectiveness." },
      { property: "og:title", content: "Why Choose CoreWarehousing" },
      { property: "og:description", content: "The reasons growing brands trust us with their warehousing and fulfillment." },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

const values = [
  { icon: ShieldCheck, title: "Reliable Operations", desc: "Disciplined receiving, storage and dispatch backed by clear SLAs and daily accountability." },
  { icon: Activity, title: "Scalable Solutions", desc: "Ramp capacity up or down without long-term lock-in — perfect for seasonality and growth." },
  { icon: Cpu, title: "Technology Driven", desc: "Marketplace integrations, digital order flow and structured processes across every facility." },
  { icon: Zap, title: "Faster Fulfillment", desc: "Same-day dispatch capability and optimized pick-pack workflows for high-velocity SKUs." },
  { icon: Users, title: "Professional Support", desc: "Dedicated account managers, hands-on operations team and responsive communication." },
  { icon: DollarSign, title: "Cost-Effective", desc: "Transparent pricing tailored to your volume, storage mix and shipping profile." },
];

function WhyChooseUs() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why choose us</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Reasons brands trust CoreWarehousing.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              Six values we deliver on — every day, at every facility, for every client.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-navy">{v.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.03] transition-transform">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
