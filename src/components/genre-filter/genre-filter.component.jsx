import React, { useState, useEffect } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetShopFilterAction } from '../../redux/games/getShopFilter';
import GamesApi from '../../http/axios';
import Spinner from '../spinner/spinner.component';
import FilterContainer from '../filter-container/filter-container.component';
const GenreFilter = () => {
  const dispatch = useDispatch();
  const [activeGenre, setActiveGenre] = useState('');
  const [genres, setGenres] = useState([]);

  const handleFilterGenre = (genre, id) => {
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
    <FilterContainer title="Genre">
      {genres ? (
        genres.map((genre) => (
          <CustomButton
            active={activeGenre === genre.name}
            onClick={() => handleFilterGenre(genre.name, genre.id)}
            size="sm"
            inverted
          >
            {genre.name}
          </CustomButton>
        ))
      ) : (
        <Spinner />
      )}
    </FilterContainer>
  );
};

export default GenreFilter;
