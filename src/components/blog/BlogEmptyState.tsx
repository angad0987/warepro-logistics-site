import type { ReactNode } from "react";
import { SearchX } from "lucide-react";

interface BlogEmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
  headingLevel?: 1 | 2;
}

export function BlogEmptyState({
  title,
  description,
  action,
  icon,
  headingLevel = 2,
}: BlogEmptyStateProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center shadow-card-soft md:p-16">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
        {icon ?? <SearchX aria-hidden="true" className="h-6 w-6" />}
      </div>
      <Heading className="mt-6 text-2xl font-bold text-navy font-heading md:text-3xl">
        {title}
      </Heading>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{description}</p>
      {action && <div className="mt-8 flex justify-center">{action}</div>}
    </div>
  );
}
