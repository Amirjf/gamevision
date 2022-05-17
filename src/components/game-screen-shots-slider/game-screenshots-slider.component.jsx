import React, { useState, useEffect } from 'react';
import GamesApi from '../../http/axios';
import Spinner from '../spinner/spinner.component';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const GameScreenShotSlider = ({ gameId }) => {
  const [screenShots, setScreenShots] = useState();
  const getGameScreenShots = async () => {
    const { data } = await GamesApi.get(`/games/${gameId}/screenshots`);
    setScreenShots(data.results);
  };

  useEffect(() => {
    getGameScreenShots();
  }, []);

  return (
    <div className="flex w-1/3 md:w-1/6 lg:md:w-1/6">
      <div className=" lg:w-full md:w-full flex order-1 md:flex-col lg:flex-col gap-5 overflow-hidden overflow-x-auto md:overflow-hidden lg:overflow-hidden md:overflow-y-auto lg:overflow-y-auto">
        <Gallery>
          {screenShots ? (
            screenShots.map(({ image }) => (
              <Item
                key={image.id}
                original={image}
                thumbnail={image}
                width="1920"
                height="1080"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    className="cursor-pointer object-cover rounded-2xl shadow-sm shadow-darkGrey"
                    src={image}
                    alt="gameScreenshot"
                  />
                )}
              </Item>
            ))
          ) : (
            <Spinner />
          )}
        </Gallery>
      </div>
    </div>
  );
};

export default GameScreenShotSlider;
