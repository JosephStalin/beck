import React from "react";

import Search from "./Search";
import Logo from "./Logo";
import Categories from "./Categories";
import { Row } from "react-bootstrap";

import "./styles.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <Row id='logo-search-container'>
        <div>
          <Logo />
        </div>
        <div>
          <Search />
        </div>
      </Row>
      <Row id='categories-container'>
        <Categories />
      </Row>
    </React.Fragment>
  );
};

export default Navbar;
