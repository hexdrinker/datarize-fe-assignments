import { PATH } from '../../constants/routes'
import Styled from './IndexPage.styles'

const IndexPage = () => {
  return (
    <Styled.Container>
      <Styled.Link to={PATH.PURCHASE_FREQUENCY}>구매 빈도 차트</Styled.Link>
      <Styled.Link to={PATH.CUSTOMER_LIST}>고객 리스트</Styled.Link>
    </Styled.Container>
  )
}

export default IndexPage
