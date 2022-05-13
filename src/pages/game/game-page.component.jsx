import React from 'react';
import Badge from '../../components/badge/badge.component';
import CustomButton from '../../components/custom-button/custom-button.component';
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
      <div className="flex gap-8 relative">
        <div className="w-5/6">
          <GamePageHero tbodyData={tbodyData} />
          <div className="">
            <div className="flex justify-end">
              <div className="w-1/3"></div>
              <div className="p-4 w-1/3">
                <p className="text-white font-semibold">
                  What is the game about Far Cry 6 ?
                </p>
                <p className="text-shaded pt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt deserunt dicta doloremque nulla incidunt enim illum.
                  Expedita placeat
                </p>
                <div className="my-5">
                  <h1 className="text-5xl text-darkPurple font-semibold">
                    11.99$
                  </h1>
                </div>
                <CustomButton>
                  ORDER NOW
                  <i className="bx bx-basket pl-2"></i>
                </CustomButton>
              </div>
              <div className="flex justify-around items-center w-1/4">
                <div className="w-52">
                  <Table bg="#373739" tbodyData={tbodyData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-shaded">1/6</div>
      </div>
    </>
  );
};

export default GamePage;
