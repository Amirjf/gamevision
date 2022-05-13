import React from 'react';
import Badge from '../badge/badge.component';
import CustomButton from '../custom-button/custom-button.component';
import Table from '../table/table.component';

const GamePageHero = ({ tbodyData }) => {
  return (
    <div className="bg-purple z-10 rounded-sm">
      <div className="flex justify-end">
        <div className="w-1/3">
          <div>
            <img
              className="absolute top-4 w-[26rem] h-[34rem] object-cover rounded-lg shadow-xl shadow-darkGrey"
              src="https://media.rawg.io/media/games/faa/faa6a4a7a2e57faf2960329630aee211.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="p-4 w-1/3">
          <Badge bg="#734bac">Shooter</Badge>
          <h1 className="text-white font-bold text-6xl my-3">FARCRY 6</h1>
          <div>Rating Stars</div>
          <div className="flex gap-3 my-5">
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
  );
};

export default GamePageHero;
