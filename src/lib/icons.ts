import {
  Warehouse, Boxes, Package, ShoppingCart, Truck, RotateCcw, PackageOpen, Layers,
  ShoppingBag, Store, Utensils, Cpu, Shirt, Factory, Car, HeartPulse,
  ShieldCheck, Activity, Zap, Users, DollarSign, Compass, Target, Sparkles, GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Warehouse, Boxes, Package, ShoppingCart, Truck, RotateCcw, PackageOpen, Layers,
  ShoppingBag, Store, Utensils, Cpu, Shirt, Factory, Car, HeartPulse,
  ShieldCheck, Activity, Zap, Users, DollarSign, Compass, Target, Sparkles, GraduationCap,
};

export function getIcon(name: string): LucideIcon {
  const icon = iconMap[name];
  if (!icon) {
    throw new Error(`Icon "${name}" not found in icon map`);
  }
  return icon;
}