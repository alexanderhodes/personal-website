import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().optional(),
    start: z.date(),
    end: z.date().optional(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    website: z.string().optional(),
    other: z.string().optional(),
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
