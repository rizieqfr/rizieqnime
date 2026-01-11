import { HomeView } from './components/home-view';
import { useI18n } from '@/shared/components/providers/i18n-provider';

export default function Home() {
  const { t } = useI18n();

  return <HomeView title={t('home.title')} subtitle={t('home.subtitle')} />;
}
