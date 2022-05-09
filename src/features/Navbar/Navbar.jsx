import React from "react";

import Search from "./Search";
import Logo from "../../features/Logo";
import Categories from "../../Components/Categories";

//import "./styles";

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
