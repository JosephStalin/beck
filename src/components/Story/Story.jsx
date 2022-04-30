import React from "react";
import { Col, Image } from "react-bootstrap";

import "./styles.css";

const Story = (props) => {
  const { story, showModal } = props;

  return (
    <Col className='column' onClick={showModal}>
      <div>
        <span>
          <Image src={story.urlToImage} alt='test' className='storyImage' />
        </span>
        <div className='summary'>
          <p className='source'>{story.source.name}</p>
          <p className='title'>{story.title}</p>
          <p className='description'>{story.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Story;

