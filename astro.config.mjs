import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon(), react(), markdoc(), keystatic()],
  output: "hybrid",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  adapter: netlify(),
});
