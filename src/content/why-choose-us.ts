export interface WhyChooseUsItem {
  id: string;
  icon: string;
  microLabel: string;
  title: string;
  bullets: string[];
}

export interface WhyChooseUsPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  calloutEyebrow: string;
  calloutTitle: string;
  calloutIntro: string;
  cta: string;
}

export const whyChooseUsPage: WhyChooseUsPageContent = {
  eyebrow: "Why choose us",
  headline: "Reasons brands trust CoreWarehousing.",
  subheadline: "Six values we deliver on — every day, at every facility, for every client.",
  calloutEyebrow: "Our promise",
  calloutTitle: "Six reasons brands trust us.",
  calloutIntro: "Each value is delivered daily by our operations team — not a marketing tagline.",
  cta: "Start a conversation",
};

export const whyChooseUs: WhyChooseUsItem[] = [
  { id: "reliable", icon: "ShieldCheck", microLabel: "SECURITY", title: "Reliable Operations", bullets: ["Disciplined SLAs", "Daily accountability"] },
  { id: "scalable", icon: "Activity", microLabel: "SCALE", title: "Scalable Solutions", bullets: ["Flex capacity", "No lock-in"] },
  { id: "speed", icon: "Zap", microLabel: "SPEED", title: "Fulfillment", bullets: ["Same-day dispatch", "Optimized pick-pack"] },
  { id: "support", icon: "Users", microLabel: "SUPPORT", title: "Professional Support", bullets: ["Dedicated managers", "Responsive comms"] },
  { id: "value", icon: "DollarSign", microLabel: "VALUE", title: "Cost-Effective", bullets: ["Transparent pricing", "Volume-based tiers"] },
];