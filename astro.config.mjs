import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon(), react(), markdoc(), keystatic()],
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
