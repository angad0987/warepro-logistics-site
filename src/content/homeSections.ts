/**
 * Editable content for the premium homepage sections.
 * Keep copy here so it can be updated without touching components.
 */

export interface BentoCard {
  id: string;
  icon: string;
  title: string;
  desc: string;
  image: "storage" | "receiving" | "inventory" | "picking" | "packing" | "dispatch";
  featured?: boolean;
}

export const bentoSection = {
  eyebrow: "Operations",
  headline: "One operating system for your physical supply chain.",
  subheadline:
    "Every touchpoint of your inventory — received, counted, stored, picked, packed and dispatched — run by one accountable team.",
};

export const bentoCards: BentoCard[] = [
  {
    id: "storage",
    icon: "Warehouse",
    title: "Storage Operations",
    desc: "Racked, floor and bulk storage across secure, access-controlled, pan-India facilities built to flex with your peak seasons.",
    image: "storage",
    featured: true,
  },
  {
    id: "receiving",
    icon: "PackageCheck",
    title: "Receiving",
    desc: "Inbound scanned, quality-checked and logged the day it lands.",
    image: "receiving",
  },
  {
    id: "inventory",
    icon: "Boxes",
    title: "Inventory",
    desc: "SKU-level accuracy with cycle counts and reconciliation.",
    image: "inventory",
  },
  {
    id: "picking",
    icon: "ClipboardList",
    title: "Picking",
    desc: "Barcode-verified picking paths tuned for speed and accuracy.",
    image: "picking",
  },
  {
    id: "packing",
    icon: "Package",
    title: "Packing",
    desc: "Compliant labelling, kitting and protective packaging.",
    image: "packing",
  },
  {
    id: "dispatch",
    icon: "Truck",
    title: "Dispatch",
    desc: "Vetted carriers for FTL, LTL and last-mile delivery.",
    image: "dispatch",
  },
];

export interface JourneyStep {
  title: string;
  desc: string;
  icon: string;
  image: "receiving" | "inventory" | "storage" | "picking" | "packing" | "dispatch";
}

export const journeySection = {
  eyebrow: "The journey",
  headline: "From inbound dock to customer doorstep.",
  subheadline: "Two distinct flows — full 3PL fulfillment and streamlined B2B bulk movement.",
};

export const journeySteps: JourneyStep[] = [
  {
    title: "Receiving",
    desc: "Shipments unloaded, scanned, inspected and posted to stock within hours of arrival.",
    icon: "PackageCheck",
    image: "receiving",
  },
  {
    title: "Inventory",
    desc: "Every SKU tracked, batched and cycle-counted so your stock position is always trustworthy.",
    icon: "Boxes",
    image: "inventory",
  },
  {
    title: "Storage",
    desc: "Goods slotted into racked, floor or bulk locations optimised for turnover and retrieval speed.",
    icon: "Warehouse",
    image: "storage",
  },
  {
    title: "Picking",
    desc: "Orders released to optimised pick paths and verified by barcode at every touch.",
    icon: "ClipboardList",
    image: "picking",
  },
  {
    title: "Packing",
    desc: "Right-sized, protected and labelled to marketplace and retailer compliance standards.",
    icon: "Package",
    image: "packing",
  },
  {
    title: "Dispatch",
    desc: "Manifested and handed to vetted carriers with same-day dispatch capability.",
    icon: "Truck",
    image: "dispatch",
  },
];

export const journeyStepsB2B: JourneyStep[] = [
  {
    title: "Inbound",
    desc: "Bulk shipments received, inspected and staged in a single controlled handover.",
    icon: "PackageCheck",
    image: "receiving",
  },
  {
    title: "Storage",
    desc: "Pallets and cartons stored in bulk locations tuned for fast, high-volume turnover.",
    icon: "Warehouse",
    image: "storage",
  },
  {
    title: "Dispatch",
    desc: "Scheduled FTL and LTL loads released on time to retailers and distributors.",
    icon: "Truck",
    image: "dispatch",
  },
];

export const showcaseSection = {
  eyebrow: "Infrastructure",
  headline: "Scale you can walk through.",
  description:
    "Purpose-built facilities, disciplined processes and a team that treats your inventory like its own — engineered for brands that cannot afford downtime.",
  cta: "Book a facility walkthrough",
};

export interface KpiItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  icon: string;
}

export const kpiSection = {
  eyebrow: "By the numbers",
  headline: "Performance you can plan around.",
};

export const kpis: KpiItem[] = [
  { value: 50000, suffix: "+", label: "Pallet Positions", icon: "Boxes" },
  { value: 99.8, suffix: "%", decimals: 1, label: "Inventory Accuracy", icon: "Target" },
  { value: 24, suffix: "/7", label: "Operations Coverage", icon: "Clock" },
  { value: 500, suffix: "+", label: "Satisfied Clients", icon: "Users" },
];

export const clientsSection = {
  eyebrow: "Trusted by",
  headline: "Brands and marketplaces we move goods for.",
};

export const finalCta = {
  eyebrow: "Let's talk volume",
  headline: "Your next warehouse partner is one conversation away.",
  description:
    "Tell us your SKUs, order volume and service levels. We'll come back with a tailored warehousing and fulfillment plan — no lock-in, no jargon.",
  primary: "Request a Quote",
  secondary: "Talk to Sales",
};

export const newsletter = {
  title: "Supply chain notes",
  desc: "Occasional insights on warehousing, fulfillment and logistics in India.",
  placeholder: "Work email",
  button: "Subscribe",
  success: "Thanks — you're on the list.",
};
