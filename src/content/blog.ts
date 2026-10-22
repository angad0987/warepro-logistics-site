export interface BlogPageContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  filterLabel: string;
  allCategoriesLabel: string;
  resultCountLabel: string;
  emptyHeadline: string;
  emptyMessage: string;
  emptyCta: string;
}

export const blogPage: BlogPageContent = {
  eyebrow: "Blog & resources",
  headline: "Insights for modern supply chains.",
  subheadline:
    "Practical insights on warehousing, 3PL, fulfillment, inventory and logistics for growing businesses.",
  searchLabel: "Search articles",
  searchPlaceholder: "Search articles...",
  clearSearch: "Clear search",
  filterLabel: "Filter articles by category",
  allCategoriesLabel: "All",
  resultCountLabel: "articles",
  emptyHeadline: "No articles found",
  emptyMessage: "Try a different keyword or browse our categories.",
  emptyCta: "Clear search",
};

export interface BlogArticlePageContent {
  backToBlog: string;
  relatedTitle: string;
  ctaTitle: string;
  ctaLabel: string;
  notFoundTitle: string;
  notFoundMessage: string;
  notFoundCta: string;
}

export const blogArticlePage: BlogArticlePageContent = {
  backToBlog: "Back to Blog",
  relatedTitle: "Related Articles",
  ctaTitle: "Looking for reliable warehousing and 3PL support?",
  ctaLabel: "Talk to Our Team",
  notFoundTitle: "Article not found",
  notFoundMessage: "The article you're looking for doesn't exist or may have been moved.",
  notFoundCta: "Back to Blog",
};
