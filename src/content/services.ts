export interface ServiceItem {
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  long: string;
  bullets: string[];
  image: string;
}

export interface ServicesPageContent {
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  workflowEyebrow: string;
  workflowHeadline: string;
  workflowSubheadline: string;
}

export const servicesPage: ServicesPageContent = {
  heroEyebrow: "Our services",
  heroHeadline: "Everything you need to run a modern supply chain.",
  heroSubheadline:
    "Eight integrated services designed for B2B, D2C and 3PL operations — delivered from a single accountable partner.",
  workflowEyebrow: "Our workflow",
  workflowHeadline: "How our services connect",
  workflowSubheadline: "From inbound to delivery — a single integrated supply chain.",
};

import imgInventoryManagement from "@/assets/Inventory Management.png";
import imgECommFulfillment from "@/assets/E-commfulfillment.png";
import imgB2BFulfillment from "@/assets/B2Bfulfillment-.png";
import imgReverseLogistics from "@/assets/Reverselogistics.png";
import imgCrossDocking from "@/assets/crossdocking.png";
import imgTransportation from "@/assets/transportation&distribution.png";

export const services: ServiceItem[] = [
  {
    icon: "Warehouse",
    title: "Warehousing",
    tagline: "Secure, scalable storage across India.",
    desc: "Secure, scalable storage with shared and dedicated options across strategic locations. Racked, floor and bulk storage.",
    long: "Purpose-built facilities across strategic locations offering shared, dedicated and hybrid storage models. Choose racked, floor or bulk storage — all with CCTV, fire safety and access-controlled zones. Scale up during peak seasons without long-term commitments.",
    bullets: [
      "Racked, floor & bulk storage",
      "24/7 CCTV + access control",
      "Fire & safety compliant",
      "Shared or dedicated space",
      "Pan-India footprint",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Boxes",
    title: "Inventory Management",
    tagline: "SKU-level accuracy, always.",
    desc: "SKU-level accuracy with cycle counts, reconciliation and manual MIS handled by our operations team.",
    long: "Track every SKU in real time with our WMS-backed inventory workflows. Routine cycle counts, reconciliation and shrinkage reports give you the visibility you need to plan replenishment and prevent stock-outs.",
    bullets: [
      "Real-time SKU tracking",
      "Daily & weekly cycle counts",
      "Batch & expiry management",
      "Reconciliation reports",
      "Low-stock alerts",
    ],
    image: imgInventoryManagement,
  },
  {
    icon: "Package",
    title: "B2B Fulfillment",
    tagline: "Built for distributors and wholesalers.",
    desc: "Bulk order processing, palletized dispatch and retailer-compliant labelling for distributors and wholesalers.",
    long: "High-volume B2B order processing with palletized dispatch, retailer-compliant labelling and full ASN documentation. Purpose-built for distributors, wholesalers and modern trade partners across India.",
    bullets: [
      "Palletized bulk dispatch",
      "Retailer-compliant labels",
      "ASN & GRN documentation",
      "Modern trade ready",
      "Dedicated B2B lanes",
    ],
    image: imgB2BFulfillment,
  },
  {
    icon: "ShoppingCart",
    title: "eCommerce Fulfillment",
    tagline: "Ship faster on every marketplace.",
    desc: "Pick, pack and ship across Amazon, Flipkart, Shopify, WooCommerce and Meesho with same-day dispatch.",
    long: "Native marketplace integrations, automated order flow and same-day dispatch cut-offs help you delight customers on every channel — Amazon, Flipkart, Shopify, WooCommerce and Meesho all handled from one operational hub.",
    bullets: [
      "Amazon, Flipkart, Meesho ready",
      "Shopify & WooCommerce sync",
      "Same-day dispatch cut-off",
      "Branded packaging options",
      "Returns handling included",
    ],
    image: imgECommFulfillment,
  },
  {
    icon: "Truck",
    title: "Transportation & Distribution",
    tagline: "Nationwide reach, one accountable partner.",
    desc: "PTL, FTL and last-mile distribution nationwide via our vetted carrier network.",
    long: "Move product across India through our vetted carrier network. Whether you need PTL, FTL, express or last-mile, we route your shipments for the best balance of cost, speed and reliability — with a single point of accountability.",
    bullets: [
      "PTL, FTL & express modes",
      "Last-mile delivery network",
      "Route optimization",
      "Vetted carrier partners",
      "Single point of contact",
    ],
    image: imgTransportation,
  },
  {
    icon: "RotateCcw",
    title: "Reverse Logistics",
    tagline: "Turn returns into recovered value.",
    desc: "Returns processing, quality checks, refurbishment and restocking with full audit trail.",
    long: "End-to-end returns handling — from pickup coordination to inspection, refurbishment and restocking. Recover as much value as possible while giving your customers a smooth returns experience.",
    bullets: [
      "Returns pickup coordination",
      "Quality inspection & grading",
      "Refurbishment workflows",
      "Restocking & disposal",
      "Full return audit trail",
    ],
    image: imgReverseLogistics,
  },
  {
    icon: "PackageOpen",
    title: "Packaging & Kitting",
    tagline: "Value-added prep, done right.",
    desc: "Custom kitting, bundling, gift-wrapping and value-added packaging services.",
    long: "From bundling multi-SKU kits to seasonal gift-wrapping and promotional inserts, our value-added services turn your inventory into shelf-ready or customer-ready product — at any scale.",
    bullets: [
      "Multi-SKU kitting & bundling",
      "Custom & branded packaging",
      "Promotional inserts",
      "Gift wrapping",
      "Compliance labelling",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop",
  },
  {
    icon: "Layers",
    title: "Cross Docking",
    tagline: "Skip storage, speed up delivery.",
    desc: "Direct dock-to-dock transfers to cut dwell time, reduce handling and speed up delivery.",
    long: "Move inbound freight directly to outbound trucks with minimal dwell time. Ideal for high-velocity SKUs, promotional launches and time-sensitive B2B distribution — cut inventory costs and speed up delivery cycles.",
    bullets: [
      "Dock-to-dock transfers",
      "Reduced handling",
      "Faster time-to-shelf",
      "Lower inventory holding",
      "Ideal for promotions",
    ],
    image: imgCrossDocking,
  },
];
