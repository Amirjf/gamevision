import React from 'react';
import GamePageContent from '../../components/game-page-content/game-page-content.component';
import GamesGrid from '../../components/games-grid/GamesGrid';
import GenreFilter from '../../components/genre-filter/genre-filter.component';
import Header from '../../components/header/header.component';
import SideFilterContainer from '../../components/side-filter-container/SideFilterContainer';
import SideNav from '../../components/sidebar/sidenav.component';
import YearOfReleaseFilter from '../../components/year-of-release-filter/YearOfReleaseFilter';

const GamesPage = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-7">
        <SideFilterContainer>
          <GenreFilter />
          <YearOfReleaseFilter />
        </SideFilterContainer>
        <GamePageContent>
          <GamesGrid />
        </GamePageContent>
      </div>
    </>
  );
};

export default GamesPage;
