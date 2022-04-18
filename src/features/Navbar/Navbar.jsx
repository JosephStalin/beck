import React from "react";

import Search from "./Search";
//import Logo from "./Logo.js";
import Categories from "./Categories";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
    {/* <Logo /> */}
      <Search />
      <Categories />
    </div>
  );
}

export default Navbar;
