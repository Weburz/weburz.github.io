import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { ALL_CATEGORIES } from "./app/utils/categories";

const seoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
  })
  .optional();

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: {
        include: "blog/**/*.md",
      },
      schema: z.object({
        date: z.coerce.date().optional(),
        author: z.string().optional(),
        category: z.enum(ALL_CATEGORIES).optional(),
        cover: z.string().optional(),
        seo: seoSchema,
      }),
    }),
    openSource: defineCollection({
      type: "page",
      source: {
        include: "open-source/**/*.md",
      },
      schema: z.object({
        icon: z.string().optional(),
        tags: z.array(z.string()).optional(),
        links: z
          .array(
            z.object({
              label: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            }),
          )
          .optional(),
        seo: seoSchema,
      }),
    }),
  },
});
