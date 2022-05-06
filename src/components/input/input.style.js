import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-block: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #eee;
  padding: 0 0 8px 2px;
`;

export const StyledInput = styled.input`
  border-radius: 4px;
  padding-top: 6px;
  padding-left: 5px;
  padding-bottom: 6px;
  color: #eee;
  background-color: #373e44;
  ::placeholder {
    opacity: 0.3;
  }
`;
