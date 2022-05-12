import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GamesApi from '../../http/axios';
import { SetGamesAction } from '../../redux/games/setGames';
import GameCardItem from '../game-card-item/game-card-item.component';
import CustomPagination from '../pagination/pagination.component';
import Spinner from '../spinner/spinner.component';

const GamesGrid = () => {
  const games = useSelector((state) => state.games);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const { filters } = useSelector((state) => state.shopFilter);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getGames = async () => {
    const activeFilters = filters.reduce((acc, item) => {
      return { ...acc, ...item };
    }, {});
    const { data } = await GamesApi.get('/games', {
      params: {
        ...activeFilters,
        page: currentPage,
      },
    });

    setIsLoading(false);
    dispatch(SetGamesAction(data.results));
    setTotalCount(data.count);
  };

  useEffect(() => {
    getGames();
    setIsLoading(true);
  }, [filters, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {games.map((game) => (
        <GameCardItem game={game} />
      ))}
      <CustomPagination
        className="text-white"
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default GamesGrid;
