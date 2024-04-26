export const eventsCollection = {
  label: "Evennements",
  name: "events",
  folder: "src/content/events",
  create: true,
  fields: [
    {
      label: "Titre",
      name: "title",
      widget: "string",
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
    },
    {
      label: "Description",
      name: "summary",
      widget: "string",
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
    },
    {
      label: "Contenu détaillé",
      name: "body",
      widget: "markdown",
    },
  ],
};
