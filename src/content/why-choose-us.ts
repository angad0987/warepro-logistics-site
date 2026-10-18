export interface WhyChooseUsItem {
  id: string;
  icon: string;
  microLabel: string;
  title: string;
  bullets: string[];
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "reliable",
    icon: "ShieldCheck",
    microLabel: "SECURITY",
    title: "Reliable Operations",
    bullets: ["Disciplined SLAs", "Daily accountability"],
  },
  {
    id: "scalable",
    icon: "Activity",
    microLabel: "SCALE",
    title: "Scalable Solutions",
    bullets: ["Flex capacity", "No lock-in"],
  },
  {
    id: "speed",
    icon: "Zap",
    microLabel: "SPEED",
    title: "Fulfillment",
    bullets: ["Same-day dispatch", "Optimized pick-pack"],
  },
  {
    id: "support",
    icon: "Users",
    microLabel: "SUPPORT",
    title: "Professional Support",
    bullets: ["Dedicated managers", "Responsive comms"],
  },
  {
    id: "value",
    icon: "DollarSign",
    microLabel: "VALUE",
    title: "Cost-Effective",
    bullets: ["Transparent pricing", "Volume-based tiers"],
  },
];

/* ------------------------------------------------------------------ */
/* Why Choose Us page content                                          */
/* ------------------------------------------------------------------ */

export const whyChooseUsHero = {
  eyebrow: "Why choose us",
  headlineLine1: "Built on trust.",
  headlineLine2Prefix: "Backed by ",
  headlineLine2Highlight: "performance.",
  subheadline:
    "We combine technology, process and people to deliver consistent, reliable and transparent warehousing solutions for your business.",
};

export const whyChooseUsBrand = {
  monogram: "CW",
  name: "Core Warehousing",
  taglineLead: "Keeping your inventory",
  taglineHighlight: "safe",
  taglineTail: "and business moving forward.",
};

export const whyChooseUsValuesSection = {
  eyebrow: "Our operations",
  heading: "Key stats that",
  headingHighlight: "drive your confidence",
  subheading:
    "Reliable systems, accurate inventory and disciplined operations designed to keep your business moving.",
};

export const whyChooseUsReasonsSection = {
  eyebrow: "Our promise",
  heading: "Five reasons brands trust us.",
  subheading: "Each value is delivered daily by our operations team — not a marketing tagline.",
};

export interface WhyChooseUsValue {
  id: string;
  icon: string;
  category: string;
  title: string;
  description: string;
}

export const whyChooseUsValues: WhyChooseUsValue[] = [
  {
    id: "support",
    icon: "Headset",
    category: "Support",
    title: "24/7 Customer Support",
    description: "Our team is always available to assist you, anytime, anywhere.",
  },
  {
    id: "visibility",
    icon: "MonitorCheck",
    category: "Visibility",
    title: "Live Inventory Tracking",
    description: "Real-time visibility of your inventory, anytime you need it.",
  },
  {
    id: "reporting",
    icon: "ClipboardList",
    category: "Reporting",
    title: "Daily MIS Reports",
    description: "Regular updates and actionable insights to keep you in control.",
  },
  {
    id: "accuracy",
    icon: "Target",
    category: "Accuracy",
    title: "99.5% Inventory Accuracy",
    description: "High accuracy you can rely on for better planning and decisions.",
  },
  {
    id: "security",
    icon: "ShieldCheck",
    category: "Security",
    title: "Secure & Safe Storage",
    description: "Advanced security measures to keep your inventory protected.",
  },
  {
    id: "dispatch",
    icon: "Truck",
    category: "Fulfillment",
    title: "On-Time Dispatch",
    description: "Efficient processes ensuring timely and reliable deliveries.",
  },
];

export const whyChooseUsResponsibility = {
  titleLine1: "Your inventory.",
  titleLine2Prefix: "Our ",
  titleLine2Highlight: "responsibility.",
  body: "With the right systems and the right people, we keep your business moving forward.",
};

export const whyChooseUsCta = {
  eyebrow: "Let's talk volume",
  heading: "Ready to move your operations forward?",
  button: "Get a Quote",
};
