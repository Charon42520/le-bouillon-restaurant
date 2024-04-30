import { seoField } from "./seo-field.js";

/** @type {import("decap-cms-core").CmsCollectionFile} */
export const eventsPage = {
  label: "Programmation",
  name: "events-page",
  file: "src/content/events-page/events.json",
  fields: [seoField],
};
