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
      const activeFilters = filters.reduce(
        (acc, item) => ({ ...acc, ...item }),
        {}
      );
      const { data } = await GamesApi.get('', {
        params: { dates: activeFilters.year },
      });
      setIsLoading(false);
      dispatch(SetGamesAction(data.results));
    };
    getGames();
  }, [filters]);

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
