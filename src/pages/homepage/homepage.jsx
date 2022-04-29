import React from 'react';
import ProductsGrid from '../../components/products-grid/products-grid.component';
import Banner from '../../components/banner/banner.component';
import GamesCarousel from '../../components/games-carousel/games-carousel.component';
import BannerContainer from '../../components/banner-container/banner-container.component';
import SectionHeader from '../../components/section-header/section-header.component';

const HomePage = ({ isLoading }) => {
  return (
    <>
      <ProductsGrid isLoading={isLoading} />
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
    </>
  );
};

export default HomePage;
