import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://corewarehousing.com";

// Only real, public pages. Keep this in sync with src/routes.
const PATHS = [
  "/",
  "/services",
  "/industries",
  "/how-we-work",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/why-choose-us"
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map(
          (path) => `  <url>\n    <loc>${BASE_URL}${path === "/" ? "/" : path}</loc>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});