import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetIcons(),
    presetAttributify(),
    presetTypography(),
    presetUno(),
  ],
  theme: {
    colors: {
      primary: "var(--primary)",
      "secondary-beige": "var(--secondary-beige)",
      "secondary-blue": "var(--secondary-blue)",
      "secondary-gray": "var(--secondary-gray)",
      "secondary-yellow": "var(--secondary-yellow)",
      "background-gray": "var(--background-gray)",
    },
    fontFamily: {
      display: ["youth", "sans-serif"],
      body: ["qanelas", "sans-serif"],
    },
  },
  variants: [
    // selection
    (matcher) => {
      if (!matcher.startsWith("selection:")) return matcher;

      return {
        matcher: matcher.slice(10),
        selector: (s) => `${s}::selection`,
      };
    },
  ],
});
