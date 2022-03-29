import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidenav.styles.scss";

const NavItem = ({ icon, title, linkTo, ...otherProps }) => {
  return (
    <NavLink
      to={`${linkTo}`}
      className={`nav__link ${({ isActive }) => isActive}`}
    >
      <i className={`bx bx-${icon} nav__icon`}></i>
      <span className="nav__name">{title}</span>
    </NavLink>
  );
};

export default NavItem;
