import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GamesApi from '../../http/axios';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import { SetGamesAction } from '../../redux/games/setGames';
import GameCardItem from '../game-card-item/game-card-item.component';
import Spinner from '../spinner/spinner.component';
const GamesGrid = () => {
  const games = useSelector((state) => state.games);
  const activeFilter = useSelector((state) => state.shopFilter);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getGames = async () => {
      const { data } = await GamesApi.get('', {
        params: { dates: activeFilter },
      });
      setIsLoading(false);
      dispatch(SetGamesAction(data.results));
    };
    getGames();
  }, [activeFilter]);

  console.log(activeFilter);

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
