import styled from '@emotion/styled'

const Container = styled.main`
  width: 1280px;
  margin: 0 auto;
  text-align: center;
`

const List = styled.ul`
  width: 100%;
`

const ListHeader = styled.div`
  width: 100%;
  display: flex;
`

const ListHeaderItem = styled.div`
  width: 25%;
  border: 1px solid transparent;
`

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RefreshButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 20px;
`

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchInput = styled.input`
  padding: 0.6em 1.2em;
`

const SearchButton = styled.button``

const AscButton = styled.button`
  margin: 0 2px;
`

const DescButton = styled.button`
  margin: 0 2px;
`

export default {
  Container,
  List,
  ListHeader,
  ListHeaderItem,
  Wrapper,
  RefreshButton,
  FilterWrapper,
  SearchInput,
  SearchButton,
  AscButton,
  DescButton,
}
