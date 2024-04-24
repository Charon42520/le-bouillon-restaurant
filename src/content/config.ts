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

export const collections = {
  "index-page": indexPageCollection,
  "presentation-page": presentationPageCollection,
};
