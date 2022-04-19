import React from "react";

import { Container, Row  } from "react-bootstrap";

import "./styles.css";

const StoryWrapper = (props) => {
  const { children } = props;
  return (
    /* Container needs margin styling */
    <Container >
      <Row>{children}</Row>
    </Container>
  );
};

export default StoryWrapper;
