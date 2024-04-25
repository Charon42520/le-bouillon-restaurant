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

const menuPageCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      pages: z.array(z.object({ title: z.string(), image: image() })),
    }),
});

const dish = z.object({ name: z.string(), description: z.string() });

const dayMenuPageCollection = defineCollection({
  type: "data",
  schema: z.object({
    text: z.string(),
    date: z.string(),
    starters: z.array(dish),
    additionalTextStarters: z.string(),
    mainDishes: z.array(dish),
    additionalTextMainDishes: z.string(),
    deserts: z.array(dish),
    additionalTextDeserts: z.string(),
    oneDishPrice: z.number(),
    twoDishesPrice: z.number(),
    threeDishesPrice: z.number(),
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
  "menu-page": menuPageCollection,
  "day-menu-page": dayMenuPageCollection,
};
