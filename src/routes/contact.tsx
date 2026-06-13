import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Get a Quote | WarePro Logistics" },
      { name: "description", content: "Request a custom warehousing or fulfillment quote. Reach our team by form, phone, email, or WhatsApp — fast response guaranteed." },
      { property: "og:title", content: "Contact WarePro Logistics" },
      { property: "og:description", content: "Get a tailored logistics quote in under 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(40),
  storage: z.string().min(1, "Please choose a storage requirement"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

const storageOptions = [
  "Less than 500 sq ft",
  "500 – 2,000 sq ft",
  "2,000 – 10,000 sq ft",
  "10,000+ sq ft",
  "Not sure — need consultation",
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.66_0.16_248_/_0.6),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary-glow">Get in touch</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Let's build a smarter supply chain — together.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              Share your needs and our logistics team will respond within a few business hours with a tailored quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* FORM */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-card-soft">
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Request a free quote</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below — no commitment required.</p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy">Thanks — we received your request!</h3>
                    <p className="text-sm text-muted-foreground mt-1">Our logistics team will be in touch within a few hours.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-primary">Submit another request</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5" noValidate>
                  <Field label="Name" name="name" error={errors.name} placeholder="Jane Smith" />
                  <Field label="Company Name" name="company" error={errors.company} placeholder="Acme Inc." />
                  <Field label="Email" name="email" type="email" error={errors.email} placeholder="jane@acme.com" />
                  <Field label="Phone Number" name="phone" type="tel" error={errors.phone} placeholder="+1 (555) 010-2200" />

                  <div className="sm:col-span-2">
                    <Label>Storage Requirement</Label>
                    <select
                      name="storage"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    >
                      <option value="" disabled>Select a range</option>
                      {storageOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.storage && <p className="mt-1.5 text-xs text-destructive">{errors.storage}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <Label>Message</Label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your SKUs, volume, and timing..."
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition-transform disabled:opacity-60"
                  >
                    {loading ? "Sending..." : <>Send Request <Send className="h-4 w-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* SIDEBAR */}
          <Reveal delay={0.1}>
            <div className="space-y-5">
              <InfoCard icon={MapPin} title="Headquarters">
                2100 Logistics Park Blvd<br />Dallas, TX 75201
              </InfoCard>
              <InfoCard icon={Phone} title="Phone">
                <a href="tel:+15550102200" className="hover:text-primary">+1 (555) 010-2200</a>
              </InfoCard>
              <InfoCard icon={Mail} title="Email">
                <a href="mailto:hello@warepro.co" className="hover:text-primary">hello@warepro.co</a>
              </InfoCard>
              <InfoCard icon={Clock} title="Business Hours">
                Mon – Fri: 7:00 AM – 7:00 PM<br />
                Sat: 9:00 AM – 2:00 PM<br />
                Sun: Closed (24/7 Ops on request)
              </InfoCard>

              <a
                href="https://wa.me/15550102200?text=Hi%20WarePro%2C%20I%27d%20like%20a%20quote."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl p-5 text-white shadow-elegant"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Chat on WhatsApp</div>
                    <div className="text-xs text-white/80">Fast replies during business hours</div>
                  </div>
                </div>
                <span className="text-xl">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card-soft">
              <iframe
                title="WarePro Logistics location"
                src="https://www.google.com/maps?q=Dallas+Logistics+Park&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold text-navy">{children}</label>;
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card-soft">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground shrink-0">
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-navy">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
