import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@/shared/components/providers/query-client-provider';
import { EmotionProvider } from '@/shared/components/providers/emotion-provider';
import { ThemeProvider } from '@/shared/components/providers/theme-provider';
import { I18nProvider } from '@/shared/components/providers/i18n-provider';
import { Toaster } from '@/shared/components/ui/sonner';
import Routes from './Routes';
import '@/shared/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider>
      <EmotionProvider>
        <ThemeProvider>
          <I18nProvider>
            <Routes />
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </EmotionProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
