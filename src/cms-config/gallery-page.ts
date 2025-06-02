import type {
  CmsCollectionFile,
  CmsField,
} from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

const galleryFields: CmsField[] = [
  {
    label: "Titre",
    name: "title",
    widget: "string",
  },
  {
    label: "Images",
    name: "alt",
    widget: "list",
    fields: [
      {
        label: "Image",
        name: "image",
        widget: "object",
        fields: [
          {
            label: "Image",
            name: "image",
            widget: "image",
          },
          {
            label: "Text alternatif (important pour le SEO)",
            name: "alt",
            widget: "string",
          },
        ],
      },
    ],
  },
];

export const galleryPage: CmsCollectionFile = {
  label: "Galerie",
  name: "gallery",
  file: "src/content/gallery-page/gallery.json",
  fields: [
    seoField,
    {
      label: "Images nourriture",
      name: "food",
      widget: "object",
      fields: galleryFields,
    },
    {
      label: "Images lieu",
      name: "resort",
      widget: "object",
      fields: galleryFields,
    },
  ],
};
