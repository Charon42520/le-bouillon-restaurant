import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const indexPage: CmsCollectionFile = {
  label: "Accueil",
  name: "index",
  file: "src/content/index-page/index.md",
  fields: [
    seoField,
    {
      label: "Texte principal",
      name: "headline",
      widget: "string",
    },
    {
      label: "Contenu",
      name: "body",
      widget: "markdown",
    },
  ],
};
