import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const presentationPage: CmsCollectionFile = {
  label: "Présentation",
  name: "presentation",
  file: "src/content/presentation-page/presentation.md",
  fields: [
    seoField,
    {
      label: "Image bannière",
      name: "banner",
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
