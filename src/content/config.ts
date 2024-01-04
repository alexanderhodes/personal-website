import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().optional(),
    start: z.string(),
    end: z.string().optional(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    website: z.string().optional(),
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
