import React from "react";
import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div>
          <a href="#" className="nav__logo">
            <i className="bx bx-layer nav__logo-icon"></i>
            <span className="nav__logo-name">Bedimcode</span>
          </a>

          <div className="nav__list">
            <a href="#" className="nav__link active">
              <i className="bx bx-grid-alt nav__icon"></i>
              <span className="nav__name">Dashboard</span>
            </a>

            <a href="#" className="nav__link">
              <i className="bx bx-user nav__icon"></i>
              <span className="nav__name">Users</span>
            </a>

            <a href="#" className="nav__link">
              <i className="bx bx-message-square-detail nav__icon"></i>
              <span className="nav__name">Messages</span>
            </a>

            <a href="#" className="nav__link">
              <i className="bx bx-bookmark nav__icon"></i>
              <span className="nav__name">Favorites</span>
            </a>

            <a href="#" className="nav__link">
              <i className="bx bx-folder nav__icon"></i>
              <span className="nav__name">Data</span>
            </a>

            <a href="#" className="nav__link">
              <i className="bx bx-bar-chart-alt-2 nav__icon"></i>
              <span className="nav__name">Analytics</span>
            </a>
          </div>
        </div>

        <a href="#" className="nav__link">
          <i className="bx bx-log-out nav__icon"></i>
          <span className="nav__name">Log Out</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
