'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getAnimeList } from '../api/get-anime-list';
import { useI18n } from '@/shared/components/providers/i18n-provider';
import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';

export function useAnimeList() {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const search = searchParams.get('q') || '';
  const { ref, isIntersecting } = useIntersectionObserver();

  const query = useInfiniteQuery({
    queryKey: ['anime-list', search],
    queryFn: ({ pageParam }) => getAnimeList({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * 10;

      const totalCount = lastPage?.meta?.count || 0;
      if (nextOffset >= totalCount) {
        return undefined;
      }

      return nextOffset;
    },
  });

  return {
    ...query,
    searchQuery: search,
    t,
    ref,
    isIntersecting,
  };
}
