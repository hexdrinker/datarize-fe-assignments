export const SORTBY = ['', 'asc', 'desc'] as const
export type SortByType = (typeof SORTBY)[number]

export interface ICustomerListItem {
  id: number
  name: string
  count: number
  totalAmount: number
}

export type ICustomerListResponse = ICustomerListItem[]

export interface ICustomerListParams {
  name?: string
  sortBy?: '' | 'asc' | 'desc'
}
