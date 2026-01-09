'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { useI18n } from '@/shared/components/providers/i18n-provider';

export function useAnimeSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useI18n();

  const initialSearch = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    const currentQ = searchParams.get('q') || '';

    // Only update URL if the value is different
    if (debouncedSearch !== currentQ) {
      const params = new URLSearchParams(searchParams.toString());

      if (debouncedSearch) {
        params.set('q', debouncedSearch);
      } else {
        params.delete('q');
      }

      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [debouncedSearch, router, searchParams]); // Dependency tetap aman karena ada check di dalam

  return {
    searchInput,
    setSearchInput,
    t,
  };
}
