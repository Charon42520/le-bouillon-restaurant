import { seoField } from "./seo-field.js";

export const indexPage = {
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
