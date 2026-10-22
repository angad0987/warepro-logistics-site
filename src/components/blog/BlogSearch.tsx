import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { blogPage } from "@/content/blog";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="blog-search" className="sr-only">
        {blogPage.searchLabel}
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          id="blog-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={blogPage.searchPlaceholder}
          autoComplete="off"
          className="h-12 w-full rounded-xl border-transparent bg-white pl-12 pr-12 text-base text-navy shadow-elegant placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary md:h-14 [&::-webkit-search-cancel-button]:appearance-none"
        />
        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label={blogPage.clearSearch}
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
