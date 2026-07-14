"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";

const ToggleGroup = ToggleGroupPrimitive.Root;

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & {
    active?: boolean;
  }
>(({ className, active, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-200 tap-target cursor-pointer",
      "min-h-[48px] min-w-[48px] px-4 py-2",
      "border-2",
      active
        ? "border-primary bg-primary/5 text-primary shadow-sm sparkle-glow"
        : "border-border bg-surface text-muted hover:border-muted-light hover:text-text",
      className
    )}
    {...props}
  />
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
