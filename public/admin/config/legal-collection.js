export const legalCollection = {
  label: "Infos légales",
  name: "legal",
  folder: "src/content/legal",
  create: true,
  fields: [
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Contenu détaillé",
      name: "body",
      widget: "markdown",
    },
  ],
};
