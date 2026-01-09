"use client"

import { useAnimeDetail } from '../hooks/use-anime-detail'
import { AnimeInfo } from '../components/anime-info'
import { LoadingSpinner } from '@/shared/components/ui/loading-spinner'
import styled from '@emotion/styled'

const ErrorMessage = styled.div`
  text-align: center;
  color: var(--color-rating-low);
  padding: 32px;
  background: var(--color-bg-card);
  border-radius: 12px;
`

export function AnimeDetailContainer({ id }) {
  const { data, isLoading, isError, error, t } = useAnimeDetail(id)

  if (isLoading) {
    return <LoadingSpinner text={t('common.loading')} />
  }

  if (isError) {
    return (
      <ErrorMessage>
        {t('common.error')}: {error?.message || 'Failed to load anime details'}
      </ErrorMessage>
    )
  }

  if (!data?.data) {
    return <ErrorMessage>Anime not found</ErrorMessage>
  }

  return <AnimeInfo anime={data.data} t={t} />
}
