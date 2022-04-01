import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import { SetProductsAction } from "./redux/products/setProducts";
import "./App.scss";
import CheckoutPage from "./pages/checkhout/checkout";
import Header from "./components/header/header.component";
import SideNav from "./components/sidebar/sidenav.component";
import { db } from "./firebase/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";
const App = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);

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
