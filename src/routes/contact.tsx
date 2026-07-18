import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/brand";
import { contactPage, contactInfoCards, formLabels, businessTypes, volumeOptions, warehouseNeeds } from "@/content/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Get a Quote | CoreWarehousing" },
      { name: "description", content: "Request a tailored B2B/3PL warehousing quote. Reach CoreWarehousing by form, phone, email or WhatsApp — fast response guaranteed." },
      { property: "og:title", content: "Contact CoreWarehousing" },
      { property: "og:description", content: "Get a tailored warehousing and fulfillment quote in under 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(120),
  businessType: z.string().min(1, "Select a business type"),
  volume: z.string().min(1, "Select your monthly volume"),
  warehouseNeeds: z.string().min(1, "Select your warehouse need"),
  phone: z.string().trim().min(5, "Phone is required").max(40),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().max(1000).optional(),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
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
    const d = parsed.data;
    const subject = encodeURIComponent(`Quote request from ${d.company}`);
    const body = encodeURIComponent(
      `Name: ${d.name}\nCompany: ${d.company}\nBusiness Type: ${d.businessType}\nMonthly Volume: ${d.volume}\nWarehouse Needs: ${d.warehouseNeeds}\nPhone: ${d.phone}\nEmail: ${d.email}\n\nMessage:\n${d.message ?? ""}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,oklch(0.85_0.18_92_/_0.4),transparent_50%)]" />
        <div className="container-x relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{contactPage.eyebrow}</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight font-heading">{contactPage.headline}</h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              {contactPage.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-card-soft">
              <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading">{contactPage.formTitle}</h2>
              <p className="mt-2 text-muted-foreground">
                {contactPage.formDescription}
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy font-heading">{contactPage.successTitle}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{contactPage.successMessage}</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-primary">{contactPage.successRetry}</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5" noValidate>
                  <Field label={formLabels.name} name="name" error={errors.name} placeholder={formLabels.namePlaceholder} />
                  <Field label={formLabels.company} name="company" error={errors.company} placeholder={formLabels.companyPlaceholder} />

                  <Select label={formLabels.businessType} name="businessType" options={businessTypes} error={errors.businessType} placeholder={formLabels.businessTypePlaceholder} />
                  <Select label={formLabels.volume} name="volume" options={volumeOptions} error={errors.volume} placeholder={formLabels.volumePlaceholder} />

                  <div className="sm:col-span-2">
                    <Select label={formLabels.warehouseNeeds} name="warehouseNeeds" options={warehouseNeeds} error={errors.warehouseNeeds} placeholder={formLabels.warehouseNeedsPlaceholder} />
                  </div>

                  <Field label={formLabels.phone} name="phone" type="tel" error={errors.phone} placeholder={formLabels.phonePlaceholder} />
                  <Field label={formLabels.email} name="email" type="email" error={errors.email} placeholder={formLabels.emailPlaceholder} />

                  <div className="sm:col-span-2">
                    <Label>{formLabels.messageLabel}</Label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={formLabels.messagePlaceholder}
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition-transform"
                  >
                    {contactPage.submitLabel} <Send className="h-4 w-4" />
                  </button>
                  <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
                    {contactPage.privacyNote}{BRAND.email}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <InfoCard icon={MapPin} title={contactInfoCards.headOffice}>{BRAND.address}</InfoCard>
              <InfoCard icon={Phone} title={contactInfoCards.phone}>
                <a href={BRAND.phoneHref} className="hover:text-primary">{BRAND.phone}</a>
              </InfoCard>
              <InfoCard icon={Mail} title={contactInfoCards.email}>
                <a href={`mailto:${BRAND.email}`} className="hover:text-primary">{BRAND.email}</a>
              </InfoCard>
              <InfoCard icon={Clock} title={contactInfoCards.businessHours}>
                {contactInfoCards.businessHoursDetail.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                ))}
              </InfoCard>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl p-5 text-white shadow-elegant"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">{contactInfoCards.whatsappHeadline}</div>
                    <div className="text-xs text-white/85">{contactInfoCards.whatsappSubtext}</div>
                  </div>
                </div>
                <span className="text-xl">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card-soft">
              <iframe
                title="CoreWarehousing location"
                src={`https://www.google.com/maps?q=${BRAND.mapQuery}&output=embed`}
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

function Select({ label, name, options, error, placeholder }: { label: string; name: string; options: string[]; error?: string; placeholder: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
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