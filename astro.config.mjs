import cloudflare from "@astrojs/cloudflare";
import decapCms from "astro-decap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { cmsConfig } from "./src/cms-config/config.ts";

export default defineConfig({
  site: "https://lebouillondeseauxvives.fr",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    decapCms({
      cmsConfig,
      cmsScriptSrc: "https://unpkg.com/decap-cms@3.8.0/dist/decap-cms.js",
      injectOAuthRoute: true,
      getEnvObjectFromRequestContext: ({ locals }) => locals.runtime.env,
    }),
  ],
  output: "static",
  adapter: cloudflare(),
});
