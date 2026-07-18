export interface IndustryItem {
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  long: string;
  bullets: string[];
  image: string;
}

export interface IndustriesPageContent {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  logoSectionEyebrow: string;
  logoSectionHeadline: string;
  logoSectionSubheadline: string;
  cta: string;
}

export const industriesPage: IndustriesPageContent = {
  heroEyebrow: "Industries",
  heroHeadline: "Logistics tuned to your sector.",
  heroSubheadline: "We serve high-growth brands across nine industries — each with its own compliance, handling and dispatch playbooks.",
  logoSectionEyebrow: "Industries we serve",
  logoSectionHeadline: "Purpose-built for your sector",
  logoSectionSubheadline: "Nine industries, one integrated logistics partner.",
  cta: "Talk to a sector specialist",
};

export const industries: IndustryItem[] = [
  {
    icon: "ShoppingBag",
    title: "eCommerce",
    tagline: "Multi-marketplace, same-day dispatch.",
    desc: "Multi-marketplace fulfillment with same-day dispatch.",
    long: "Sell everywhere without operational chaos. We integrate with every major marketplace and D2C storefront so orders flow straight into our pick-pack lines with same-day dispatch cut-offs.",
    bullets: ["Marketplace integrations", "Same-day dispatch", "Branded unboxing options", "Returns handling", "Peak-season scaling"],
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Store",
    title: "Retail",
    tagline: "Store-ready, compliance-first.",
    desc: "Store replenishment, compliance labelling and returns.",
    long: "Keep shelves stocked with reliable replenishment cycles, retailer-compliant labelling and organized reverse flows for damaged or unsold stock.",
    bullets: ["Store replenishment cycles", "Retailer compliance labels", "Damaged stock handling", "Planogram-ready kitting", "Regional distribution"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Utensils",
    title: "FMCG",
    tagline: "Fast-moving inventory, tightly controlled.",
    desc: "High-velocity SKU handling and batch tracking.",
    long: "High-velocity SKUs, tight expiry windows and batch-level control — our FMCG operations are built for speed without compromising traceability.",
    bullets: ["Batch & expiry tracking", "FIFO/FEFO workflows", "High-throughput pick lines", "Regional distribution", "Retailer-ready dispatch"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Cpu",
    title: "Electronics",
    tagline: "Serialized, secured, safely handled.",
    desc: "Serial-number capture, secure storage and safe handling.",
    long: "High-value electronics need serialized traceability, secure zones and careful handling. We capture serial numbers on inbound and dispatch — with full chain of custody.",
    bullets: ["Serial number capture", "Access-controlled zones", "Anti-static handling", "Warranty return flows", "Insured storage"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Shirt",
    title: "Fashion",
    tagline: "Seasonal, size-heavy, returns-ready.",
    desc: "Seasonal storage, kitting, tagging and returns processing.",
    long: "Season launches, wide size matrices and heavy returns — fashion needs a partner that flexes. Tagging, hanging, folded storage and QC-driven returns handled at scale.",
    bullets: ["Hanging & folded storage", "Size/color matrix pick", "Tagging & labelling", "Returns QC & restock", "Seasonal ramp-up"],
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Factory",
    title: "Manufacturing",
    tagline: "Raw materials to finished goods.",
    desc: "Raw material storage, JIT delivery and cross-docking.",
    long: "Bonded raw material storage, JIT deliveries to production lines and cross-docking for finished goods — we keep your manufacturing supply chain moving.",
    bullets: ["Raw material storage", "JIT line delivery", "Cross-docking", "Bonded storage options", "Finished-goods distribution"],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Package",
    title: "Consumer Goods",
    tagline: "National distribution at any scale.",
    desc: "National distribution and bulk B2B fulfillment.",
    long: "From regional distributors to national brands, we handle bulk B2B fulfillment and pan-India distribution with palletized dispatch and modern-trade compliance.",
    bullets: ["Bulk B2B fulfillment", "Pallet & carton dispatch", "Pan-India distribution", "Modern trade ready", "Promotional kitting"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Car",
    title: "Automotive",
    tagline: "Spare parts, dealer networks, uptime.",
    desc: "Spare parts warehousing and dealer distribution.",
    long: "Spare parts warehousing with SKU-heavy inventory, dealer network distribution and dedicated lanes for aftermarket demand.",
    bullets: ["High-SKU parts storage", "Dealer network dispatch", "Aftermarket lanes", "Serialized tracking", "Regional stocking points"],
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&auto=format&fit=crop",
  },
  {
    icon: "HeartPulse",
    title: "Healthcare",
    tagline: "Compliant, time-sensitive, traceable.",
    desc: "Compliant storage and time-sensitive dispatch.",
    long: "Regulated storage conditions, batch-level traceability and time-sensitive dispatch — healthcare demands zero-compromise fulfillment and we deliver on it.",
    bullets: ["Regulatory compliance", "Batch & expiry control", "Time-sensitive dispatch", "Traceable chain of custody", "Secure storage zones"],
    image: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1200&auto=format&fit=crop",
  },
];