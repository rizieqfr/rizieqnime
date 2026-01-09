"use client"

import { useQuery } from '@tanstack/react-query'
import { getAnimeDetail } from '../api/get-anime-detail'
import { useI18n } from '@/shared/components/providers/i18n-provider'

export function useAnimeDetail(id) {
  const { t } = useI18n()
  const query = useQuery({
    queryKey: ['anime-detail', id],
    queryFn: () => getAnimeDetail(id),
    enabled: !!id,
  })
  return {
    ...query,
    t,
  }
}
