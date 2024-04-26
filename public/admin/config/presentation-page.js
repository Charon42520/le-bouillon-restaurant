export const presentationPage = {
  label: "Présentation",
  name: "presentation",
  file: "src/content/presentation-page/presentation.md",
  fields: [
    {
      label: "Titre SEO",
      name: "seoTitle",
      widget: "string",
    },
    {
      label: "Description SEO",
      name: "seoDescription",
      widget: "string",
    },
    {
      label: "Contenu",
      name: "body",
      widget: "markdown",
    },
  ],
};
