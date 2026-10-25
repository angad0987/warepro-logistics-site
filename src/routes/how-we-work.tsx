import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/how-we-work/HeroSection";
import { InventoryJourneySection } from "@/components/how-we-work/InventoryJourneySection";
import { OrderFlowSection } from "@/components/how-we-work/OrderFlowSection";
import { MISReportsSection } from "@/components/how-we-work/MISReportsSection";
import { WhyTrustSection } from "@/components/how-we-work/WhyTrustSection";
import { CTABannerSection } from "@/components/how-we-work/CTABannerSection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/how-we-work")({
  head: () =>
    seo({
      title: "Our Warehousing Process & MIS Reporting | CoreWarehousing",
      description:
        "See how CoreWarehousing receives, stores, picks, packs and dispatches your inventory, with regular MIS reports and a dedicated account manager.",
      path: "/how-we-work",
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
