import React from "react";
import './styles.css';

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
  const fullscreen = true;

  return (
    <Modal show={show} onClick={closeModal} style={{ opacity: 1 }} dialogClassName='yea' fullscreen={fullscreen}>
      <ModalHeader >
        <ModalTitle>{story.title}</ModalTitle>
      </ModalHeader>
      <ModalBody className="body">
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
