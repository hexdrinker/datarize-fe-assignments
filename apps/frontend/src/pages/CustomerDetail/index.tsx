import { useParams } from 'react-router-dom'
import { useCustomerPurchases } from '../../queries'

import CustomerPurchaseListItem from '../../components/CustomerPurchaseListItem'

import Global from '../../global.styles'
import Styled from './CustomerDetailPage.styles'
import ErrorView from '../../components/ErrorView'

const CustomerDetailPage = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { data: purchases, isLoading, error, refetch } = useCustomerPurchases(id)

  const refresh = () => {
    refetch()
  }

  return (
    <Styled.Container>
      {error && <ErrorView onRefresh={refresh} />}
      {isLoading && <Global.LoadingSpinner />}
      {purchases && (
        <Styled.List>
          {purchases.map((purchase, index) => (
            <CustomerPurchaseListItem key={index} {...purchase} />
          ))}
        </Styled.List>
      )}
    </Styled.Container>
  )
}

export default CustomerDetailPage
