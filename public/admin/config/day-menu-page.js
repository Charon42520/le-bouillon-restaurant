const dishFields = [
  {
    label: "Nom",
    name: "name",
    widget: "string",
  },
  {
    label: "Description",
    name: "description",
    required: false,
    widget: "string",
  },
];

export const dayMenuPage = {
  label: "Menu du jour",
  name: "day-menu",
  file: "src/content/day-menu-page/day-menu.json",
  fields: [
    {
      label: "Introduction",
      name: "text",
      widget: "string",
    },
    {
      label: "Date",
      name: "date",
      widget: "datetime",
    },
    {
      label: "Entrées",
      name: "starters",
      widget: "list",
      fields: dishFields,
    },
    {
      label: "Texte additionnel entrées",
      name: "additionalTextStarters",
      widget: "string",
      required: false,
    },
    {
      label: "Plats",
      name: "mainDishes",
      widget: "list",
      fields: dishFields,
    },
    {
      label: "Texte additionnel plats",
      name: "additionalTextMainDishes",
      widget: "string",
      required: false,
    },
    {
      label: "Desserts",
      name: "deserts",
      widget: "list",
      fields: dishFields,
    },
    {
      label: "Texte additionnel desserts",
      name: "additionalTextDeserts",
      widget: "string",
      required: false,
    },
    {
      label: "Prix un plat",
      name: "oneDishPrice",
      widget: "number",
      step: 0.1,
    },
    {
      label: "Prix deux plats",
      name: "twoDishesPrice",
      widget: "number",
      step: 0.1,
    },
    {
      label: "Prix trois plats",
      name: "threeDishesPrice",
      widget: "number",
      step: 0.1,
    },
  ],
};
