import styled from "@emotion/styled";
import { useState } from "react";

const LabelStyled = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.theme.gaps.xs};
  border-bottom-radius: ${props => (props.open ? "0" : "18px")};
  padding: ${props => props.theme.gaps.s};
  padding-x: -16px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.neutral.a};
  border-color: ${props => props.theme.colors.focus};
  border-radius: 18px;
  &:focus {
  }
  box-sizing: border-box;
  font-weight: 400;
  height: 40px;
  font-size: 18px;
  outline: none;
`;

export const DropDownListStyled = styled.ul`
  height: 120px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.white};
  z-index: 1;
  border: 1px solid ${props => props.theme.colors.neutral.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${props => props.theme.gaps.m};
  list-style: none;
`;

export const ItemDropDownListStyled = styled.li`
  padding: ${props => props.theme.gaps.xs} 0;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.colors.neutral.a};
  cursor: pointer;
  &:last-child {
    border: none;
  }
  color: ${props => (props.focusActive ? props.theme.colors.focus : "inherit")};
  &:hover {
    color: ${props => props.theme.colors.focus};
  }
`;

export const DropDown = ({ title, options, onChange, value }) => {
  const [open, changeVisible] = useState(false);
  const [isOptionFocus, setIsOptionFocus] = useState(null);

  const evetClickSelect = e => {
    changeVisible(true);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setIsOptionFocus(oldFocus => {
          if (oldFocus == null) {
            return 0;
          }
          if (oldFocus === options.length - 1) {
            return options.length - 1;
          }
          return (options += 1);
        });
        break;

      case "ArrowUp":
        e.preventDefault();
        setIsOptionFocus(oldFocus => {
          if (!oldFocus) {
            return 0;
          }
          return (oldFocus -= 1);
        });
        break;
      case "Enter":
        e.preventDefault();
        setIsOptionFocus(null);
        changeVisible(false);
        onChange(options[isOptionFocus]);
        break;
      case "Tab":
        setIsOptionFocus(null);
        changeVisible(false);
        break;
      case "Escape":
        e.preventDefault();
        setIsOptionFocus(null);
        changeVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <LabelStyled>
      {title}
      <ButtonStyled
        open={open}
        onClick={() => changeVisible(!open)}
        onKeyDown={evetClickSelect}
        type="button"
      >
        <div>{value ? value.text : "Selecione"}</div>
        <div>
          <span> {open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <DropDownListStyled>
            {options.map((item, index) => (
              <ItemDropDownListStyled
                key={item.value}
                focusActive={index === isOptionFocus}
                onClick={() => onChange(item)}
                //   value={item.value}
              >
                {item.text}
              </ItemDropDownListStyled>
            ))}
          </DropDownListStyled>
        )}
      </ButtonStyled>
    </LabelStyled>
  );
};
