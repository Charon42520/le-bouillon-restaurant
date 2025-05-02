import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const menuPage: CmsCollectionFile = {
  label: "La carte",
  name: "menu",
  file: "src/content/menu-page/menu.json",
  fields: [
    seoField,
    {
      label: "Pages",
      name: "pages",
      widget: "list",
      fields: [
        {
          label: "Titre",
          name: "title",
          widget: "string",
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
        },
      ],
    },
  ],
};
