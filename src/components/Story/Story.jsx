import React from "react";
import { Col } from "react-bootstrap";
import backupImage from "../../assets/images/putin.jpg";

import "./styles.css";

const Story = (props) => {
  const { story, showModal } = props;

  const storyImage = story.urlToImage ? story.urlToImage : backupImage;

  return (
    <Col className='column' onClick={showModal}>
      <div>
        <span>
          <img src={storyImage} alt='' className='storyImage backgroundImage' />
        </span>
        <div className='summary'>
          <p className='title'>{story.title}</p>
          <p className='source'>{story.source.name}</p>
          <p className='description'>{story.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Story;
