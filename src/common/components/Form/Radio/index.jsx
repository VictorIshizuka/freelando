import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: ${props => props.theme.gaps.xs};
  cursor: pointer;
  padding: ${props => props.theme.gaps.xs};
  &:hover {
    &:before {
      border-color: ${props => props.theme.colors.focus};
    }
  }
  &:before {
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.neutral.a};
    border-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${props =>
      props.checked
        ? props.theme.colors.primary.b
        : props.theme.colors.neutral.c};
    border-color: ${props =>
      props.checked ? props.theme.colors.primary.b : "inherit"};
  }
`;

const InputHidden = styled.input`
  appearance: none;
  opacity: 0;
  &:focus + label {
    border-radius: 16px;
    border: 1px solid;
    border-color: ${props => props.theme.colors.focus};
  }
`;

const Radio = ({ value, label, checked, onChange }) => {
  return (
    <div style={{ margin: "-10px" }}>
      <InputHidden
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        id={`radio-customizado-${value}`}
      />
      <LabelStyled htmlFor={`radio-customizado-${value}`} checked={checked}>
        {label}
      </LabelStyled>
    </div>
  );
};

export default Radio;
