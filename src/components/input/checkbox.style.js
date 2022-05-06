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
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + .checkbox {
    display: inline-block;

    width: 22px;
    height: 22px;
    background-color: #373e44;
    cursor: pointer;
  }
  input[type='checkbox']:checked + .checkbox {
    border: 7px solid #373e44;
    background: #eee -19px top no-repeat;
  }

  input[type='checkbox'] + .checkbox {
    margin-right: 4px;
  }
`;
