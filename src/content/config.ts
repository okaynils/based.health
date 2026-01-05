import { defineCollection, z } from 'astro:content';

const protocols = defineCollection({
  schema: z.object({
    title: z.string(),
    lastUpdated: z.date(),
    tags: z.array(z.string()),
    difficulty: z.enum(["easy", "medium", "hard"]).default("easy"),
    cost: z.enum(["free", "$", "$$", "$$$"]).default("free"),
    timeCommitment: z.string(),
  }),
});

export const collections = { protocols };