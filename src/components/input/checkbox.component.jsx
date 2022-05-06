import React, { useState } from 'react';
import {
  StyledCheckbox,
  CheckboxContainer,
  CheckboxLabel,
} from './checkbox.style';

const Checkbox = ({ label = '', value, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);
  return (
    <CheckboxContainer>
      <StyledCheckbox onClick={toggleCheck}>
        <input
          type="checkbox"
          value={value}
          checked={isChecked}
          id="checkbox"
          {...props}
        />
        <span className="checkbox"></span>
      </StyledCheckbox>

      <CheckboxLabel htmlFor="checkbox" className="">
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
