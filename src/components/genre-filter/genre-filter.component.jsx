import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
const GenreFilter = () => {
  const [showFilter, setShowFilter] = useState(true);
  const toggle = () => setShowFilter(!showFilter);
  return (
    <div className="border-b border-b-shaded pb-2">
      <div className="flex justify-between">
        <span className="text-white">Genre</span>
        <span className="text-shaded text-lg cursor-pointer" onClick={toggle}>
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      {showFilter && (
        <div>
          <CustomButton size="sm" inverted>
            RPG
          </CustomButton>
          <CustomButton size="sm" inverted>
            Shooter
          </CustomButton>
          <CustomButton size="sm" inverted>
            Action
          </CustomButton>
          <CustomButton size="sm" inverted>
            Sport
          </CustomButton>
          <CustomButton size="sm" inverted>
            Adventure
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
