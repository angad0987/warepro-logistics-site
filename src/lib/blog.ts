import { blogPosts, type BlogContentBlock, type BlogPost } from "@/data/blogPosts";

/** Normalises text for case-insensitive, whitespace-tolerant matching. */
function normalize(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Flattens the structured article body into a single searchable string. */
function contentToText(blocks: BlogContentBlock[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
        case "heading":
          return block.text;
        case "list":
          return block.items.join(" ");
        case "callout":
          return `${block.title} ${block.text}`;
      }
    })
    .join(" ");
}

/** Everything about a post that should be reachable by search. */
function searchableText(post: BlogPost): string {
  return normalize(
    [
      post.title,
      post.excerpt,
      post.category,
      post.tags.join(" "),
      contentToText(post.content),
    ].join(" "),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * Filters posts by a free-text query across title, excerpt, body content,
 * category and tags. All query terms must match (AND) and the comparison is
 * case-insensitive and whitespace tolerant.
 */
export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return posts;

  return posts.filter((post) => {
    const haystack = searchableText(post);
    return terms.every((term) => haystack.includes(term));
  });
}

/** Filters posts by a single category. "All" (or an empty value) keeps every post. */
export function filterBlogPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  if (!category || category === "All") return posts;
  return posts.filter((post) => post.category === category);
}

/** Applies the search query and the category filter together. */
export function filterBlogPosts(
  posts: BlogPost[],
  options: { query?: string; category?: string },
): BlogPost[] {
  return filterBlogPostsByCategory(
    searchBlogPosts(posts, options.query ?? ""),
    options.category ?? "All",
  );
}

/**
 * Related posts: same category first, then the most recent remaining articles
 * so the section always returns the requested number of items.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = blogPosts.filter((candidate) => candidate.slug !== post.slug);
  const sameCategory = others.filter((candidate) => candidate.category === post.category);
  const remainder = others.filter((candidate) => candidate.category !== post.category);
  return [...sameCategory, ...remainder].slice(0, limit);
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/** Formats an ISO date (YYYY-MM-DD) as e.g. "October 18, 2026". */
export function formatBlogDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  return Number.isNaN(date.getTime()) ? isoDate : dateFormatter.format(date);
}
