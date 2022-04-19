import React from "react";

import { Col, Image } from "react-bootstrap";

import "./styles.css";

const Story = (props) => {
  const { story } = props;

  return (
    /* TODO KYLE: https://react-bootstrap.github.io/layout/grid/ FIX THIS */
    <Col xs={6}>
      <span >
        <Image src={story.urlToImage} alt='test' className="storyImage" />
      </span>
      <div>
        {story.source.name}
        {/* {story.title}
        {story.description} */}
      </div>
    </Col>
  );
};

export default Story;
