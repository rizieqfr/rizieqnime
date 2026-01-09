import { Outfit } from 'next/font/google';
import './globals.css';
import { QueryClientProvider } from '@/shared/components/providers/query-client-provider';
import { EmotionProvider } from '@/shared/components/providers/emotion-provider';
import { ThemeProvider } from '@/shared/components/providers/theme-provider';
import { I18nProvider } from '@/shared/components/providers/i18n-provider';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/shared/components/ui/sonner';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'RizieqNime - Frontend Engineer Test',
  description: 'Frontend Engineering Test untuk PARKEE oleh Muh Rizieq Fazlulrahman Djafar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-(family-name:--font-outfit)`}>
        <QueryClientProvider>
          <EmotionProvider>
            <ThemeProvider>
              <I18nProvider>
                <NextTopLoader color="#dc2626" />
                {children}
                <Toaster />
              </I18nProvider>
            </ThemeProvider>
          </EmotionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
