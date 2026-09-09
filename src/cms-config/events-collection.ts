import type { CmsCollection } from "node_modules/astro-decap/types/types";
import { imageMediaLibrary } from "./image-media-library.ts";

export const eventsCollection: CmsCollection = {
  label: "Evennements",
  name: "events",
  folder: "src/content/events",
  create: true,
  fields: [
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
    },
    {
      label: "Description",
      name: "summary",
      widget: "text",
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      media_library: imageMediaLibrary,
    },
    {
      label: "Contenu détaillé",
      name: "body",
      widget: "markdown",
    },
  ],
};
