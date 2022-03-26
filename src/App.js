import React, { useEffect, useState } from "react";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";
import { useDispatch, useSelector } from "react-redux";
import { SetProductsAction } from "./redux/products/setProducts";
import axios from "axios";
import "./App.scss";
import ProductsGrid from "./components/products-grid/products-grid.component";

const App = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        "https://my-json-server.typicode.com/Amirjf/my-json-server/products"
      );
      dispatch(SetProductsAction(data));
    };
    getProducts();
  }, []);

  return (
    <>
      <Header toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
      <SideNav toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
      <div
        className={`content p-5 pt-20 mb-36 ${toggleNavbar ? "toggle" : ""}`}
      >
        <ProductsGrid />
      </div>
    </>
  );
};
export default App;
