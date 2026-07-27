export interface HeroContent {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  benefits: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export const hero: HeroContent = {
  badge: "B2B Warehousing & 3PL Fulfillment",
  headline: "Warehousing that ",
  headlineHighlight: "scales with your brand.",
  subheadline:
    "CoreWarehousing runs the storage, inventory and fulfillment backbone behind ambitious B2B and D2C companies — reliably, and at any volume.",
  benefits: [
    "Pan-India warehousing footprint",
    "Real-time inventory visibility",
    "Seamless marketplace integrations",
    "Scalable capacity — no lock-in",
    "Dedicated B2B & 3PL specialists",
    "Same-day dispatch capability",
  ],
  ctaPrimary: "Get a Quote",
  ctaSecondary: "Explore Services",
};

export interface BrandStoryContent {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export const brandStory: BrandStoryContent = {
  eyebrow: "Our story",
  headline: "Built by supply-chain operators, for growing brands.",
  paragraphs: [
    "CoreWarehousing was founded to solve a simple problem: modern brands need warehousing that keeps pace with their growth — without the overhead of running their own operations.",
    "Today we operate strategically located facilities, integrate with every major marketplace, and provide dedicated support to B2B distributors, D2C brands and 3PL partners across the country.",
  ],
  ctaPrimary: "About Us",
  ctaSecondary: "Why Choose Us",
};

export interface ServicesOverviewContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const servicesOverview: ServicesOverviewContent = {
  eyebrow: "What we do",
  headline: "End-to-end logistics, under one roof.",
  subheadline: "Eight integrated services covering the full journey from inbound receipt to last-mile delivery.",
};

export interface PlatformsSectionContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const platformsSection: PlatformsSectionContent = {
  eyebrow: "Integrations",
  headline: "Plug into the platforms you already sell on.",
  subheadline: "Native marketplace integrations for seamless order flow and inventory sync.",
};

export interface TestimonialsSectionContent {
  eyebrow: string;
  headline: string;
}

export const testimonialsSection: TestimonialsSectionContent = {
  eyebrow: "Trusted by brands",
  headline: "Real results, from real partners.",
};

export interface CTASectionContent {
  headline: string;
  subheadline: string;
  cta: string;
}

export const ctaSection: CTASectionContent = {
  headline: "Ready to optimize your supply chain?",
  subheadline: "Share your volumes and we'll build a tailored 3PL proposal within 24 hours.",
  cta: "Request Free Quote",
};

export interface QuickEnquiryContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  businessTypes: string[];
  buttonLabel: string;
  successMessage: string;
  errorApiMessage: string;
  errorNetworkMessage: string;
  submittingLabel: string;
  privacyNotice: string;
}

export const quickEnquiry: QuickEnquiryContent = {
  eyebrow: "Quick Enquiry",
  headline: "Get a callback in minutes.",
  subheadline: "Tell us who you are — our team responds fast.",
  businessTypes: ["D2C / eCommerce Brand", "B2B Distributor", "Manufacturer", "Retailer", "3PL Partner", "Other"],
  buttonLabel: "Request Callback",
  successMessage: "Thank you! Your callback request has been submitted successfully. Our team will contact you shortly.",
  errorApiMessage: "Unable to submit your request. Please try again.",
  errorNetworkMessage: "Something went wrong. Please check your internet connection and try again.",
  submittingLabel: "Submitting...",
  privacyNotice: "By submitting, you agree to be contacted about your enquiry.",
};