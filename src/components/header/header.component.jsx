import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleNavbarAction } from '../../redux/ui/toggleNavbar';
import { SetProductsSearchAction } from '../../redux/search/setProductsSearch';
import CartIcon from '../cart-icon/cart-icon.component';
import SearchResults from '../search-results/SearchResults';
import MobileHeader from '../mobile-header/mobile-header.component';
import { AnimatePresence } from 'framer-motion';
import { SetGamesSearchAction } from '../../redux/search/setGamesSearch';
import GamesApi from '../../http/axios';
import './header.styles.scss';

const Header = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const products = useSelector((state) => state.products);

  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState('');
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const dispatch = useDispatch();

  const getGames = async () => {
    const { data } = await GamesApi.get('', {
      params: { search: searchInput },
    });
    dispatch(SetGamesSearchAction(data.results));
  };

  useEffect(() => {
    const allProducts = { products: products };
    if (searchInput === '') {
      dispatch(SetProductsSearchAction([]));
      dispatch(SetGamesSearchAction([]));
    } else {
      const filteredProducts = allProducts.products.filter((product) => {
        return product.title.toLowerCase().includes(searchInput);
      });

      setLoading(false);
      dispatch(SetProductsSearchAction(filteredProducts));
    }
  }, [focused, searchInput]);

  useEffect(() => {
    getGames();
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
      <MobileHeader getGames={getGames} />
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
            <AnimatePresence>
              {searchInput && (
                <SearchResults loading={loading} searchInput={searchInput} />
              )}
            </AnimatePresence>
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
