import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";
import Search from "../components/Search";



const NavLinks = () => (
  <>
    <Link to="/">
      Places
    </Link>
    
    <Link to="/about" className="">Us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/perfil">
      <img src="https://picsum.photos/40" className="rounded-[100px]" alt="Profile" />
    </Link>
  </>
);

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="text-white p-4 mb-24">
      <div className={`${styles.row} justify-between`}>
        <div className="flex gap-24 items-baseline">
          <div>
            <Link to="/" className={`text-2xl font-bold`} aria-label="Home">
              DHelper
            </Link>
          </div>
          <div className={`md:flex ${active ? "hidden" : "hidden"} md:block`}>
            <Search />
          </div>
        </div>

        <div
          className={`md:flex gap-12 md:space-x-0 items-center ${
            active ? "hidden" : "hidden"
          } md:block`}
        >
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"  
            className="focus:outline-none"
            onClick={handleClick}
            aria-label="Menu"
          >
            <img src="icons8-menu.svg" alt="Menu Icon" />
          </button>
          <div className={`group relative ${active ? "block" : "hidden"}`}>
            <div id="dropdown" className={`${styles.dropdown}`}>
              <NavLinks />
              <Link to="/contact" className="block">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden m-10`}>
        <Search />
      </div>
    </nav>
  );
};

export default Nav;
