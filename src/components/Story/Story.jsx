import React from "react";

import { Col, Image } from "react-bootstrap";

import "./styles.css";

const Story = (props) => {
  const { story } = props;

  return (
    /* TODO KYLE: https://react-bootstrap.github.io/layout/grid/ FIX THIS */
    <Col fluid={XSLTProcessor}>
      <span >
        <Image src={story.urlToImage} alt='test' className="storyImage" />
      </span>
      <div>
        <p>{story.source.name}</p>
        {/* {story.title}
        {story.description} */}
      </div>
    </Col>
  );
};

export default Story;
