import React from "react";
import "./styles.css";

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";

const StoryModal = (props) => {
  const { closeModal, show, story } = props;
  let title;
  if (story.title.length >= 90) {
    title = story.title.substr(0, 87) + '...';
  }
  else {
    title = story.title;
  }

  return (
    <Modal
      size='lg'
      show={show}
      onClick={closeModal}
      style={{ opacity: 1 }}
      fullscreen='xl-down'
      className='modal-main'
    >
      <div className='modal-alignment-helper'>
        <div className='vertical-align-center'>
          <div className='modal-content'>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
            </ModalHeader>
            <ModalBody className='body'>
            <iframe src={story.url} title={title} height='100%' />
            </ModalBody>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
