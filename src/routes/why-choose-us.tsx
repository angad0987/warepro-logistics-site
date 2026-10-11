import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/why-choose-us/HeroSection";
import { ValueCardsSection } from "@/components/why-choose-us/ValueCardsSection";
import { TrustReasonsSection } from "@/components/why-choose-us/TrustReasonsSection";
import { ResponsibilityBanner } from "@/components/why-choose-us/ResponsibilityBanner";
import { CTASection } from "@/components/why-choose-us/CTASection";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose CoreWarehousing | Reliable, Scalable, Tech-Driven 3PL" },
      {
        name: "description",
        content:
          "Six reasons brands choose CoreWarehousing: reliable operations, scalable solutions,fulfillment, professional support and cost-effectiveness.",
      },
      { property: "og:title", content: "Why Choose CoreWarehousing" },
      {
        property: "og:description",
        content: "The reasons growing brands trust us with their warehousing and fulfillment.",
      },
      { property: "og:url", content: "/why-choose-us" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
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
