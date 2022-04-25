import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { SetProductsSearchAction } from '../../redux/search/setProductsSearch';
import { ToggleNavbarAction } from '../../redux/ui/toggleNavbar';
import SearchResults from '../search-results/SearchResults';

const MobileHeader = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const products = useSelector((state) => state.products);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const [showMobileSearch, setShowMobileSearch] = useState(false);

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
      <div
        className="w-14 flex items-center"
        onClick={() => setShowMobileSearch(!showMobileSearch)}
      >
        <i
          className={`bx bx-${
            showMobileSearch ? 'x' : 'search'
          } text-white text-2xl`}
        ></i>
      </div>
      <AnimatePresence>
        {showMobileSearch && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            className={`mobile-search-results sm:hidden bg-darkGrey absolute left-0 right-5 top-20 bottom-0 h-screen z-50 `}
          >
            <div className="flex justify-center">
              <input
                className="py-10 text-center text-3xl text-shaded bg-darkGrey w-full"
                type="text"
                placeholder="Search ..."
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleOnChange}
              />
            </div>
            {focused && showMobileSearch && (
              <SearchResults searchInput={searchInput} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
