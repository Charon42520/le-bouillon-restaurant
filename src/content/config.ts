import { z, defineCollection } from "astro:content";

const seo = z.object({
  title: z.string(),
  description: z.string(),
});

const indexPageCollection = defineCollection({
  type: "content",
  schema: z.object({
    seo,
    headline: z.string(),
  }),
});

const presentationPageCollection = defineCollection({
  type: "content",
  schema: z.object({ seo, signature: z.string() }),
});

const menuPageCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      seo,
      pages: z.array(z.object({ title: z.string(), image: image() })),
    }),
});

const dish = z.object({ name: z.string(), description: z.string().optional() });

const dayMenuPageCollection = defineCollection({
  type: "data",
  schema: z.object({
    seo,
    text: z.string(),
    date: z.string(),
    starters: z.array(dish),
    additionalTextStarters: z.string().optional(),
    mainDishes: z.array(dish),
    additionalTextMainDishes: z.string().optional(),
    deserts: z.array(dish),
    additionalTextDeserts: z.string().optional(),
    oneDishPrice: z.number(),
    twoDishesPrice: z.number(),
    threeDishesPrice: z.number(),
  }),
});

const eventsPageCollection = defineCollection({
  type: "data",
  schema: z.object({ seo, noEventsText: z.string() }),
});

const contactField = z.object({
  displayedText: z.string(),
  link: z.string(),
});

const contactHoursCollection = defineCollection({
  type: "data",
  schema: z.object({
    seo,
    phone: contactField,
    email: contactField,
    address: contactField,
    instagram: contactField,
    facebook: contactField,
    linkedin: contactField,
    hours: z.string(),
    hiring: z.object({
      displayedText: z.string(),
      email: z.string(),
    }),
  }),
});

const legalPageCollection = defineCollection({
  type: "data",
  schema: z.object({ seo }),
});

const eventsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
      image: image(),
    }),
});

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({ title: z.string() }),
});

export const collections = {
  "index-page": indexPageCollection,
  "presentation-page": presentationPageCollection,
  "menu-page": menuPageCollection,
  "day-menu-page": dayMenuPageCollection,
  "events-page": eventsPageCollection,
  events: eventsCollection,
  "legal-page": legalPageCollection,
  legal: legalCollection,
  "contact-hours-page": contactHoursCollection,
};
