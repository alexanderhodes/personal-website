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
import node from "@astrojs/node";

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
          disallow: ["/keystatic/*", "/api/keystatic/*", "/musiccan"],
        },
      ],
    }),
    sitemap({
      filter: (page) =>
        page !== "https://alexanderhodes.de/keystatic/" &&
        page !== "https://alexanderhodes.de/api/keystatic/" &&
        page !== "https://alexanderhodes.de/musiccan/",
      i18n: {
        defaultLocale: "de",
        locales: {
          de: "de-DE",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  i18n: {
    defaultLocale: "de",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
