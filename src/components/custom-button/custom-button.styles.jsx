import styled, { css } from "styled-components";

const getButtonStyles = (props) => {
  if (props.inverted) {
    return InvertedCustomButton;
  }
  if (props.plus) {
    return PlusSignButton;
  }

  return buttonStyles;
};

const handleActive = (props) => {
  if (props.active) {
    return activeButton;
  }
};

export const activeButton = css`
  background: rgb(126, 85, 193);
  border: none;
  color: #fff;
  &:hover {
    border: none;
  }
`;

const buttonStyles = css`
  font-weight: 600;
  background: rgb(126, 85, 193);
`;

export const CustomButtonContainer = styled.button`
  color: #fff;
  margin: 0.5rem 0.4rem;
  border-radius: 70px;
  padding: 0.5rem 1.5rem;
  ${getButtonStyles}
`;

export const PlusSignButton = css`
  width: 30px;
  height: 30px;
  font-size: 24px;
  line-height: 5px;
  padding-bottom: 5px !important;
  background-color: none;
  border: solid 2px #955cf7;
  color: #955cf7;
  padding: 0;
  &:hover {
    background: rgb(126, 85, 193);
    border: solid 2px #955cf7;
    color: #fff;
  }
`;

export const InvertedCustomButton = css`
  background-color: #212123;
  border: solid 2px #414649;
  transition: all 0.3s;
  &:hover {
    background: rgb(126, 85, 193);
    border: solid 2px rgb(126, 85, 193);
  }
  ${handleActive}
`;
