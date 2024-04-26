export const menuPage = {
  label: "La carte",
  name: "menu",
  file: "src/content/menu-page/menu.json",
  fields: [
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
