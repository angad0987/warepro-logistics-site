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
    "CoreWarehousing started with a clear conviction: modern brands were being underserved by outdated warehousing options. The team came together to build an alternative — one that pairs disciplined operations with the technology brands expect today.",
    "Since day one, we've focused on operational excellence: accurate inbound receipt, disciplined inventory practices, dependable dispatch and professional support. Today we serve brands across eCommerce, retail, FMCG, electronics, fashion, manufacturing, consumer goods, automotive and healthcare.",
    "Everything we do is grounded in one belief — that your logistics partner should feel like an extension of your own team.",
  ],
  cta: "Partner with us",
};