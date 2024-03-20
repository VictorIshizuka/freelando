import styled from "@emotion/styled";

const ButtonPrimaryStyled = styled.button`
  background: ${(props) => props.theme.colors.primary.b};
  color: ${(props) => props.theme.colors.white};
  border: 2px solid;
  border-radius: ${(props) => props.theme.gaps.s};
  padding: ${(props) => props.theme.gaps.xs} ${(props) => props.theme.gaps.s};
  box-sizing: border-box;
  border-color: ${(props) => props.theme.colors.primary.b};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.dark.d};
  }
`;
const ButtonSecondaryStyled = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.primary.b};
  border: 2px solid ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.gaps.s};
  padding: ${(props) => props.theme.gaps.xs} ${(props) => props.theme.gaps.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.dark.b};
    color: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.focus};
  }
`;

export const Button = ({ children, variant = "primary" }) => {
  if (variant === "primary") {
    return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>;
  }
  return <ButtonSecondaryStyled>{children}</ButtonSecondaryStyled>;
};
