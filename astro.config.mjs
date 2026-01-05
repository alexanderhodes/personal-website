import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";
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
        },
      },
    }),
  ],
  output: "server",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  adapter: vercel({
    runtime: "nodejs20.x",
  }),
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
