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
      primary: "rgb(234, 73, 0)",
      "secondary-beige": "rgb(208, 182, 136)",
      "secondary-blue": "rgb(176, 215, 229)",
      "secondary-gray": "rgb(225, 223, 210)",
      "secondary-yellow": "rgb(242, 194, 72)",
    },
  },
});
