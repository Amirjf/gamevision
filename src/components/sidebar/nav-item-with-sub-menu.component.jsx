import React, { Children, useState } from "react";
import NavItem from "./nav-item.component";
import { motion } from "framer-motion";

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
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default NavItemWithSubmenu;
