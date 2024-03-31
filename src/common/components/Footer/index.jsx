import styled from '@emotion/styled'

const FooterStyled = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.gaps.xl};
  color: ${(props) => props.theme.colors.white};
`

export const Footer = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>
}

export const ListInline = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`
export const ItemListInline = styled.li`
  display: inline-block;
`
