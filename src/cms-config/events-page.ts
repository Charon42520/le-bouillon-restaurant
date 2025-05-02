import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const eventsPage: CmsCollectionFile = {
  label: "Programmation",
  name: "events-page",
  file: "src/content/events-page/events.json",
  fields: [
    seoField,
    {
      label: "Texte affiché quand aucun événement prévu",
      name: "noEventsText",
      widget: "string",
    },
  ],
};
