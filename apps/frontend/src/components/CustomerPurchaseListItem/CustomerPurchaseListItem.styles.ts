import styled from '@emotion/styled'

const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 0;

  & + & {
    border-top: 1px solid #ccc;
  }
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 4px;
`

const PurchaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 8px;
`

const ProductName = styled.strong`
  font-size: 24px;
`

const Quantity = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-bottom: 4px;
`

const Price = styled.strong`
  font-size: 16px;
`

const Date = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 8px;
`

export default {
  Item,
  Image,
  PurchaseInfo,
  ProductName,
  Quantity,
  Price,
  Date,
}
