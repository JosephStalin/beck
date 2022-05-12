import React from "react";

import Search from "./Search";
import Logo from "./Logo";
import Categories from "./Categories";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const Navbar = (props) => {
  const { instance, setStories } = props;
  return (
    <React.Fragment>
      <Col id='logo-search-container'>
        <Logo />
        <Search instance={instance} setStories={setStories} />
      </Col>
      <Row id='categories-container'>
        <Categories instance={instance} setStories={setStories} />
      </Row>
    </React.Fragment>
  );
};

export default Navbar;
