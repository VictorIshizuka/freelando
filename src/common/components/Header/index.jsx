import styled from "@emotion/styled";

const IsHeader = styled.header`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.gaps.l};
  color: ${(props) => props.theme.colors.white};
`;

export const Header = ({ children }) => {
  return <IsHeader>{children}</IsHeader>;
};
