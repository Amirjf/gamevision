import React from 'react';
import Badge from '../badge/badge.component';
import CustomButton from '../custom-button/custom-button.component';
import Table from '../table/table.component';

const GamePageHero = ({ tbodyData, gameData }) => {
  const { background_image, name, tags, genres } = gameData;
  console.log('genres', genres);
  return (
    <div className="bg-purple z-10 rounded-sm">
      <div className="flex">
        <div className="w-1/3 mx-auto">
          <div>
            <img
              className="absolute top-4 left-9 w-[26rem] h-[34rem] object-cover rounded-lg shadow-xl shadow-darkGrey"
              src={background_image}
              alt=""
            />
          </div>
        </div>
        <div className="p-4 w-1/3 ml-auto">
          {genres &&
            genres.map((genre) => <Badge bg="#734bac">{genre.name}</Badge>)}

          <h1 className="text-white font-bold text-6xl my-3 leading-[4.2rem]">
            {name}
          </h1>
          <div>Rating Stars</div>
          <div className="flex gap-3 my-5">
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
