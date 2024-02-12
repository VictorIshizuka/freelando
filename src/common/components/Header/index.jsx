import styled from "@emotion/styled";

const IsHeader = styled.header`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.gaps.m};
`;

export const Header = ({ children }) => {
  return <IsHeader>{children}</IsHeader>;
};
