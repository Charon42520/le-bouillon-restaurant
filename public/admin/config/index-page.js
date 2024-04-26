export const indexPage = {
  label: "Accueil",
  name: "index",
  file: "src/content/index-page/index.md",
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
      label: "Titre",
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
