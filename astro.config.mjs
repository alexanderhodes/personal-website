import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://alexanderhodes.de",
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    react(),
    markdoc(),
    keystatic(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/keystatic/*", "/api/keystatic/*"],
        },
      ],
    }),
    sitemap({
      filter: (page) =>
        page !== "https://stargazers.club/keystatic/" &&
        page !== "https://stargazers.club/api/keystatic/",
    }),
  ],
  output: "hybrid",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  adapter: vercel(),
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
