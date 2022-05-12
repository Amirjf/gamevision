import React, { useState, useEffect } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';
const GenreFilter = () => {
  const { filters } = useSelector((state) => state.shopFilter);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(true);
  const [activeGenre, setActiveGenre] = useState('');

  const toggle = () => setShowFilter(!showFilter);

  const handleActiveGenre = (genre, id) => {
    dispatch(GetShopFilterAction({ genres: id }));
    setActiveGenre(genre);
  };

  useEffect(() => {
    const getGenre = filters.find(
      (filter) => Object.keys(filter)[0] === 'genre'
    );
  }, [filters]);

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
            active={activeGenre === 'rpg'}
            onClick={() => handleActiveGenre('rpg', 5)}
            size="sm"
            inverted
          >
            RPG
          </CustomButton>

          <CustomButton
            active={activeGenre === 'shooter'}
            onClick={() => handleActiveGenre('shooter', 2)}
            size="sm"
            inverted
          >
            Shooter
          </CustomButton>

          <CustomButton
            active={activeGenre === 'racing'}
            onClick={() => handleActiveGenre('racing', 1)}
            size="sm"
            inverted
          >
            Racing
          </CustomButton>

          <CustomButton
            active={activeGenre === 'adventure'}
            onClick={() => handleActiveGenre('adventure', 3)}
            size="sm"
            inverted
          >
            Adventure
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
