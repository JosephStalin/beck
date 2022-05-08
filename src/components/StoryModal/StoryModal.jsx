import React from "react";

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

  return (
    <Modal show={show} onClick={closeModal} style={{ opacity: 1 }}>
      <ModalHeader>
        <ModalTitle>{story.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <iframe src={story.url} title={story.title}></iframe>
      </ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default StoryModal;
