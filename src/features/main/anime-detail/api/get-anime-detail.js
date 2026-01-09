import { api } from '@/shared/lib/axios'

export async function getAnimeDetail(id) {
  const response = await api.get(`/anime/${id}`)
  return response.data
}
