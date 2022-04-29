import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import { SetProductsAction } from './redux/products/setProducts';
import CheckoutPage from './pages/checkhout/checkout';
import Wrapper from './components/wrapper/wrapper.component';
import Navigations from './components/navigations/navigations.component';

import './App.scss';
import { getDocsFromCollection } from './firebase/firebase.utils';

const App = () => {
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocsFromCollection('products');
      dispatch(SetProductsAction(data));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigations />}>
            <Route index element={<HomePage isLoading={loading} />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </>
  );
};
export default App;
