import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CustomButton from "../custom-button/custom-button.component";
import { motion } from "framer-motion";
import useSwiperRef from "../swiper-ref/use-swiper-ref";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SetGamesAction } from "../../redux/games/setGames";
import "swiper/css/navigation";
import "swiper/css/bundle";
import SectionHeader from "../section-header/section-header.component";
import { ActiveGameFilterAction } from "../../redux/games/activeGameFilter";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";

const API_KEY = "?key=3dbe5baa7df44f92a7e6d3bdd8c28888";

const GamesCarousel = () => {
  const games = useSelector((state) => state.games);
  const activeGamesFilter = useSelector((state) => state.activeGamesFilter);
  const dispatch = useDispatch();

  //handling swiper with custom buttons
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  const handleSubmit = (e) => {
    dispatch(ActiveGameFilterAction(e.target.value));
  };

  useEffect(() => {
    const getGames = async () => {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games${API_KEY}${activeGamesFilter}`
      );
      dispatch(SetGamesAction(data.results));
    };
    getGames();
  }, [activeGamesFilter]);

  console.log(games);
  console.log(activeGamesFilter);
  return (
    <>
      <SectionHeader title="Best of Games" categoryTitle="Games">
        <CustomButton
          active={
            activeGamesFilter === "&dates=2021-01-01,2021-12-31&ordering=-added"
          }
          value="&dates=2021-01-01,2021-12-31&ordering=-added"
          onClick={handleSubmit}
          inverted
        >
          Top of 2022
        </CustomButton>
        <CustomButton
          active={
            activeGamesFilter === "&dates=2019-01-01,2019-12-31&ordering=-added"
          }
          value="&dates=2019-01-01,2019-12-31&ordering=-added"
          onClick={handleSubmit}
          inverted
        >
          Popular
        </CustomButton>
        <CustomButton
          active={
            activeGamesFilter ===
            "&dates=2020-01-01,2020-12-31&ordering=-rating"
          }
          value="&dates=2020-01-01,2020-12-31&ordering=-rating"
          inverted
          onClick={handleSubmit}
        >
          Top Rating
        </CustomButton>
        <CustomButton
          active={
            activeGamesFilter ===
            "&dates=2019-09-01,2019-09-30&platforms=18,1,7"
          }
          value="&dates=2019-09-01,2019-09-30&platforms=18,1,7"
          inverted
          onClick={handleSubmit}
        >
          Best of Last Month
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
        spaceBetween={15}
        slidesPerView={5}
        navigation={{
          prevEl,
          nextEl,
        }}
      >
        {games.map((game) => (
          <SwiperSlide>
            <div className="group game-container">
              <div className="image-container relative shadow-md">
                <img
                  className="transition z-0 w-60 h-72 object-cover rounded-lg border-2 border-[#212123] ease-linear duration-300 group-hover:border-2 group-hover:border-[#86858b]"
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
                  <CustomButton inverted plus>
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

export default WithSpinner(GamesCarousel);
