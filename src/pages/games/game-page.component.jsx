import React from 'react';
import GenreFilter from '../../components/genre-filter/genre-filter.component';
import Header from '../../components/header/header.component';
import SideFilterContainer from '../../components/side-filter-container/SideFilterContainer';

const GamesPage = () => {
  return (
    <div>
      <Header />
      <SideFilterContainer>
        <GenreFilter />
      </SideFilterContainer>
    </div>
  );
};

export default GamesPage;
