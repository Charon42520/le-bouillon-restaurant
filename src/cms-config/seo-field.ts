import type { CmsFieldBase, CmsFieldObject } from "node_modules/astro-decap/types/types";

export const seoField: CmsFieldBase & CmsFieldObject = {
  label: "Moteurs de recherche",
  name: "seo",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Description",
      name: "description",
      widget: "string",
    },
  ],
};
