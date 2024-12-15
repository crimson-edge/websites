import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().optional(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
