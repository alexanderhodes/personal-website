import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().optional(),
    start: z.date(),
    end: z.date().optional(),
    technologies: z.array(z.string()),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

const technologiesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    visible: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  technologies: technologiesCollection,
};
