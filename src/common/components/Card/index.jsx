import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: ${props => (props.$chip ? props.theme.gaps.s : props.theme.gaps.l)};
  border: ${props => (props.$border ? "2px solid" : "")};
  border-color: ${props =>
    props.$borderColor
      ? (props.$borderColor === "green" && props.theme.colors.primary.c) ||
        (props.$borderColor === "gray" && props.theme.colors.neutral.a)
      : props.theme.colors.primary.a};
  color: ${props =>
    props.$colorText
      ? (props.$colorText === "green" && props.theme.colors.primary.c) ||
        (props.$colorText === "gray" && props.theme.colors.neutral.a)
      : props.theme.colors.primary.a};

  border-radius: ${props => props.theme.gaps.s};
  background: ${props =>
    props.$background
      ? (props.$background === "green" && props.theme.colors.secondary.c) ||
        (props.$background === "gray" && props.theme.colors.neutral.b)
      : props.theme.colors.secondary.a};
`;

export const Card = ({
  children,
  border,
  background,
  color,
  chip,
  borderColor,
}) => {
  return (
    <StyledDiv
      $border={border}
      $background={background}
      $colorText={color}
      $chip={chip}
      $borderColor={borderColor}
    >
      {children}
    </StyledDiv>
  );
};
