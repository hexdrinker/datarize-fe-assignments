import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../fetcher'
import { ICustomerPurchasesResponse } from '../types'

const useCustomerPurchases = (id: string) => {
  return useQuery({
    queryKey: ['customers', id, 'purchases'],
    queryFn: () => fetcher.get<ICustomerPurchasesResponse>(`/api/customers/${id}/purchases`),
  })
}

export default useCustomerPurchases
