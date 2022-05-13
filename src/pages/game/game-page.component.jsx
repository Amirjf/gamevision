import React from 'react';
import Badge from '../../components/badge/badge.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import GamePageBody from '../../components/game-page-body/game-page-body.component';
import GamePageHero from '../../components/game-page-hero/game-page-hero.component';
import Header from '../../components/header/header.component';
import SideNav from '../../components/sidebar/sidenav.component';
import Table from '../../components/table/table.component';

const GamePage = () => {
  const tbodyData = [
    {
      id: '1',
      items: ['Platform', 'xbox'],
    },
    {
      id: '2',
      items: ['producer', 'ubisoft'],
    },
    {
      id: '3',
      items: ['Age', '+18'],
    },
    {
      id: '4',
      items: ['Genre', 'Shooter'],
    },
    {
      id: '5',
      items: ['Language', 'English'],
    },
  ];
  return (
    <>
      <Header />
      <SideNav />
      <div className="flex gap-8 relative h-[550px]">
        <div className="w-5/6">
          <GamePageHero tbodyData={tbodyData} />

          <GamePageBody tbodyData={tbodyData} />
        </div>

        <div className="w-1/6 flex flex-col gap-5 overflow-hidden overflow-y-auto">
          <div className="">
            <img
              className="object-cover rounded-2xl "
              src="https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
              alt="salam"
            />
          </div>
          <div className="">
            <img
              className="object-cover rounded-2xl "
              src="https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
              alt="salam"
            />
          </div>
          <div className="">
            <img
              className="object-cover rounded-2xl "
              src="https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
              alt="salam"
            />
          </div>
          <div className="">
            <img
              className="object-cover rounded-2xl "
              src="https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
              alt="salam"
            />
          </div>
          <div className="">
            <img
              className="object-cover rounded-2xl "
              src="https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
              alt="salam"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
