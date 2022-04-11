import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import { SetProductsAction } from "./redux/products/setProducts";
import "./App.scss";
import CheckoutPage from "./pages/checkhout/checkout";
import { db } from "./firebase/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
import Wrapper from "./components/wrapper/wrapper.component";
import Navigations from "./components/navigations/navigations.component";
const App = () => {
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const productsRef = collection(db, "products");
      const data = await getDocs(productsRef);
      dispatch(SetProductsAction(data.docs.map((doc) => ({ ...doc.data() }))));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  //todo : add Search component
  // useEffect(() =>{
  //   const filteredProducts = products&games.filter((product) => {
  //     return product.name.toLoWerCase().includes(searchFiledValue)
  //   })
  //   setFilteredProducts(filteredProducts)
  // } , [products,searchField])

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
