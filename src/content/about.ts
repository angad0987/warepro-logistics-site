export interface AboutPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export const aboutPage: AboutPageContent = {
  eyebrow: "About us",
  headline: "A modern warehousing partner for ambitious brands.",
  subheadline: "CoreWarehousing was built by supply-chain operators who believe growing brands deserve better logistics.",
};

export interface VisionMissionContent {
  vision: { icon: string; title: string; text: string };
  mission: { icon: string; title: string; text: string };
}

export const visionMission: VisionMissionContent = {
  vision: {
    icon: "Compass",
    title: "Our Vision",
    text: "To be the most trusted warehousing and 3PL partner for growing brands — recognized for reliability, transparency and operational excellence at every scale.",
  },
  mission: {
    icon: "Target",
    title: "Our Mission",
    text: "To simplify warehousing and fulfillment for B2B and D2C brands — combining professional operations, marketplace integrations and hands-on support so our clients can focus on growth.",
  },
};

export interface StoryContent {
  icon: string;
  title: string;
  paragraphs: string[];
  cta: string;
}

export const story: StoryContent = {
  icon: "Sparkles",
  title: "Our Story",
  paragraphs: [
    "We don't see warehousing just as a storage instead we see it as the backbone of every successful supply chain. Every pallet stored, every carton handled, and every shipment dispatched plays a vital role in keeping businesses moving forward.",
    "Core Warehousing was created to redefine how businesses experience warehousing. We believe storage is more than space. It's the foundation of an efficient supply chain. By combining trusted warehouse partnerships with standardized operations and smart inventory management, we help businesses grow with confidence."
  ],
  cta: "Partner with us",
};