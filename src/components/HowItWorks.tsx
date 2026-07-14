import { Reveal } from "@/components/Reveal";
import { PackageCheck, Boxes, ClipboardList, Truck, MapPin } from "lucide-react";

const steps = [
  {
    icon: PackageCheck,
    title: "Inbound & Receiving",
    desc: "Goods arrive, scanned, quality-checked and logged into our WMS.",
  },
  {
    icon: Boxes,
    title: "Storage & Inventory",
    desc: "SKUs organized into racking and tracked with real-time accuracy.",
  },
  {
    icon: ClipboardList,
    title: "Order Processing",
    desc: "Pick, pack and kit orders with barcode-verified accuracy.",
  },
  {
    icon: Truck,
    title: "Dispatch & Transport",
    desc: "Loaded onto vetted carriers for PTL, FTL or last-mile routes.",
  },
  {
    icon: MapPin,
    title: "Delivery & Tracking",
    desc: "Real-time shipment tracking through to the end customer.",
  },
];

export function HowItWorks({ className = "" }: { className?: string }) {
  return (
    <section className={`py-24 md:py-28 ${className}`}>
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            The process
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-navy">
            How CoreWarehousing Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A five-step fulfillment flow — from the moment your inventory arrives to the moment
            it reaches your customer.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Dashed connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dashed border-primary/40"
          />

          <div className="relative grid gap-10 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
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
