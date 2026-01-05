import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/**",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        about: fields.text({ label: "About", multiline: true }),
        tasks: fields.array(fields.text({ label: "Task" }), {
          label: "Tasks",
          itemLabel: (props) => props?.value ?? "-",
        }),
        description: fields.text({ label: "Description", multiline: true }),
        url: fields.text({ label: "URL" }),
        start: fields.date({ label: "Start" }),
        end: fields.date({ label: "End" }),
        technologies: fields.array(
          fields.relationship({
            collection: "technologies",
            label: "Technologies",
            description: "A list of technologies used in this project.",
          }),
          {
            label: "Technologies",
            itemLabel: (props) => props?.value ?? "-",
          }
        ),
        github: fields.url({ label: "GitHub" }),
        website: fields.url({ label: "Website" }),
        other: fields.url({ label: "Other Link" }),
        content: fields.markdoc({ label: "Content" }),
      },
      columns: ["title", "start", "end"],
    }),
    technologies: collection({
      label: "Technologies",
      slugField: "title",
      path: "src/content/technologies/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        visible: fields.checkbox({ label: "Visible" }),
      },
    }),
  },
});
