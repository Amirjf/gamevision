import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import { SetProductsAction } from "./redux/products/setProducts";
import axios from "axios";
import "./App.scss";
import CheckoutPage from "./pages/checkhout/checkout";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";

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
    <>
      <Header />
      <SideNav />
      <div className={`${toggleNavbar ? "" : "wrapper"}`}>
        <div
          className={`content p-5 pt-20 mb-36 ${toggleNavbar ? "toggle" : ""}`}
        >
          <Routes>
            <Route path="/" element={<HomePage isLoading={loading} />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
