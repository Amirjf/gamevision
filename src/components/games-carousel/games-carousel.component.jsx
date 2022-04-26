import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { db } from '../../firebase/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import CustomButton from '../custom-button/custom-button.component';
import useSwiperRef from '../swiper-ref/use-swiper-ref';
import { useSelector, useDispatch } from 'react-redux';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import { SetGamesAction } from '../../redux/games/setGames';
import SectionHeader from '../section-header/section-header.component';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import axios from 'axios';

const GamesCarousel = () => {
  const games = useSelector((state) => state.games);

  const [activeFilter, setActiveFilter] = useState('popular');

  const dispatch = useDispatch();

  //handling swiper with custom buttons
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  const handleSubmit = (e) => {
    setActiveFilter(e.target.value);
    switch (activeFilter) {
      case 'popular':
        const filteredGames = games
          .filter((game) => game.added_by_status.owned > 900)
          .map((game) => game);
        return dispatch(SetGamesAction(filteredGames));
      case 'rating':
        const ratingGames = games
          .filter((game) => game.rating > 4)
          .map((game) => game);
        return dispatch(SetGamesAction(ratingGames));
      default:
        return;
    }
  };

  useEffect(() => {
    if (activeFilter !== 'popular') {
      return;
    }
    // const getGames = async () => {
    //   const gamesRef = collection(db, 'games');
    //   const { docs } = await getDocs(gamesRef);
    //   dispatch(SetGamesAction(docs.map((doc) => ({ ...doc.data() }))));
    // };
    // getGames();
    axios
      .get(
        'https://api.rawg.io/api/games?key=3dbe5baa7df44f92a7e6d3bdd8c28888&dates=2021-01-01,2022-12-31&ordering=-added'
      )
      .then((res) => dispatch(SetGamesAction(res.data.results)));
  }, [activeFilter]);
  return (
    <>
      <SectionHeader title="Best of Games" categoryTitle="Games">
        <CustomButton
          active={activeFilter === 'popular'}
          value="popular"
          onClick={handleSubmit}
          inverted
        >
          Most Popular
        </CustomButton>
        <CustomButton
          active={activeFilter === 'latest'}
          value="latest"
          onClick={handleSubmit}
          inverted
        >
          Latest games
        </CustomButton>
        <CustomButton
          active={activeFilter === 'rating'}
          value="rating"
          inverted
          onClick={handleSubmit}
        >
          Top Rating
        </CustomButton>
        <CustomButton
          active={activeFilter === 'action'}
          value="action"
          inverted
          onClick={handleSubmit}
        >
          Best of action games
        </CustomButton>
      </SectionHeader>

      <div className="swiper-navs flex justify-end mb-3">
        <div
          className="hover:bg-purple w-9 h-9 flex items-center justify-center text-center mx-2 border-2 rounded-full border-purple"
          ref={prevElRef}
        >
          <span className="flex">
            <i className="bx bx-left-arrow-alt text-base text-white"></i>
          </span>
        </div>
        <div
          ref={nextElRef}
          className="hover:bg-purple w-9 h-9 flex items-center justify-center text-center border-2 rounded-full border-purple"
        >
          <span className="flex">
            <i className="bx bx-right-arrow-alt text-base text-white"></i>
          </span>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 5, spaceBetween: 15 },
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.added}>
            <div className="group game-container">
              <div className="image-container relative shadow-md">
                <img
                  className="transition z-0 w-full h-72 object-cover rounded-lg border-2 border-[#212123] ease-linear duration-300 group-hover:border-2 group-hover:border-[#86858b]"
                  src={game.background_image}
                  lazy
                />
                <span className="transition ease-linear duration-300 game-price py-1 px-3 rounded-xl absolute z-10 top-4 left-4 bg-[#171b1c] group-hover:bg-purple text-white font-sans text-xs ">
                  59.99 $
                </span>
              </div>
              <div className="game-info flex justify-between p-1 pt-2">
                <div className="info">
                  <h3 className="text-white font-semibold">{game.name}</h3>
                  <span className="text-shaded">PC</span>
                </div>
                <div className="game-add-to-cart">
                  <CustomButton
                    onClick={() => dispatch(AddItemToCartAction(game))}
                    inverted
                    plus
                  >
                    +
                  </CustomButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GamesCarousel;
