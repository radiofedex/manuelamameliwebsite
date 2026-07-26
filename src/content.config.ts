import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    shortDescription: z.string(),
    metaDescription: z.string(),
    icon: z.enum(['tooth', 'sparkle', 'child', 'implant', 'filling', 'smile', 'bridge', 'scalpel']),
    accent: z.enum(['teal', 'clay']).default('teal'),
    intro: z.string(),
    highlights: z.array(z.string()),
    forWhom: z.string(),
    whatToExpect: z.string(),
  }),
});

export const collections = { services };
