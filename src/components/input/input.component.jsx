import React from 'react';
import { InputContainer, Label, StyledInput } from './input.style';

const Input = ({ label = '', placeholder = '', type, ...props }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput type={type} placeholder={placeholder} {...props} />
    </InputContainer>
  );
};

export default Input;
