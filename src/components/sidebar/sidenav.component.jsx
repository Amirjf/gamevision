import React from "react";
import Logo from "../../assets/img/logo.png";
import NavItem from "./nav-item.component";
import { useSelector, useDispatch } from "react-redux";
import "./sidenav.styles.scss";
import NavItemWithSubmenu from "./nav-item-with-sub-menu.component";
import CustomButton from "../custom-button/custom-button.component";
import { ToggleNavbarAction } from "../../redux/ui/toggleNavbar";
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`l-navbar sm:-left-200 relative ${
          toggleNavbar ? "hide" : null
        }`}
      >
        <nav className="nav">
          <div>
            <Link to="/" className="nav__logo">
              <img src={Logo} alt="logo" />
            </Link>
            <div
              onClick={() => dispatch(ToggleNavbarAction(!toggleNavbar))}
              className="nav-toggle absolute right-0 top-0 p-4"
            >
              <i
                className="bx bx-menu text-2xl text-white"
                id="header-toggle"
              ></i>
            </div>

            <div className="nav__list">
              <CustomButton>Go to catalog</CustomButton>
              <NavItem icon="home" title="Home" linkTo="/" />
              <NavItem icon="shopping-bag" title="Checkout" linkTo="checkout" />
              <NavItem icon="user" title="Profile" />
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
