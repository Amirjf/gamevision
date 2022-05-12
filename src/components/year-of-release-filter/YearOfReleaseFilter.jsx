import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';
import Radio from '../input/radio.component';
import useToggle from '../../hooks/useToggle';

const YearOfReleaseFilter = () => {
  const [showFilter, setShowFilter] = useToggle();
  const [selected, setSelected] = useState('2022-01-01,2022-04-20');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetShopFilterAction({ dates: selected }));
  }, [selected]);

  return (
    <div className="border-b border-b-shaded py-3 mt-2">
      <div className="flex justify-between">
        <span className="text-white">Year of Release</span>
        <span
          className="text-shaded text-lg cursor-pointer"
          onClick={setShowFilter}
        >
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      <div
        className={`${
          showFilter ? 'h-40' : 'h-0 opacity-0'
        } transition-all duration-500 overflow-hidden overflow-y-auto`}
      >
        <Radio
          value="2022-01-01,2022-04-20"
          selected={selected}
          onCheck={setSelected}
          label="2022"
          text="2022"
        />
        <Radio
          value="2021-01-01,2021-12-20"
          selected={selected}
          onCheck={setSelected}
          label="2021"
          text="2021"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2020-01-01,2020-12-20"
          label="2020"
          text="2020"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2019-01-01,2019-12-20"
          label="2019"
          text="2019"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2018-01-01,2018-12-20"
          label="2018"
          text="2018"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2017-01-01,2017-12-20"
          label="2017"
          text="2017"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2016-01-01,2016-12-20"
          label="2016"
          text="2016"
        />
        <Radio
          selected={selected}
          onCheck={setSelected}
          value="2015-01-01,2015-12-20"
          label="2015"
          text="2015"
        />
      </div>
    </div>
  );
};

export default YearOfReleaseFilter;
