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
  const loop = [...items, ...items];

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
      </div>

      <div className="fade-edges relative mt-14 overflow-hidden">
        <div className="marquee-track flex w-max">
          <div className="animate-marquee flex w-max items-center gap-5 pr-5">
            {loop.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="grid h-28 w-52 shrink-0 place-items-center rounded-[20px] border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              >
                <img
                  src={logoMap[p.logo]}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
