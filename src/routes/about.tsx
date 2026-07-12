import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Compass, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import fleetImg from "@/assets/fleet.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CoreWarehousing — Our Vision, Mission & Story" },
      { name: "description", content: "Learn about CoreWarehousing — our vision, mission and story of building a modern B2B warehousing and 3PL fulfillment partner." },
      { property: "og:title", content: "About CoreWarehousing" },
      { property: "og:description", content: "Vision, mission and story behind CoreWarehousing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">About us</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">A modern warehousing partner for ambitious brands.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              CoreWarehousing was built by supply-chain operators who believe growing brands deserve better logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To be the most trusted warehousing and 3PL partner for growing brands — recognized for reliability, transparency and operational excellence at every scale.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 md:p-10 shadow-card-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To simplify warehousing and fulfillment for B2B and D2C brands — combining professional operations, marketplace integrations and hands-on support so our clients can focus on growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src={fleetImg} alt="CoreWarehousing operations" loading="lazy" width={1280} height={800} className="rounded-3xl shadow-elegant w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-navy">Our Story</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              CoreWarehousing started with a clear conviction: modern brands were being underserved by outdated warehousing options. The team came together to build an alternative — one that pairs disciplined operations with the technology brands expect today.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Since day one, we've focused on operational excellence: accurate inbound receipt, disciplined inventory practices, dependable dispatch and professional support. Today we serve brands across eCommerce, retail, FMCG, electronics, fashion, manufacturing, consumer goods, automotive and healthcare.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Everything we do is grounded in one belief — that your logistics partner should feel like an extension of your own team.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant">
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
