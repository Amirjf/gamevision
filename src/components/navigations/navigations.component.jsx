import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.component";
import SideNav from "../sidebar/sidenav.component";

const Navigations = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Outlet />
    </>
  );
};

export default Navigations;
