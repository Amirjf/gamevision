import React, { useState } from 'react';
import Checkbox from '../input/checkbox.component';
import Input from '../input/input.component';

const YearOfReleaseFilter = () => {
  const [showFilter, setShowFilter] = useState(true);
  const toggle = () => setShowFilter(!showFilter);

  return (
    <div className="border-b border-b-shaded py-4 mt-2">
      <div className="flex justify-between">
        <span className="text-white">Year of Release</span>
        <span className="text-shaded text-lg cursor-pointer" onClick={toggle}>
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      {showFilter && (
        <div className="p-3 h-40 overflow-hidden overflow-y-auto">
          <Checkbox label="2022" />
          <Checkbox label="2021" />
          <Checkbox label="2020" />
          <Checkbox label="2019" />
          <Checkbox label="2018" />
          <Checkbox label="2017" />
          <Checkbox label="2016" />
          <Checkbox label="2015" />
        </div>
      )}
    </div>
  );
};

export default YearOfReleaseFilter;
