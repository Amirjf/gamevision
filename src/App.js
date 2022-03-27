import React, { useEffect, useState } from "react";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";
import { useDispatch, useSelector } from "react-redux";
import { SetProductsAction } from "./redux/products/setProducts";
import axios from "axios";
import ProductsGrid from "./components/products-grid/products-grid.component";
import "./App.scss";
import WithSpinner from "./hoc/with-spinner/with-spinner.component";

const App = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const [loading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        "https://my-json-server.typicode.com/Amirjf/my-json-server/products"
      );
      dispatch(SetProductsAction(data));
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <SideNav />
      <div
        className={`content p-5 pt-20 mb-36 ${toggleNavbar ? "toggle" : ""}`}
      >
        <ProductsGrid isLoading={loading} />
      </div>
    </>
  );
};
export default App;
