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
      injectOAuthRoute: true,
      getEnvObjectFromRequestContext: ({ locals }) => locals.runtime.env,
    }),
  ],
  output: "static",
  adapter: cloudflare(),
});
