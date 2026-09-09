import type { CmsMediaLibrary } from "node_modules/astro-decap/types/types.js";

export const imageMediaLibrary = {
  config: {
    max_file_size: 15_000_000,
  },
} as CmsMediaLibrary;
