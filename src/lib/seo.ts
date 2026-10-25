import type { MetaDescriptor } from "@tanstack/react-router";

export const SITE_URL = "https://corewarehousing.com";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

export function seo({ title, description, path }: SeoInput) {
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ] satisfies MetaDescriptor[],
    links: [{ rel: "canonical", href: canonical }],
  };
}
