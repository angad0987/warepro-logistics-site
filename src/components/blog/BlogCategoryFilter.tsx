import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  label: string;
}

export function BlogCategoryFilter({
  categories,
  activeCategory,
  onChange,
  label,
}: BlogCategoryFilterProps) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "gradient-primary border-transparent font-semibold text-primary-foreground shadow-glow"
                : "border-border bg-card font-medium text-muted-foreground hover:border-primary/40 hover:text-navy",
            )}
          >
            {isActive && <Check aria-hidden="true" className="h-3.5 w-3.5" />}
            {category}
          </button>
        );
      })}
    </div>
  );
}
