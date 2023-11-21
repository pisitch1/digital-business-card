// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const cardsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({image}) => z.object({
    theme: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    middleName: z.string().optional(),
    prefix: z.string().optional(),
    suffix: z.string().optional(),
    email: z.string().optional(),
    pronouns: z.string().optional(),
    company: z.string().optional(),
    position: z.string().optional(),
    website: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    socialMedia: z.array(z.object({
      platform: z.enum(['Linkedin', 'Facebook', 'Yelp']),
      url: z.string(),
    })).optional(),
    image: image(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  cards: cardsCollection,
};
