import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';
const GenreFilter = () => {
  let query = useQuery();
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(true);
  const [genre, setGenre] = useState('');

  const toggle = () => setShowFilter(!showFilter);

  const handleActiveGenre = (genre) => {
    dispatch(GetShopFilterAction({ genre: genre }));
  };

  return (
    <div className="border-b border-b-shaded pb-2 mt-2">
      <div className="flex justify-between">
        <span className="text-white">Genre</span>
        <span className="text-shaded text-lg cursor-pointer" onClick={toggle}>
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      {showFilter && (
        <div>
          <CustomButton
            onClick={() => handleActiveGenre('rpg')}
            size="sm"
            inverted
          >
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
