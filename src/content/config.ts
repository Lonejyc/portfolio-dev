import { defineCollection, z } from 'astro:content';

const mmi = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        img_alt: z.string().optional(),
        support: z.array(z.string()),
        git: z.string().optional(),
    }),
});

const myrole = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        img_alt: z.string().optional(),
        support: z.array(z.string()),
        git: z.string().optional(),
    }),
});

const perso = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
        img_alt: z.string().optional(),
        support: z.array(z.string()),
        git: z.string().optional(),
    }),
});

export default {
    mmi,
    myrole,
    perso,
};