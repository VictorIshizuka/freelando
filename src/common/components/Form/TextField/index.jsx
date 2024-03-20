import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
const InputStyled = styled.input`
  display: block;
  width: 100%;
  margin-top: ${(props) => props.theme.gaps.xs};
  margin-bottom: ${(props) => props.theme.gaps.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.neutral.a};
  border-radius: ${(props) => props.theme.gaps.s};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const TextField = ({ title }) => {
  return (
    <LabelStyled>
      {title}
      <InputStyled />
    </LabelStyled>
  );
};
