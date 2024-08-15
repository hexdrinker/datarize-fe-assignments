import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../fetcher'
import { ICustomerListParams, ICustomerListResponse } from '../types'

const useCustomerList = (params?: ICustomerListParams) => {
  return useQuery({
    queryKey: ['customers', params?.name, params?.sortBy],
    queryFn: () => fetcher.get<ICustomerListResponse>(`/api/customers`, params),
  })
}

export default useCustomerList
