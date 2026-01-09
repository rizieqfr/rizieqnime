'use client';

import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useAnimeList } from '../hooks/use-anime-list';
import { AnimeCard } from '../components/anime-card';
import { LoadingSpinner } from '@/shared/components/ui/loading-spinner';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const LoadMoreTrigger = styled.div`
  width: 100%;
  height: 20px;
`;

const EndMessage = styled.p`
  text-align: center;
  color: var(--color-text-muted);
  padding: 32px;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: var(--color-rating-low);
  padding: 32px;
  background: var(--color-bg-card);
  border-radius: 12px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 48px;
  color: var(--color-text-muted);

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-size: 48px;
    display: block;
    margin-bottom: 16px;
  }
`;

export function AnimeListContainer() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    searchQuery,
    t,
    ref,
    isIntersecting,
  } = useAnimeList();

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      const timeoutId = setTimeout(() => {
        fetchNextPage();
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    const loadingText = searchQuery
      ? `${t('home.searching')} "${searchQuery}"...`
      : t('home.loading');
    return <LoadingSpinner text={loadingText} />;
  }

  if (isError) {
    return (
      <ErrorMessage>
        {t('common.error')}: {error?.message || 'Failed to load anime list'}
      </ErrorMessage>
    );
  }

  const rawAnime = data?.pages?.flatMap((page) => page.data) || [];

  // Deduplicate anime by ID
  const allAnime = Array.from(new Map(rawAnime.map((anime) => [anime.id, anime])).values());

  if (allAnime.length === 0 && !isLoading) {
    return (
      <EmptyState>
        <span>🔍</span>
        <p>
          {t('home.noResults')} "{searchQuery}"
        </p>
        <p>{t('home.tryDifferent')}</p>
      </EmptyState>
    );
  }

  return (
    <>
      <Grid>
        {allAnime.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </Grid>

      <LoadMoreTrigger ref={ref} />

      {isFetchingNextPage && <LoadingSpinner size="30px" text={t('home.loadingMore')} />}

      {!hasNextPage && allAnime.length > 0 && <EndMessage>{t('home.endMessage')} 🎉</EndMessage>}
    </>
  );
}
