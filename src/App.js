import React, { useState } from "react";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import "./App.scss";

const App = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <>
      <Header toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
      <Sidebar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
      <div className={`content p-5 pt-20 ${toggleNavbar ? "toggle" : ""}`}>
        <h1 className="text-3xl text-white">CONTENT</h1>
      </div>
    </>
  );
};
export default App;
