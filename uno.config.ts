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
