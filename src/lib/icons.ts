import {
  ShieldCheck,
  BadgeDollarSign,
  Home,
  Star,
  Layers,
  Leaf,
  Building2,
  Flame,
  Refrigerator,
  Sun,
  TreePine,
  Ruler,
  Package,
  Shirt,
  Warehouse,
  PawPrint,
  Award,
  Clock,
  RotateCcw,
  BadgeCheck,
  Instagram,
  Facebook,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

// Single source of truth for every icon used across the site.
// Keyed by the strict `IconName` union — adding a new icon means updating
// both this map and the type, keeping /data honest.
export const iconMap: Record<IconName, LucideIcon> = {
  ShieldCheck,
  BadgeDollarSign,
  Home,
  Star,
  Layers,
  Leaf,
  Building2,
  Flame,
  Refrigerator,
  Sun,
  TreePine,
  Ruler,
  Package,
  Shirt,
  Warehouse,
  PawPrint,
  Award,
  Clock,
  RotateCcw,
  BadgeCheck,
  Instagram,
  Facebook,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}
