import { z } from 'zod'

export const posterImageSchema = z.object({
  tiny: z.string().optional(),
  small: z.string().optional(),
  medium: z.string().optional(),
  large: z.string().optional(),
  original: z.string().optional(),
}).nullable().optional()

export const coverImageSchema = z.object({
  tiny: z.string().optional(),
  small: z.string().optional(),
  large: z.string().optional(),
  original: z.string().optional(),
}).nullable().optional()

export const titlesSchema = z.object({
  en: z.string().optional().nullable(),
  en_jp: z.string().optional().nullable(),
  en_us: z.string().optional().nullable(),
  ja_jp: z.string().optional().nullable(),
}).optional()

export const animeDetailAttributesSchema = z.object({
  titles: titlesSchema,
  canonicalTitle: z.string().optional(),
  synopsis: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  averageRating: z.string().optional().nullable(),
  posterImage: posterImageSchema,
  coverImage: coverImageSchema,
  subtype: z.string().optional(),
  status: z.string().optional(),
  episodeCount: z.number().optional().nullable(),
  episodeLength: z.number().optional().nullable(),
  startDate: z.string().optional().nullable(),
  endDate: z.string().optional().nullable(),
  ageRating: z.string().optional().nullable(),
  ageRatingGuide: z.string().optional().nullable(),
  popularityRank: z.number().optional().nullable(),
  ratingRank: z.number().optional().nullable(),
})

export const animeDetailResponseSchema = z.object({
  data: z.object({
    id: z.string(),
    type: z.literal('anime'),
    attributes: animeDetailAttributesSchema,
  }),
})
