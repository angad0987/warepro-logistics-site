import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PackageCheck, Boxes, ClipboardList, Truck, Package } from "lucide-react";

type FlowCategory = "3PL" | "B2B";

interface Step {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const steps3PL: Step[] = [
  {
    icon: PackageCheck,
    title: "Receiving",
    desc: "Goods arrive, scanned, quality-checked and logged into our system.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    desc: "SKUs organized and tracked in real time across our warehouse.",
  },
  { icon: Boxes, title: "Storage", desc: "Items racked and stored for fast, accurate retrieval." },
  {
    icon: ClipboardList,
    title: "Order Processing",
    desc: "Incoming orders verified and queued for fulfillment.",
  },
  {
    icon: Package,
    title: "Picking & Packing",
    desc: "Items picked, packed and barcode-verified for accuracy.",
  },
  {
    icon: Truck,
    title: "Dispatch",
    desc: "Loaded onto vetted carriers for FTL, LTL or last-mile delivery.",
  },
];

const stepsB2B: Step[] = [
  {
    icon: PackageCheck,
    title: "Inbound",
    desc: "Bulk shipments received, inspected and staged for storage.",
  },
  { icon: Boxes, title: "Storage", desc: "Pallets and cartons stored for efficient turnover." },
  {
    icon: Truck,
    title: "Dispatch",
    desc: "Shipped out on schedule to business partners and retailers.",
  },
];

const subheadings: Record<FlowCategory, string> = {
  "3PL": "A six-step fulfillment flow for pick-pack-ship operations.",
  B2B: "A streamlined three-step flow for bulk business shipments.",
};

export function HowItWorks({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<FlowCategory>("3PL");

  const steps = activeTab === "3PL" ? steps3PL : stepsB2B;
  const gridCols = steps.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-3";

  return (
    <section className={`py-24 md:py-28 ${className}`}>
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            The process
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">
            The flow behind your supply chain
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{subheadings[activeTab]}</p>
        </Reveal>

        <div className="flex justify-center mt-10">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1 gap-1">
            {(["3PL", "B2B"] as FlowCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12" key={activeTab}>
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dashed border-primary/40"
          />

          <div className={`relative grid gap-10 lg:gap-4 grid-cols-1 sm:grid-cols-2 ${gridCols}`}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center px-2">
                  <div className="relative">
                    <div className="grid h-24 w-24 place-items-center rounded-full bg-primary/15 border-4 border-background shadow-elegant">
                      <div className="grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground shadow-glow">
                        <s.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-navy text-white text-sm font-bold grid place-items-center shadow-md">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
