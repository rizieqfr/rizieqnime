'use client';

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderPrimitive,
} from '@tanstack/react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

function QueryClientProvider({ children }) {
  return <QueryClientProviderPrimitive client={client}>{children}</QueryClientProviderPrimitive>;
}

export { QueryClientProvider };
