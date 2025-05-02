import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const presentationPage: CmsCollectionFile = {
  label: "Présentation",
  name: "presentation",
  file: "src/content/presentation-page/presentation.md",
  fields: [
    seoField,
    {
      label: "Contenu",
      name: "body",
      widget: "markdown",
    },
    {
      label: "Signature",
      name: "signature",
      widget: "string",
    },
  ],
};
