import { motion } from "framer-motion";

import { platforms } from "@/content/platforms";
import { platformsSection } from "@/content/home";
import { clientsSection } from "@/content/homeSections";
import amazonLogo from "@/assets/amazonlogo.png";
import flipkartLogo from "@/assets/flipkartlogo.png";
import myntraLogo from "@/assets/myntra.png";
import shopifyLogo from "@/assets/shopify-seeklogo.png";
import woocommerceLogo from "@/assets/woocommerce-seeklogo.png";
import meeshoLogo from "@/assets/meesho-seeklogo.png";

const logoMap: Record<string, string> = {
  amazonlogo: amazonLogo,
  flipkartlogo: flipkartLogo,
  myntra: myntraLogo,
  "shopify-seeklogo": shopifyLogo,
  "woocommerce-seeklogo": woocommerceLogo,
  "meesho-seeklogo": meeshoLogo,
};

export function ClientMarquee() {
  const items = platforms.filter((p) => logoMap[p.logo]);

  return (
    <section className="section-y">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-secondary/60 px-6 py-14 md:py-16 text-center border border-border/70 shadow-card-soft"
        >
          <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-navy/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Coming Soon
          </span>
          <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-primary">
            {clientsSection.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy font-heading text-balance">
            {clientsSection.headline}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {platformsSection.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
            {items.map((p, i) => (
              <motion.img
                key={p.name}
                src={logoMap[p.logo]}
                alt={p.name}
                loading="lazy"
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`h-14 w-auto max-w-[12rem] object-contain sm:h-16 ${p.name === "Flipkart" ? "max-w-[14rem] h-16 sm:h-20" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
