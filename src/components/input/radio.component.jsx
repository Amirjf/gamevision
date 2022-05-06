import React from 'react';
import { RadioContainer, OuterCircle, InnerCircle, Label } from './radio.style';

const Radio = ({ selected, onCheck, text, value }) => {
  return (
    <RadioContainer
      className="modern-radio-container"
      onClick={() => {
        onCheck(value);
      }}
    >
      <OuterCircle
        className={`radio-outer-circle ${value !== selected && 'unselected'}`}
      >
        <InnerCircle
          className={`radio-inner-circle ${
            value !== selected && 'unselected-circle'
          }`}
        />
      </OuterCircle>
      <Label className="helper-text">{text}</Label>
    </RadioContainer>
  );
};

export default Radio;
