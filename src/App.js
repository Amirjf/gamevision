import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import { SetProductsAction } from './redux/products/setProducts';
import CheckoutPage from './pages/checkhout/checkout';
import Wrapper from './components/wrapper/wrapper.component';
import Navigations from './components/navigations/navigations.component';

import { getDocsFromCollection } from './firebase/firebase.utils';
import GamesPage from './pages/games/games-page.component';
import GamePage from './pages/game/game-page.component';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocsFromCollection('products');
      setIsLoading(false);
      dispatch(SetProductsAction(data));
    };
    getProducts();
  }, []);

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigations />}>
            <Route index element={<HomePage isLoading={isLoading} />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="games" element={<GamesPage />} />
          <Route path="games/:gameId" element={<GamePage />} />
        </Routes>
      </Wrapper>
    </>
  );
};
export default App;
