import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/how-we-work/HeroSection";
import { InventoryJourneySection } from "@/components/how-we-work/InventoryJourneySection";
import { OrderFlowSection } from "@/components/how-we-work/OrderFlowSection";
import { MISReportsSection } from "@/components/how-we-work/MISReportsSection";
import { WhyTrustSection } from "@/components/how-we-work/WhyTrustSection";
import { CTABannerSection } from "@/components/how-we-work/CTABannerSection";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      {
        title: "How We Work — Core Warehousing Process & Transparency",
      },
      {
        name: "description",
        content:
          "See how Core Warehousing manages your inventory — from understanding your requirements to dispatching orders. A clear process with complete visibility through regular MIS reports.",
      },
      { property: "og:title", content: "How We Work | CoreWarehousing" },
      {
        property: "og:description",
        content:
          "A transparent, structured warehousing process. Understand, Execute, Deliver — with regular MIS reports and dedicated account management.",
      },
      { property: "og:url", content: "/how-we-work" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/how-we-work" }],
  }),
  component: HowWeWork,
});

function HowWeWork() {
  return (
    <>
      <HeroSection />
      <InventoryJourneySection />
      <OrderFlowSection />
      <MISReportsSection />
      <WhyTrustSection />
      <CTABannerSection />
    </>
  );
}
