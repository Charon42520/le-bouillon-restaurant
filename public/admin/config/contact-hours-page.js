import { seoField } from "./seo-field.js";

const contactField = [
  {
    label: "Lien",
    name: "link",
    widget: "string",
  },
  {
    label: "Text affiché",
    name: "displayedText",
    widget: "string",
  },
];

export const contactHoursPage = {
  label: "Contact et horaires",
  name: "contact-hours",
  file: "src/content/contact-hours-page/contact-hours.json",
  fields: [
    seoField,
    {
      label: "Numéro de téléphone",
      name: "phone",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Adresse email",
      name: "email",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Adresse",
      name: "address",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Horaires",
      name: "hours",
      widget: "string",
    },
  ],
};
