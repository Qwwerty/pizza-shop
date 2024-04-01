import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  id: string
  managerId: string
  name: string | null
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
