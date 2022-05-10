import React from "react";

import Search from "./Search";
import Logo from "./Logo";
import Categories from "./Categories";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <Col id='logo-search-container'>
        <Logo />
        <Search />
      </Col>
      <Row id='categories-container'>
        <Categories />
      </Row>
    </React.Fragment>
  );
};

export default Navbar;
