'use client';

import { AnimeDetailPageView } from './components/anime-detail-page-view';
import { useI18n } from '@/shared/components/providers/i18n-provider';

export default function AnimeDetail({ id }) {
  const { t } = useI18n();

  return <AnimeDetailPageView id={id} backText={t('detail.backToList')} />;
}
