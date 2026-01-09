import { z } from 'zod';

export const posterImageSchema = z
  .object({
    tiny: z.string().optional(),
    small: z.string().optional(),
    medium: z.string().optional(),
    large: z.string().optional(),
    original: z.string().optional(),
  })
  .nullable()
  .optional();

export const titlesSchema = z
  .object({
    en: z.string().optional().nullable(),
    en_jp: z.string().optional().nullable(),
    ja_jp: z.string().optional().nullable(),
  })
  .optional();

export const animeAttributesSchema = z.object({
  titles: titlesSchema,
  canonicalTitle: z.string().optional(),
  synopsis: z.string().optional().nullable(),
  averageRating: z.string().optional().nullable(),
  posterImage: posterImageSchema,
  subtype: z.string().optional(),
  status: z.string().optional(),
  episodeCount: z.number().optional().nullable(),
  startDate: z.string().optional().nullable(),
});

export const animeItemSchema = z.object({
  id: z.string(),
  type: z.literal('anime'),
  attributes: animeAttributesSchema,
});

export const animeListResponseSchema = z.object({
  data: z.array(animeItemSchema),
  meta: z
    .object({
      count: z.number(),
    })
    .optional(),
  links: z
    .object({
      first: z.string().optional(),
      next: z.string().optional().nullable(),
      last: z.string().optional(),
    })
    .optional(),
});
