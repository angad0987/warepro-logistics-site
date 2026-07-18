import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, Clock, Shield, Package, Truck, RotateCcw, Boxes, Layers, ShoppingCart, MapPin, CheckCircle2, Tag, Zap, Users, DollarSign, Activity, Cpu, Shirt, Factory, Car, HeartPulse, Store, Utensils, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { DynamicIcon } from "@/lib/DynamicIcon";

const keywordIconMap: Record<string, typeof CheckCircle2> = {
  expiry: Clock, "batch": Clock, "fifo": Clock, "fefo": Clock, "time": Clock,
  "24/7": Shield, "cctv": Shield, "security": Shield, "access": Shield, "fire": Shield, "safety": Shield, "secure": Shield,
  "rack": Boxes, "bulk": Boxes, "storage": Boxes, "sku": Boxes, "inventory": Boxes,
  "pick": Package, "pack": Package, "kit": Package, "bundl": Package, "packaging": Package,
  "dispatch": Truck, "delivery": Truck, "transport": Truck, "ftl": Truck, "ptl": Truck, "last-mile": Truck, "carrier": Truck, "distribution": Truck,
  "return": RotateCcw, "reverse": RotateCcw, "refund": RotateCcw, "restock": RotateCcw,
  "cross": Layers, "dock": Layers,
  "marketplace": ShoppingCart, "ecom": ShoppingCart, "shopify": ShoppingCart,
  "amazon": ShoppingCart, "flipkart": ShoppingCart, "meesho": ShoppingCart,
  "label": Tag, "tag": Tag, "compliant": Tag,
  "real-time": Zap, "fast": Zap, "speed": Zap, "same-day": Zap,
  "dedicated": Users, "support": Users, "manager": Users,
  "cost": DollarSign, "pricing": DollarSign, "tier": DollarSign, "volume": DollarSign,
  "scale": Activity, "capacity": Activity,
  "serial": Cpu, "track": MapPin,
  "fashion": Shirt, "apparel": Shirt,
  "manufacturing": Factory, "raw": Factory,
  "automotive": Car, "spare": Car, "dealer": Car,
  "healthcare": HeartPulse, "regulatory": HeartPulse,
  "retail": Store, "store": Store, "shelf": Store,
  "fmcg": Utensils, "consumer": ShoppingBag,
};

function getBulletIcon(text: string) {
  const lower = text.toLowerCase();
  for (const [keyword, Icon] of Object.entries(keywordIconMap)) {
    if (lower.includes(keyword)) return Icon;
  }
  return CheckCircle2;
}

interface DetailItem {
  icon: string;
  title: string;
  tagline: string;
  long: string;
  bullets: string[];
  image: string;
}

export function DetailModal({
  item,
  onClose,
  ctaLabel = "Get a Quote",
}: {
  item: DetailItem | null;
  onClose: () => void;
  ctaLabel?: string;
}) {
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  return (
    <Dialog open={!!item} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl w-[calc(100%-2rem)] h-[80vh] max-h-[80vh] p-0 gap-0 overflow-hidden rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 [&>button.absolute.right-4]:hidden">
        <DialogClose className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white shadow-md cursor-pointer transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {item && (() => {
          const loaded = imageLoaded[item.title] ?? false;
          const errored = imageError[item.title] ?? false;
          const setLoaded = () => setImageLoaded((p) => ({ ...p, [item.title]: true }));
          const setErrored = () => setImageError((p) => ({ ...p, [item.title]: true }));
          return (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {/* Desktop: side-by-side | Mobile: stacked */}
            <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] h-full">
              {/* LEFT — Image Panel */}
              <div className="relative h-48 md:h-full shrink-0 overflow-hidden">
                {!loaded && !errored && (
                  <div className="absolute inset-0 bg-muted animate-pulse md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none" />
                )}
                {errored ? (
                  <div className="absolute inset-0 gradient-primary md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none flex items-center justify-center">
                    <DynamicIcon name={item.icon} className="h-16 w-16 text-white/40" />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={setLoaded}
                    onError={setErrored}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none pointer-events-none" />
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/20 backdrop-blur-md shadow-glow">
                    <DynamicIcon name={item.icon} className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* RIGHT — Content Panel */}
              <div className="relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 overflow-y-auto p-6 md:p-8" style={{ paddingBottom: '5rem' }}>
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow">
                      <DynamicIcon name={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy font-heading">{item.title}</h2>
                      <p className="text-sm text-primary font-medium">{item.tagline}</p>
                    </div>
                  </div>

                  <div className="hidden md:block mb-5">
                    <h2 className="text-2xl font-bold text-navy font-heading">{item.title}</h2>
                    <p className="text-sm text-primary font-medium mt-1">{item.tagline}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-[15px]">{item.long}</p>

                  <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-2.5">
                    {item.bullets.map((b) => {
                      const BulletIcon = getBulletIcon(b);
                      return (
                        <div key={b} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3.5 py-2.5 shadow-sm">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15">
                            <BulletIcon className="h-3.5 w-3.5 text-primary" />
                          </span>
                          <span className="text-sm text-foreground leading-snug">{b}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-white px-6 md:px-8 py-4">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform"
                  >
                    {ctaLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          );
        })()}
      </DialogContent>
    </Dialog>
  );
}