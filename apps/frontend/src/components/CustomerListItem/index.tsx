import { ICustomerListItem } from '../../types'
import Styled from './CustomerListItem.styles'

interface CustomerListItemProps extends ICustomerListItem {}

const CustomerListItem = ({ id, name, count, totalAmount }: CustomerListItemProps) => {
  return (
    <Styled.Item>
      <Styled.Link to={`/customers/${id}`}>
        <Styled.Id>{id}</Styled.Id>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Count>{count}</Styled.Count>
        <Styled.TotalAmount>{totalAmount.toLocaleString()} 원</Styled.TotalAmount>
      </Styled.Link>
    </Styled.Item>
  )
}

export default CustomerListItem
