import { ICustomerPurchaseItem } from '../../types'
import Styled from './CustomerPurchaseListItem.styles'

interface CustomerPurchaseListItemParams extends ICustomerPurchaseItem {}

const CustomerPurchaseListItem = ({ date, quantity, product, price, imgSrc }: CustomerPurchaseListItemParams) => {
  return (
    <Styled.Item>
      <Styled.Image src={imgSrc} alt={`${product} 이미지`} />
      <Styled.PurchaseInfo>
        <Styled.Date>{date}</Styled.Date>
        <Styled.ProductName>{product}</Styled.ProductName>
        <Styled.Quantity>{quantity}개</Styled.Quantity>
        <Styled.Price>{price.toLocaleString()}원</Styled.Price>
      </Styled.PurchaseInfo>
    </Styled.Item>
  )
}

export default CustomerPurchaseListItem
