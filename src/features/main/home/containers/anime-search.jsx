"use client"

import { useAnimeSearch } from '../hooks/use-anime-search'
import { SearchInput } from '../components/search-input'
import { useI18n } from '@/shared/components/providers/i18n-provider'

export function AnimeSearchContainer() {
  const { searchInput, setSearchInput, t } = useAnimeSearch()

  return (
    <SearchInput
      value={searchInput}
      onChange={setSearchInput}
      placeholder={t('home.searchPlaceholder')}
    />
  )
}
