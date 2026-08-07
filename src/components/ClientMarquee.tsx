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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {clientsSection.eyebrow}
          </span>
          <span className="ml-2 inline-block rounded-full border border-navy/15 bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy">
            Coming Soon
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy font-heading text-balance">
            {clientsSection.headline}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{platformsSection.subheadline}</p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
          {items.map((p, i) => (
            <motion.img
              key={p.name}
              src={logoMap[p.logo]}
              alt={p.name}
              loading="lazy"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="h-9 w-auto max-w-[9rem] object-contain sm:h-11"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
