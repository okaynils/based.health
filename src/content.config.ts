import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const protocols = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/protocols" }),
  schema: z.object({
    title: z.string(),
    goal: z.enum(['Energy', 'Clarity', 'Anabolism', 'Testosterone']),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  })
});

export const collections = { protocols };