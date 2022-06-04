import React from "react";
import { CgSearch } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";

const Sidebar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <header>
            <h1 className="Dh">
              Dev<span className="hire">Hire</span>
            </h1>
          </header>
          <ul className="nav">
            <li className="sea">
              <span className="search">
                <CgSearch />
              </span>
              Home
            </li>
            <li className="fav">
              <span className="search">
                <MdFavoriteBorder />
              </span>
              Favorites
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
