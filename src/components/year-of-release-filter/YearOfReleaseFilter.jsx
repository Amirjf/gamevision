import React, { useState, useRef } from 'react';
import Checkbox from '../input/checkbox.component';
import Input from '../input/input.component';
import { useDispatch } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';

const YearOfReleaseFilter = () => {
  const [showFilter, setShowFilter] = useState(true);
  const dispatch = useDispatch();
  const toggle = () => setShowFilter(!showFilter);

  const handleChangeFilter = (e) => {
    dispatch(GetShopFilterAction(e.target.value));
  };

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
          <form>
            <Checkbox
              value="2022-01-01,2022-04-20"
              onChange={handleChangeFilter}
              label="2022"
            />
            <Checkbox
              value="2021-01-01,2021-12-20"
              onChange={handleChangeFilter}
              label="2021"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2020-01-01,2020-12-20"
              label="2020"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2019-01-01,2019-12-20"
              label="2019"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2018-01-01,2018-12-20"
              label="2018"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2017-01-01,2017-12-20"
              label="2017"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2016-01-01,2016-12-20"
              label="2016"
            />
            <Checkbox
              onChange={handleChangeFilter}
              value="2015-01-01,2015-12-20"
              label="2015"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default YearOfReleaseFilter;
