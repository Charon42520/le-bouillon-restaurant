import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import decapCms from "astro-decap";
import { cmsConfig } from "./src/cms-config/config.js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    decapCms({
      cmsConfig,
      cmsScriptSrc: "https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js",
    }),
  ],
});
