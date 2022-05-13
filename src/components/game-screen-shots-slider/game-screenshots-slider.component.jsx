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
    <div className="w-1/6 flex flex-col gap-5 overflow-hidden overflow-y-auto">
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
                  className="object-cover rounded-2xl shadow-sm shadow-darkGrey"
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
  );
};

export default GameScreenShotSlider;
