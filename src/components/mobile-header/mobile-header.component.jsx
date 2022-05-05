import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { SetProductsSearchAction } from '../../redux/search/setProductsSearch';
import { ToggleNavbarAction } from '../../redux/ui/toggleNavbar';
import { SetGamesSearchAction } from '../../redux/search/setGamesSearch';
import SearchItem from '../search-item/SearchItem';
import SearchItemNotFound from '../search-not-found/search-item-not-found.component';

const MobileHeader = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const productsRes = useSelector((state) => state.productsSearchResults);
  const gamesRes = useSelector((state) => state.gamesSearchResults);
  const products = useSelector((state) => state.products);
  const games = useSelector((state) => state.games);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const dispatch = useDispatch();

  const [focused, setFocused] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const allProducts = { products: products, games: games };
    if (searchInput === '') {
      dispatch(SetProductsSearchAction([]));
      dispatch(SetGamesSearchAction([]));
    } else {
      const filteredProducts = allProducts.products.filter((product) => {
        return product.title.toLowerCase().includes(searchInput);
      });
      const filteredGames = allProducts.games.filter((game) => {
        return game.name.toLowerCase().includes(searchInput);
      });

      dispatch(SetProductsSearchAction(filteredProducts));
      dispatch(SetGamesSearchAction(filteredGames));
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
    <div className="mobile-header sm:hidden flex absolute justify-evenly p-2 top-0 h-16 w-full">
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
            className={`mobile-search-results sm:hidden bg-darkGrey absolute left-0 right-3 top-20 bottom-0 z-50 `}
          >
            <div className="flex justify-center">
              <input
                className="py-5 text-center text-3xl text-shaded bg-darkGrey w-full placeholder:opacity-25"
                type="text"
                placeholder="Search ..."
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleOnChange}
              />
            </div>
            <div className="w-56 mx-auto opacity-20 border-b-2 border-y-shaded"></div>
            <div className="bg-darkGrey px-4">
              {productsRes.length + gamesRes.length !== 0 ? (
                <>
                  {showMobileSearch && (
                    <div>
                      <h2 className="text-white text-lg py-2">Games</h2>
                      <div className="flex gap-2 overflow-x-auto">
                        {gamesRes
                          .filter((item, idx) => idx < 9)
                          .map((item, idx) => (
                            <SearchItem
                              game
                              key={`g-${item.added}`}
                              genres={item.genres}
                              rating={item.rating}
                              title={item.name}
                              price="59.99"
                              category={item.category}
                              image={item.background_image}
                            />
                          ))}
                      </div>
                      <div className="py-5">
                        <h2 className="text-white text-lg">Products</h2>
                        {productsRes
                          .filter((item, idx) => idx < 3)
                          .map((item, idx) => (
                            <SearchItem
                              key={`i-${item.id}`}
                              title={item.title}
                              price={item.price}
                              category={item.category}
                              image={item.image}
                            />
                          ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <SearchItemNotFound />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
