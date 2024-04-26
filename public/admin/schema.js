import { z } from "zod";

const baseFieldSchema = z.object({
  label: z.string(),
  name: z.string(),
  required: z.boolean().optional(),
  collapsed: z.boolean().optional(),
  step: z.number().optional(),
  widget: z.string(),
});

/**
 * @typedef {z.infer<typeof baseFieldSchema> & { fields?: Field[] }} Field
 */

/**
 * @type {z.ZodType<Field>}
 */
const fieldSchema = baseFieldSchema.extend({
  fields: z.lazy(() => fieldSchema.array()).optional(),
});

export const schema = z.object({
  load_config_file: z.boolean().optional(),
  backend: z.object({
    name: z.string(),
    branch: z.string(),
    repo: z.string(),
    auth_type: z.string(),
    app_id: z.string(),
  }),
  locale: z.string().optional(),
  search: z.boolean().optional(),
  media_folder: z.string(),
  public_folder: z.string(),
  editor: z.object({ preview: z.boolean().optional() }).optional(),
  collections: z
    .array(
      z.object({
        label: z.string(),
        name: z.string(),
        folder: z.string().optional(),
        create: z.boolean().optional(),
        fields: z.array(fieldSchema).optional(),
        files: z
          .array(
            z.object({
              label: z.string(),
              name: z.string(),
              file: z.string(),
              fields: z.array(fieldSchema),
            })
          )
          .optional(),
      })
    )
    .refine(
      (collections) => {
        const collectionNames = collections.map((c) => c.name);

        return collectionNames.every(
          (collectionName) =>
            collectionNames.filter((c) => c === collectionName).length === 1
        );
      },
      { message: "Name field should be unique." }
    ),
});
