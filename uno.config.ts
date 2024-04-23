import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  theme: {
    colors: {
      primary: "rgb(234, 73, 0)",
      "secondary-beige": "rgb(208, 182, 136)",
      "secondary-blue": "rgb(176, 215, 229)",
      "secondary-gray": "rgb(225, 223, 210)",
      "secondary-yellow": "rgb(242, 194, 72)",
    },
    fontFamily: {
      display: ["youth", "sans-serif"],
      body: ["qanelas", "sans-serif"],
    },
  },
});
