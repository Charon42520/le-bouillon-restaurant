import { z, defineCollection } from "astro:content";

const indexPageCollection = defineCollection({
  type: "content",
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    headline: z.string(),
  }),
});

const presentationPageCollection = defineCollection({
  type: "content",
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const eventsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      summary: z.string(),
      image: image(),
    }),
});

export const collections = {
  "index-page": indexPageCollection,
  "presentation-page": presentationPageCollection,
  events: eventsCollection,
};
