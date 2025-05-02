import type { CmsCollectionFile } from "node_modules/astro-decap/types/types.js";
import { seoField } from "./seo-field.ts";

export const legalPage: CmsCollectionFile = {
  label: "Infos légales",
  name: "legal-page",
  file: "src/content/legal-page/legal.json",
  fields: [seoField],
};
