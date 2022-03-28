import React, { useEffect, useState } from "react";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";
import { useDispatch, useSelector } from "react-redux";
import { SetProductsAction } from "./redux/products/setProducts";
import { SetGamesAction } from "./redux/games/setGames";
import axios from "axios";
import ProductsGrid from "./components/products-grid/products-grid.component";
import "./App.scss";
import Banner from "./components/banner/banner.component";
import SectionHeader from "./components/section-header/section-header.component";
import BannerContainer from "./components/banner-container/banner-container.component";
import GamesCarousel from "./components/games-carousel/games-carousel.component";

const App = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data: products } = await axios.get(
        "https://my-json-server.typicode.com/Amirjf/my-json-server/products"
      );

      dispatch(SetProductsAction(products));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className={`${toggleNavbar ? "" : "wrapper"}`}>
      <Header />
      <SideNav />
      <div
        className={`content p-5 pt-20 mb-36 ${toggleNavbar ? "toggle" : ""}`}
      >
        <ProductsGrid isLoading={loading} />
        <SectionHeader title="Featured" />
        <BannerContainer>
          <Banner
            image="https://amir-jf.ir/game-vision/mouse/p12.png"
            title="Mouse"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            ipsam Lorem ipsum dolor sit amet consectetur"
            category="Mouse"
            price="29.42"
          />
          <Banner
            image="https://amir-jf.ir/game-vision/headphones/p6.png"
            title="Headphone"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            ipsam Lorem ipsum dolor sit amet consectetur"
            category="Headphone"
            price="143.99"
          />
        </BannerContainer>
        <GamesCarousel />
      </div>
    </div>
  );
};
export default App;
