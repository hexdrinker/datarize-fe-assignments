import styled from '@emotion/styled'
import { Link as _Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  width: 100%;
  hight: 100%;
  align-items: center;
  justify-content: center;
`

const Link = styled(_Link)`
  margin: 8xp;
  padding: 8px;
`

export default {
  Container,
  Link,
}
