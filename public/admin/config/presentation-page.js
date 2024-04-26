import { seoField } from "./seo-field.js";

export const presentationPage = {
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
