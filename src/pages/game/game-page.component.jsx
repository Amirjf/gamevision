import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
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
      <div className="flex gap-8">
        <div className="w-5/6 bg-purple z-10 rounded-sm">
          <div className="flex justify-end">
            <div className="w-1/3"></div>
            <div className="p-4 w-1/3">
              <span className="bg-[#734bac] text-white py-1 px-3 text-xs rounded-3xl">
                Shooter
              </span>
              <h1 className="text-white font-bold text-6xl my-3">FARCRY 6</h1>
              <div>Rating Stars</div>
              <div className="my-5">
                <CustomButton bg="#8e68cb">New Game</CustomButton>
                <CustomButton bg="#8e68cb">New Game</CustomButton>
              </div>
            </div>
            <div className="flex justify-around items-center w-1/4">
              <div className="w-52">
                <Table tbodyData={tbodyData} />
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
