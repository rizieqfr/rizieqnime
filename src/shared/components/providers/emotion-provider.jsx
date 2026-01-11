import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useState } from 'react';

export function EmotionProvider({ children }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' });
    cache.compat = true;
    return cache;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
