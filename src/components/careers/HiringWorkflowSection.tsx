import { motion } from "framer-motion";

import { Reveal } from "@/components/Reveal";
import hiringWorkflowImg from "@/assets/hiring_workflow.png";

export function HiringWorkflowSection() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Hiring Process
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight md:text-3xl">
              Your journey with CoreWarehousing
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From your first application to joining our team, here's what you can expect.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl"
          >
            <img
              src={hiringWorkflowImg}
              alt="CoreWarehousing hiring workflow — six-step journey from application to onboarding"
              width={1200}
              height={800}
              className="w-full object-contain"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
