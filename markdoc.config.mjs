import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    fence: {
      render: component("./src/components/CodeBlock.astro"),
      attributes: {
        language: { type: String },
        content: { type: String },
      },
    },
  },
});
