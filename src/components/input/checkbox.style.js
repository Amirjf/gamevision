import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  margin-block: 6px;
`;

export const CheckboxLabel = styled.label`
  color: #eee;
  padding-left: 6px;
`;

export const StyledCheckbox = styled.span`
  position: relative;

  input[type='radio'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    right: 0;
    height: 22px;
    width: 22px;
  }
  input[type='radio'] + .checkbox {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: #373e44;
    cursor: pointer;
  }
  input[type='radio']:checked + .checkbox {
    border: 7px solid #373e44;
    background: #eee -19px top no-repeat;
  }

  input[type='radio'] + .checkbox {
    margin-right: 4px;
  }
`;
