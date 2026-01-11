import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/shared/hooks/use-debounce';
import { useI18n } from '@/shared/components/providers/i18n-provider';

export function useAnimeSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useI18n();

  const initialSearch = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    const currentQ = searchParams.get('q') || '';

    // Only update URL if the value is different
    if (debouncedSearch !== currentQ) {
      const newParams = new URLSearchParams(searchParams);

      if (debouncedSearch) {
        newParams.set('q', debouncedSearch);
      } else {
        newParams.delete('q');
      }

      setSearchParams(newParams, { replace: true });
    }
  }, [debouncedSearch, searchParams, setSearchParams]);

  return {
    searchInput,
    setSearchInput,
    t,
  };
}
