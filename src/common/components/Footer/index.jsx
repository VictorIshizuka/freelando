import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.gaps.xl};
  color: ${(props) => props.theme.colors.white};
`;

export const Footer = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>;
};
