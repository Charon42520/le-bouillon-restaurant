/** @type {import("decap-cms-core").CmsFieldObject} */
export const seoField = {
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
