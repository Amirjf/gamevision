import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GamesApi from '../../http/axios';

import { SetGamesAction } from '../../redux/games/setGames';
import GameCardItem from '../game-card-item/game-card-item.component';
import Spinner from '../spinner/spinner.component';
const GamesGrid = () => {
  const games = useSelector((state) => state.games);
  const { filters } = useSelector((state) => state.shopFilter);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getGames = async () => {
      const activeFilters = filters.reduce((acc, item) => {
        return { ...acc, ...item, genres: item.genres && item.genres.id };
      }, {});
      const { data } = await GamesApi.get('', {
        params: {
          ...activeFilters,
        },
      });
      setIsLoading(false);
      dispatch(SetGamesAction(data.results));
    };
    getGames();
  }, [filters]);

  useEffect(() => {
    setIsLoading(true);
  }, [filters]);

  console.log(isLoading);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {games.map((game) => (
        <GameCardItem game={game} />
      ))}
    </>
  );
};

export default GamesGrid;
