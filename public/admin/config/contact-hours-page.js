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
      label: "Instagram",
      name: "instagram",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Facebook",
      name: "facebook",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Linkedin",
      name: "linkedin",
      widget: "object",
      fields: contactField,
    },
    {
      label: "Horaires",
      name: "hours",
      widget: "string",
    },
    {
      label: "Recrutement",
      name: "hiring",
      widget: "object",
      fields: [
        {
          label: "Texte",
          name: "displayedText",
          widget: "text",
        },
        {
          label: "Adresse email",
          name: "email",
          widget: "string",
        },
      ],
    },
  ],
};
