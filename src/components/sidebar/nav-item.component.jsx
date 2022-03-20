import React from "react";

const NavItem = ({ icon, title, isToggled, ...otherProps }) => {
  return (
    <a href="#" className="nav__link">
      <i className={`bx bx-${icon} nav__icon`}></i>
      <span className="nav__name">{title}</span>
    </a>
  );
};

export default NavItem;
