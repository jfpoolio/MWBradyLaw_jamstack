import { defineCollection, z } from 'astro:content';

const practiceAreasCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		slug: z.string(),
		featured: z.boolean().default(false),
		order: z.number(),
		image: z.string().optional(),
		seo: z.object({
			title: z.string().optional(),
			description: z.string().optional(),
			keywords: z.array(z.string()).optional(),
		}).optional(),
		team: z.array(z.string()).optional(),
	}),
});

const teamCollection = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		title: z.string(),
		bio: z.string(),
		image: z.string(),
		email: z.string().email().optional(),
		phone: z.string().optional(),
		practiceAreas: z.array(z.string()),
		order: z.number(),
		featured: z.boolean().default(false),
	}),
});

const pagesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		seo: z.object({
			title: z.string().optional(),
			description: z.string().optional(),
			keywords: z.array(z.string()).optional(),
		}).optional(),
		lastModified: z.date().optional(),
	}),
});

const settingsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		siteName: z.string().optional(),
		siteDescription: z.string().optional(),
		contactInfo: z.object({
			phone: z.string(),
			email: z.string(),
			fax: z.string().optional(),
			addresses: z.array(z.object({
				name: z.string(),
				street: z.string(),
				city: z.string(),
				state: z.string(),
				zip: z.string(),
				phone: z.string().optional(),
			})),
		}).optional(),
		navigation: z.array(z.object({
			label: z.string(),
			href: z.string(),
			order: z.number(),
		})).optional(),
		socialMedia: z.object({
			facebook: z.string().optional(),
			instagram: z.string().optional(),
			linkedin: z.string().optional(),
		}).optional(),
	}),
});

export const collections = {
	'practice-areas': practiceAreasCollection,
	'team': teamCollection,
	'pages': pagesCollection,
	'settings': settingsCollection,
};

