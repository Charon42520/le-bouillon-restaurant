import { contactHoursPage } from "./contact-hours-page.ts";
import { dayMenuPage } from "./day-menu-page.ts";
import { eventsCollection } from "./events-collection.ts";
import { eventsPage } from "./events-page.ts";
import { indexPage } from "./index-page.ts";
import { legalCollection } from "./legal-collection.ts";
import { legalPage } from "./legal-page.ts";
import { menuPage } from "./menu-page.ts";
import { presentationPage } from "./presentation-page.ts";
import { isLocalBackend, WEBSITE_URL } from "../lib/constants";
import type {
  CmsBackend,
  CmsConfig,
} from "node_modules/astro-decap/types/types";

function getBackend(): CmsBackend {
  if (isLocalBackend) return {
    "name": "proxy",
    "proxy_url": "http://localhost:8081/api/v1"
  };

  if (import.meta.env.DEV) return { name: "test-repo" };

  const url = new URL(WEBSITE_URL);

  return {
    name: "github",
    repo: "Charon42520/le-bouillon-restaurant",
    branch: "main",
    site_domain: url.hostname,
    base_url: WEBSITE_URL,
    auth_endpoint: "oauth",
  };
}

export const cmsConfig: CmsConfig = {
  backend: getBackend(),
  editor: { preview: false },
  locale: "fr",
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
