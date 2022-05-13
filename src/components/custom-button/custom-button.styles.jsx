import styled, { css } from 'styled-components';

const handleBackgroundColor = (props) => {
  if (props.inverted) {
    return `background-color: none`;
  } else if (props.bg) {
    return `background-color: ${props.bg}`;
  } else {
    return `background-color:rgb(126, 85, 193)`;
  }
};

const handleButtonSize = (props) => {
  switch (props.size) {
    case 'sm':
      return css`
        padding: 0.4rem 0.9rem;
        font-size: 14px;
      `;
    case 'md':
      return css`
        padding: 0.5rem 1.5rem;
      `;
    default:
      return css`
        padding: 0.5rem 1.5rem;
      `;
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
  transition: all .5s;
  &:hover {
    background: rgb(126, 85, 193);
    
  } 
  /* background: ${(props) =>
    props.inverted ? 'none' : 'rgb(126, 85, 193);'}; */
 
    ${handleActive}   
    ${handleButtonSize}
    ${handleBackgroundColor}
`;
