import styled from "@emotion/styled";

const IsHeader = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.primary.a};
  padding: ${props => props.theme.gaps.m};
  color: ${props => props.theme.colors.white};
`;

export const Header = ({ children }) => {
  return <IsHeader>{children}</IsHeader>;
};
