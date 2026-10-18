import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading">{title}</h1>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              Last Updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 mesh-bg">
        <article className="container-x max-w-4xl">{children}</article>
      </section>
    </>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-card-soft mb-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground text-sm font-bold shadow-glow">
            {number}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-navy font-heading">{title}</h2>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
      </section>
    </Reveal>
  );
}

export function LegalContactCard({
  email,
  phone,
  address,
}: {
  email: string;
  phone: string;
  address: string;
}) {
  return (
    <Reveal>
      <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
        <h3 className="text-lg font-bold text-navy font-heading mb-4">Get in Touch</h3>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="text-navy font-medium hover:text-primary transition-colors break-all"
            >
              {email}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
              Phone
            </p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-navy font-medium hover:text-primary transition-colors"
            >
              {phone}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">
              Address
            </p>
            <p className="text-navy font-medium">{address}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
