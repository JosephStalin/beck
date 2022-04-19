import React from "react";

import { Container, Col  } from "react-bootstrap";

import "./styles.css";

const StoryWrapper = (props) => {
  const { children } = props;
  return (
    /* Container needs margin styling */
    <Container >
      <Col>{children}</Col>
    </Container>
  );
};

export default StoryWrapper;
