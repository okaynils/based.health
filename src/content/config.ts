import { defineCollection, z } from 'astro:content';

const protocols = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lastUpdated: z.date(),
    tags: z.array(z.string()),
    difficulty: z.enum(["easy", "medium", "hard"]).default("easy"),
    cost: z.enum(["free", "$", "$$", "$$$"]).default("free"),
    timeCommitment: z.string(),
    frequency: z.string(),
    impact: z.enum(["high", "medium", "low"]),
    evidenceLevel: z.enum(["strong", "moderate", "emerging"]),
    riskLevel: z.enum(["low", "medium", "high"]).default("low"),
    starterKit: z.boolean().default(false),
    starterRank: z.number().int().positive().optional(),
    contraindications: z.array(z.string()),
  }),
});

export const collections = { protocols };
