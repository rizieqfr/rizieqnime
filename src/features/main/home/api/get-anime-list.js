import { api } from '@/shared/lib/axios'

export async function getAnimeList({ pageParam = 0, search = '' }) {
  const params = {
    'page[limit]': 10,
    'page[offset]': pageParam,
  }

  if (search && search.trim()) {
    params['filter[text]'] = search.trim()
  }

  const response = await api.get('/anime', { params })
  
  return response.data
}
