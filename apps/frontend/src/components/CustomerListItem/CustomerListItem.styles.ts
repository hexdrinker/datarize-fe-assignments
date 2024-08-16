import styled from '@emotion/styled'
import { Link as _Link } from 'react-router-dom'

const Item = styled.li`
  width: 100%;
`

const Link = styled(_Link)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  color: white;
  padding: 8px 0;
`

const Column = styled.div`
  width: 25%;
`

export default {
  Item,
  Link,
  Column,
}
