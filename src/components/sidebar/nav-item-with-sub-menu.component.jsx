import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItemWithSubmenu = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <div className="nav__heading">
        <span
          className="nav__name pl-3 my-3 cursor-pointer font-semibold"
          onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
        >
          Category
        </span>
        <i
          onClick={() => setToggleMenu((toggleMenu) => !toggleMenu)}
          className={`bx bx-chevron-${
            toggleMenu ? "up" : "down"
          }  bg-[#363638] rounded-sm cursor-pointer`}
        ></i>
      </div>
      <div>
        {toggleMenu ? (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.29 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default NavItemWithSubmenu;
