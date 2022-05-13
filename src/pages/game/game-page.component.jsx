import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GamePageBody from '../../components/game-page-body/game-page-body.component';
import GamePageHero from '../../components/game-page-hero/game-page-hero.component';
import GameScreenShotSlider from '../../components/game-screen-shots-slider/game-screenshots-slider.component';
import Header from '../../components/header/header.component';
import SideNav from '../../components/sidebar/sidenav.component';
import Spinner from '../../components/spinner/spinner.component';
import GamesApi from '../../http/axios';

const GamePage = () => {
  const params = useParams();
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameInfoForHeader, setGameInfoForHeader] = useState([]);
  const [gameInfoForBody, setGameInfoForBody] = useState([]);

  const getGame = async () => {
    const res = await GamesApi.get(`/games/${params.gameId}`);
    setLoading(false);
    setGameData(res.data);
    console.log(res);
    const {
      genres,
      metacritic,
      platforms,
      developers,
      released,
      publishers,
      rating,
    } = res.data;

    const GameInfoForHeader = [
      {
        id: 1,
        items: ['Genre', genres[0].name],
      },
      {
        id: 2,
        items: ['Producer', developers[0].name],
      },
      {
        id: 3,
        items: ['Platforms', platforms[0].platform.name],
      },

      {
        id: 4,
        items: ['Age', '+18'],
      },
      {
        id: 5,
        items: ['Language', 'English'],
      },
    ];

    const GameInfoForBody = [
      {
        id: 1,
        items: ['Publisher', publishers[0].name],
      },
      {
        id: 2,
        items: ['Developer', developers[0].name],
      },
      {
        id: 3,
        items: ['Release Data', released],
      },
      {
        id: 4,
        items: ['metacritic', metacritic],
      },
      {
        id: 5,
        items: ['rating', rating.toString()],
      },
    ];

    setGameInfoForBody(GameInfoForBody);
    setGameInfoForHeader(GameInfoForHeader);
  };

  useEffect(() => {
    getGame();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Header />
      <SideNav />
      <div className="flex gap-8 relative h-[550px]">
        <div className="w-5/6">
          <GamePageHero gameData={gameData} tbodyData={gameInfoForHeader} />

          <GamePageBody gameData={gameData} tbodyData={gameInfoForBody} />
        </div>
        <GameScreenShotSlider gameId={params.gameId} />
      </div>
    </>
  );
};

export default GamePage;
