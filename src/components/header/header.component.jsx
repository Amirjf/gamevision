import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleNavbarAction } from '../../redux/ui/toggleNavbar';
import { SetProductsSearchAction } from '../../redux/search/setProductsSearch';
import CartIcon from '../cart-icon/cart-icon.component';
import SearchResults from '../search-results/SearchResults';
import './header.styles.scss';

const Header = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const products = useSelector((state) => state.products);
  const games = useSelector((state) => state.games);

  const [searchInput, setSearchInput] = useState('');
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput === '') {
      dispatch(SetProductsSearchAction([]));
    } else {
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchInput);
      });
      dispatch(SetProductsSearchAction(filteredProducts));
    }
  }, [focused, searchInput]);

  const handleOnChange = (e) => {
    if (e.target.value) {
      setSearchInput(e.target.value);
    } else {
      setSearchInput('');
    }
  };
  return (
    <>
      <div className="mobile-header sm:hidden flex absolute justify-evenly p-2 top-0  h-16 w-full">
        <div
          className="flex items-center"
          onClick={() => dispatch(ToggleNavbarAction(!toggleNavbar))}
        >
          <i className="bx bx-menu-alt-left text-white text-3xl"></i>
        </div>
        <div className="w-14 flex mx-auto items-center">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/54482073?v=4"
            alt="avatar"
          />
        </div>
        <div className="w-14 flex items-center">
          <i className="bx bx-search text-white text-2xl"></i>
        </div>
        {/* TODO : Search For Mobile */}
        {/* <input
          className="absolute"
          type="text"
          placeholder="Search ..."
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleOnChange}
        /> */}
        {/* {focused && <SearchResults />} */}
      </div>
      <div
        className={`header hidden sm:flex w-full ${
          toggleNavbar ? 'toggle' : ''
        }`}
        id="header"
      >
        <div className="header__left-elements">
          <div
            className="header__toggle"
            onClick={() => dispatch(ToggleNavbarAction(!toggleNavbar))}
          >
            <i className="bx bx-menu" id="header-toggle"></i>
          </div>
          <div className="header__search-form relative">
            <i className="bx bx-search search-icon"></i>
            <input
              type="text"
              placeholder="Search ..."
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleOnChange}
            />

            {focused && <SearchResults />}
          </div>
        </div>
        <div className="header__right-elements hidden md:flex">
          <div className="header__username text-[#93989c] text-xs pr-4">
            Amir Masoud Jafari
          </div>
          <div className="header__img">
            <img
              src="https://avatars.githubusercontent.com/u/54482073?v=4"
              alt="avatar"
            />
          </div>
          <div className="header__icons">
            <CartIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
