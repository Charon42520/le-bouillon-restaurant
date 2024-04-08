import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
  presetIcons,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetWebFonts({ provider: "bunny", fonts: { sans: "Hind" } }),
  ],
  theme: {
    colors: {
      primary: "#ea4900",
    },
  },
});
