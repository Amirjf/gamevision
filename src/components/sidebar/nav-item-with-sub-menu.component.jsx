import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavItemWithSubmenu = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <div
        className="nav__heading"
        onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
      >
        <div className="my-3">
          <span className="nav__name pl-3 cursor-pointer font-semibold">
            Category
          </span>
        </div>
        <div>
          <i
            className={`bx bx-chevron-${
              toggleMenu ? 'up' : 'down'
            }  bg-[#363638] rounded-sm cursor-pointer `}
          ></i>
        </div>
      </div>
      <motion.div>
        <AnimatePresence>
          {toggleMenu ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.29 }}
            >
              {children}
            </motion.div>
          ) : (
            <div></div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default NavItemWithSubmenu;
