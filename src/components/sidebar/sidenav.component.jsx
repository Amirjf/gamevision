import React from "react";
import Logo from "../../assets/img/logo.png";
import NavItem from "./nav-item.component";
import "./sidenav.styles.scss";
import NavItemWithSubmenu from "./nav-item-with-sub-menu.component";
import CustomButton from "../custom-button/custom-button.component";

const SideNav = ({ toggleNavbar }) => {
  return (
    <>
      <div className={`l-navbar ${toggleNavbar ? "hide" : null}`}>
        <nav className="nav">
          <div>
            <a href="#" className="nav__logo">
              {/* <i className="bx bx-layer nav__logo-icon"></i>
            <span className="nav__logo-name">Bedimcode</span> */}
              <img src={Logo} alt="logo" />
            </a>

            <div className="nav__list">
              <CustomButton>Go to catalog</CustomButton>
              <NavItem icon="user" title="Profile" />
              <NavItem icon="search" title="Search" />
              <NavItem icon="heart" title="Favorite" />
              <NavItem icon="wallet" title="Balance" />

              <NavItemWithSubmenu>
                <NavItem icon="mouse" title="Mouse" />
                <NavItem icon="headphone" title="Game Headphones" />
                <NavItem icon="glasses" title="VR glassess" />
                <NavItem icon="desktop" title="Computers" />
                <NavItem icon="wallet" title="Games" />
              </NavItemWithSubmenu>
            </div>
          </div>

          {/* bottem link goes here */}
        </nav>
      </div>
    </>
  );
};

export default SideNav;
