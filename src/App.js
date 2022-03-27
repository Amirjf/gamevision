import React, { useEffect, useState } from "react";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";
import { useDispatch, useSelector } from "react-redux";
import { SetProductsAction } from "./redux/products/setProducts";
import axios from "axios";
import ProductsGrid from "./components/products-grid/products-grid.component";
import "./App.scss";
import WithSpinner from "./hoc/with-spinner/with-spinner.component";
import Banner from "./components/banner/banner.component";
import SectionHeader from "./components/section-header/section-header.component";

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
        <SectionHeader title="Featured" />
        <div className="grid grid-cols-2 gap-5">
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
        </div>
      </div>
    </>
  );
};
export default App;
