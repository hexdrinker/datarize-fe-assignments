import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PiSortAscendingBold, PiSortDescendingBold } from 'react-icons/pi'

import { useCustomerList } from '../../queries'
import { ICustomerListParams, SORTBY, SortByType } from '../../types'
import { PATH } from '../../constants/routes'

import CustomerListItem from '../../components/CustomerListItem'
import Styled from './CustomerListPage.styles'

const listHeaderItemsLabel = ['ID', '이름', '총 구매 횟수', '총 구매 금액']

const CustomerListPage = () => {
  const [searchParams] = useSearchParams()
  const sortBy = searchParams.get('sortBy')
  const name = searchParams.get('name')
  const [params, setParams] = useState<ICustomerListParams>({
    sortBy: '',
    name: '',
  })
  const navigate = useNavigate()
  const { data: customers, isLoading, error, refetch } = useCustomerList(params)
  const [customerName, setCustomerName] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setParams({
      ...params,
      name: customerName,
    })
    navigate(`${PATH.CUSTOMER_LIST}?sortBy=${params.sortBy}&name=${customerName}`)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.currentTarget.value)
  }

  const refresh = () => {
    refetch()
  }

  const sortingList = (sortBy: 'asc' | 'desc') => {
    setParams({
      ...params,
      sortBy,
    })
    navigate(`${PATH.CUSTOMER_LIST}?sortBy=${sortBy}&name=${params.name}`)
  }

  const isSortBy = (sortBy: string | null): sortBy is SortByType => {
    return typeof sortBy === 'string' && SORTBY.includes(sortBy as SortByType)
  }

  useEffect(() => {
    setParams({
      name: name ?? '',
      sortBy: isSortBy(sortBy) ? sortBy : '',
    })
  }, [sortBy, name])

  return (
    <Styled.Container>
      {error ? (
        <Styled.Wrapper>
          에러가 발생했습니다.
          <Styled.RefreshButton onClick={refresh}>새로고침</Styled.RefreshButton>
        </Styled.Wrapper>
      ) : (
        <>
          {!isLoading && (
            <Styled.FilterWrapper>
              <form onSubmit={onSubmit}>
                <Styled.SearchInput type="text" value={customerName} placeholder="고객명" onChange={onChange} />
                <Styled.SearchButton>검색</Styled.SearchButton>
              </form>
              <div>
                <Styled.AscButton onClick={() => sortingList('asc')}>
                  <PiSortAscendingBold />
                </Styled.AscButton>
                <Styled.DescButton onClick={() => sortingList('desc')}>
                  <PiSortDescendingBold />
                </Styled.DescButton>
              </div>
            </Styled.FilterWrapper>
          )}
          <Styled.ListHeader>
            {listHeaderItemsLabel.map((label) => (
              <Styled.ListHeaderItem key={label}>{label}</Styled.ListHeaderItem>
            ))}
          </Styled.ListHeader>
          {isLoading && (
            <Styled.Wrapper>
              <Styled.LoadingSpinner />
            </Styled.Wrapper>
          )}
          {customers && (
            <Styled.List>
              {customers.map((customer) => (
                <CustomerListItem key={customer.id} {...customer} />
              ))}
            </Styled.List>
          )}
        </>
      )}
    </Styled.Container>
  )
}

export default CustomerListPage
