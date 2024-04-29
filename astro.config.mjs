import { defineConfig } from "astro/config";
// import AstroDecapCms from "./src/astro-decap-cms/integration";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [
    UnoCSS({ injectReset: true }),
    // AstroDecapCms({ cmsConfig: { toto: "toto", titi: "tutu" } }),
  ],
});
