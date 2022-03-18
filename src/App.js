import React, { useState } from "react";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import "./App.css";

const App = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <>
      <div className="nav-container">
        <Header toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
        <Sidebar
          toggleNavbar={toggleNavbar}
          setToggleNavbar={setToggleNavbar}
        />
      </div>
    </>
  );
};
export default App;
