import { defineCollection, z } from 'astro:content';

export const mmiCollections = {
	workMmi: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			support: z.array(z.string()),
			git: z.string().optional(),
		}),
	}),
};
export const myroleCollections = {
	workMyrole: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			support: z.array(z.string()),
			git: z.string().optional(),
		}),
	}),
};
export const persoCollections = {
	workPerso: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			img: z.string(),
			img_alt: z.string().optional(),
			support: z.array(z.string()),
			git: z.string().optional(),
		}),
	}),
};
