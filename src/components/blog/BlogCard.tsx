import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import type { BlogPost } from "@/data/blogPosts";
import { formatBlogDate } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          decoding="async"
          width={post.imageWidth}
          height={post.imageHeight}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {post.category}
        </span>

        <h3 className="mt-3 text-lg font-bold leading-snug text-navy font-heading">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="rounded-sm transition-colors after:absolute after:inset-0 after:content-[''] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-xs text-muted-foreground">
          <span>
            {formatBlogDate(post.publishedAt)} &middot; {post.readingTime}
          </span>
          <ArrowRight
            aria-hidden="true"
            className="pointer-events-none h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}
