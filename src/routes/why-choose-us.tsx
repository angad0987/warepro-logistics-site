import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/why-choose-us/HeroSection";
import { ValueCardsSection } from "@/components/why-choose-us/ValueCardsSection";
import { TrustReasonsSection } from "@/components/why-choose-us/TrustReasonsSection";
import { ResponsibilityBanner } from "@/components/why-choose-us/ResponsibilityBanner";
import { CTASection } from "@/components/why-choose-us/CTASection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/why-choose-us")({
  head: () =>
    seo({
      title: "Why Choose CoreWarehousing for Fullfillment Services",
      description:
        "See why growing brands choose CoreWarehousing: reliable operations, scalable capacity, same-day dispatch, dedicated support and transparent pricing.",
      path: "/why-choose-us",
    }),
  component: WhyChooseUs,
});

function WhyChooseUs() {
  return (
    <>
      <HeroSection />
      <ValueCardsSection />
      <TrustReasonsSection />
      <ResponsibilityBanner />
      <CTASection />
    </>
  );
}
