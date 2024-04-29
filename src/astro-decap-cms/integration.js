import { writeFileSync } from "node:fs";

/**
 * @param {{cmsConfig: object}} config
 * @returns {import("astro").AstroIntegration}
 */
function astroDecapCmsIntegration({ cmsConfig }) {
  writeFileSync(
    "./src/astro-decap-cms/cms-config.json",
    JSON.stringify(cmsConfig)
  );

  return {
    name: "astro-decap-cms",
    hooks: {
      "astro:config:setup": ({ injectRoute }) =>
        injectRoute({
          pattern: "/cms",
          entrypoint: "src/astro-decap-cms/cms.astro",
        }),
    },
  };
}

export default astroDecapCmsIntegration;
