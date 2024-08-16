import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../fetcher'
import { IPurchaseFrequencyParams, IPurchaseFrequencyResponse } from '../types'

const usePurchaseFrequency = (params?: IPurchaseFrequencyParams) => {
  return useQuery({
    queryKey: ['purchase-frequency', params?.from, params?.to],
    queryFn: () => fetcher.get<IPurchaseFrequencyResponse, IPurchaseFrequencyParams>(`/api/purchase-frequency`, params),
    refetchOnWindowFocus: false,
  })
}

export default usePurchaseFrequency
