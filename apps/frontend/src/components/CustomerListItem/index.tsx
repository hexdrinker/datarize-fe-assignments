import { ICustomerListItem } from '../../types'
import Styled from './CustomerListItem.styles'

interface CustomerListItemProps extends ICustomerListItem {}

const CustomerListItem = ({ id, name, count, totalAmount }: CustomerListItemProps) => {
  return (
    <Styled.Item>
      <Styled.Link to={`/customers/${id}`}>
        <Styled.Column>{id}</Styled.Column>
        <Styled.Column>{name}</Styled.Column>
        <Styled.Column>{count}</Styled.Column>
        <Styled.Column>{totalAmount.toLocaleString()}원</Styled.Column>
      </Styled.Link>
    </Styled.Item>
  )
}

export default CustomerListItem
