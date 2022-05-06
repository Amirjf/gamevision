import React, { useState } from 'react';
import {
  StyledCheckbox,
  CheckboxContainer,
  CheckboxLabel,
} from './checkbox.style';

const Checkbox = ({ label = '', value, name, checked = false, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheck = () => setIsChecked(!isChecked);
  return (
    <CheckboxContainer>
      <StyledCheckbox onClick={toggleCheck}>
        <input
          type="radio"
          name={name}
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
