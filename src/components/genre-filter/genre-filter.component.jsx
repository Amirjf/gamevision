import React, { useState, useEffect } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';
import useToggle from '../../hooks/useToggle';
import GamesApi from '../../http/axios';
import Spinner from '../spinner/spinner.component';
const GenreFilter = () => {
  const { filters } = useSelector((state) => state.shopFilter);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useToggle();
  const [activeGenre, setActiveGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const handleActiveGenre = (genre, id) => {
    dispatch(GetShopFilterAction({ genres: id }));
    setActiveGenre(genre);
  };

  const getGenres = async () => {
    const { data } = await GamesApi.get('/genres');
    setGenres(data.results);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className="border-b border-b-shaded pb-2 mt-2">
      <div
        onClick={setShowFilter}
        className="flex justify-between cursor-pointer"
      >
        <span className="text-white pb-4">Genre</span>
        <span className="text-shaded text-lg cursor-pointer">
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      <div
        className={`${
          showFilter ? 'h-40' : 'h-0 opacity-0'
        } transition-all duration-500 overflow-hidden overflow-y-auto`}
      >
        {genres ? (
          genres.map((genre) => (
            <CustomButton
              active={activeGenre === genre.name}
              onClick={() => handleActiveGenre(genre.name, genre.id)}
              size="sm"
              inverted
            >
              {genre.name}
            </CustomButton>
          ))
        ) : (
          <Spinner />
        )}
        {/* 
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
        </CustomButton> */}
      </div>
    </div>
  );
};

export default GenreFilter;
