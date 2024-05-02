import { seoField } from "./seo-field.js";

/** @type {import("decap-cms-core").CmsCollectionFile} */
export const legalPage = {
  label: "Infos légales",
  name: "legal-page",
  file: "src/content/legal-page/legal.json",
  fields: [seoField],
};
