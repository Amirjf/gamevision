import styled, { css } from 'styled-components';

const getPlusStyles = (props) => {
  if (props.plus) {
    return PlusSignButton;
  }
};

const handleButtonSize = (props) => {
  switch (props.size) {
    case 'sm':
      return 'padding: 0.4rem 0.9rem;font-size:14px;';
    case 'md':
      return 'padding: 0.5rem 1.5rem';
    default:
      return 'padding: 0.5rem 1.5rem';
  }
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

export const CustomButtonContainer = styled.button`
  color: #fff;
  margin: 0.5rem 0.4rem;
  border-radius: 70px;
  border: ${(props) => (props.inverted ? 'solid 2px #414649;' : 'none')}
  transition: all 0.3s;
  font-weight: 500;
  &:hover {
    background: rgb(126, 85, 193);
    
  } 
  background: ${(props) => (props.inverted ? 'none' : 'rgb(126, 85, 193);')};
  ${handleActive}   
  ${getPlusStyles}   
  ${handleButtonSize}
`;

export const PlusSignButton = css`
  width: 30px;
  height: 30px;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
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
