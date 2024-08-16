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

export interface ICustomerPurchaseItem {
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

export type ICustomerPurchasesResponse = ICustomerPurchaseItem[]

export interface IPurchaseFrequencyParams {
  from?: string
  to?: string
}

export interface IPurchaseFrequencyListItem {
  range: string
  count: number
}

export type IPurchaseFrequencyResponse = IPurchaseFrequencyListItem[]
