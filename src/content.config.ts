import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const seo = z.object({
  title: z.string(),
  description: z.string(),
});

const indexPageCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/index-page" }),
  schema: z.object({
    seo,
    headline: z.string(),
  }),
});

const presentationPageCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/presentation-page" }),
  schema: ({ image }) =>
    z.object({
      seo,
      banner: z.object({
        image: image(),
        alt: z.string(),
      }),
      signature: z.string(),
    }),
});

const galleryPageCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/gallery-page" }),
  schema: ({ image }) =>
    z.object({
      seo,
      food: z.object({
        title: z.string(),
        images: z
          .object({
            image: image(),
            alt: z.string(),
          })
          .array(),
      }),
      resort: z.object({
        title: z.string(),
        images: z
          .object({
            image: image(),
            alt: z.string(),
          })
          .array(),
      }),
    }),
});

const menuPageCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/menu-page" }),
  schema: ({ image }) =>
    z.object({
      seo,
      pages: z.array(z.object({ title: z.string(), image: image() })),
    }),
});

const dish = z.object({ name: z.string(), description: z.string().optional() });

const dayMenuPageCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/day-menu-page" }),
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
  loader: glob({ pattern: "*.json", base: "./src/content/events-page" }),
  schema: z.object({ seo, noEventsText: z.string() }),
});

const contactField = z.object({
  displayedText: z.string(),
  link: z.string(),
});

const contactHoursCollection = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/contact-hours-page",
  }),
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
  loader: glob({ pattern: "*.json", base: "./src/content/legal-page" }),
  schema: z.object({ seo }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/events" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      summary: z.string(),
      image: image(),
    }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/legal" }),
  schema: z.object({ title: z.string() }),
});

export const collections = {
  "index-page": indexPageCollection,
  "presentation-page": presentationPageCollection,
  "gallery-page": galleryPageCollection,
  "menu-page": menuPageCollection,
  "day-menu-page": dayMenuPageCollection,
  "events-page": eventsPageCollection,
  events: eventsCollection,
  "legal-page": legalPageCollection,
  legal: legalCollection,
  "contact-hours-page": contactHoursCollection,
};
