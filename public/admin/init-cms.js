import { config } from "./config/config.js";
import { schema } from "./schema.js";

// @ts-ignore
window.initCMS({ config });
const { success, error } = schema.safeParse(config);

if (!success) {
  alert(
    `Error in the CMS config: ${error.message}. Look at the consol for more details.`
  );
  console.error(error);
}
