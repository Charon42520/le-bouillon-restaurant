import { contactHoursPage } from "./contact-hours-page.js";
import { dayMenuPage } from "./day-menu-page.js";
import { eventsCollection } from "./events-collection.js";
import { eventsPage } from "./events-page.js";
import { indexPage } from "./index-page.js";
import { legalCollection } from "./legal-collection.js";
import { legalPage } from "./legal-page.js";
import { menuPage } from "./menu-page.js";
import { presentationPage } from "./presentation-page.js";

/** @type {import('decap-cms-core').CmsConfig} */
export const config = {
  load_config_file: false,
  backend: {
    name: "gitlab",
    branch: "develop",
    repo: "nicorio42/le-bouillon-restaurant",
    auth_type: "pkce",
    app_id: "de3bf42d6990ad57f4ab8346eabdfc1e0798ae1d4518b57e0d3e07adde713e95",
  },
  locale: "fr",
  search: false,
  media_folder: "src/assets",
  public_folder: "@assets",
  collections: [
    {
      label: "Pages",
      name: "pages",
      files: [
        indexPage,
        presentationPage,
        menuPage,
        dayMenuPage,
        eventsPage,
        contactHoursPage,
        legalPage,
      ],
    },
    eventsCollection,
    legalCollection,
  ],
};
