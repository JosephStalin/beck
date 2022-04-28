import React, { useState } from "react";
import StoryModal from "../StoryModal";
import { Col, Image } from "react-bootstrap";

import "./styles.css";

const Story = (props) => {
  const [show, setShow] = useState(false);
  const { story } = props;

  return (
    /* TODO KYLE: https://react-bootstrap.github.io/layout/grid/ FIX THIS */
    <Col className="column">
      <div onClick={() => setShow(true)}>
        {show ? <StoryModal setShow={setShow} /> : null}
        <span>
          <Image src={story.urlToImage} alt="test" className="storyImage" />
        </span>
        <div className="summary">
          <p className="source">{story.source.name}</p>
          <p className="title">{story.title}</p>
          <p className="description">{story.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Story;
