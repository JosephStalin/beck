import React from "react";

import Search from "./Search";
import Logo from "./Logo";
import Categories from "./Categories";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <Search />
      <Categories />
    </div>
  );
}

export default Navbar;
