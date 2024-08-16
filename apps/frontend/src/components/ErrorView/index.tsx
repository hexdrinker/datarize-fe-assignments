import Styled from './ErrorView.styles'
import { MdError } from 'react-icons/md'

const ErrorView = ({ onRefresh, message }: { onRefresh: () => void; message?: string }) => {
  return (
    <Styled.Wrapper>
      <MdError color={'#ff3333'} />
      에러가 발생했습니다.
      <br />
      {message}
      <Styled.RefreshButton onClick={onRefresh}>새로고침</Styled.RefreshButton>
    </Styled.Wrapper>
  )
}

export default ErrorView
