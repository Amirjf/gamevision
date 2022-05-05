import React from 'react';
import Logo from '../../assets/img/logo.png';
import NavItem from './nav-item.component';
import { useSelector, useDispatch } from 'react-redux';
import NavItemWithSubmenu from './nav-item-with-sub-menu.component';
import { ToggleNavbarAction } from '../../redux/ui/toggleNavbar';
import { Link } from 'react-router-dom';
import { navItems } from './navItems';
import './sidenav.styles.scss';

const SideNav = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const dispatch = useDispatch();

  const { categories, desktop, mobile } = navItems;

  return (
    <>
      <div
        className={`l-navbar w-1/2 md:w-1/5 relative ${
          toggleNavbar ? 'hide' : null
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
              {desktop.map((item) => (
                <NavItem
                  key={`mn-${item.title}`}
                  icon={item.icon}
                  title={item.title}
                  linkTo={item.link ? item.link : '/'}
                />
              ))}

              <NavItemWithSubmenu navstitle="Category">
                {categories.map((item) => (
                  <NavItem
                    key={`cn-${item.title}`}
                    icon={item.icon}
                    title={item.title}
                    linkTo={item.link ? item.link : '/'}
                  />
                ))}
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
