import React from "react";

import { Row, Image } from "react-bootstrap";

import "./styles.css";

const Story = (props) => {
  const { story } = props;

  return (
    /* TODO KYLE: https://react-bootstrap.github.io/layout/grid/ FIX THIS */
    <Row xs={6}>
      <span >
        <Image src={story.urlToImage} alt='test' className="storyImage" />
      </span>
      <div>
        {story.source.name}
        {/* {story.title}
        {story.description} */}
      </div>
    </Row>
  );
};

export default Story;
