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
  const { closeModal, show } = props;

  return (
    <Modal show={show} onClick={closeModal} style={{ opacity: 1 }}>
      <ModalHeader>
        <ModalTitle>Modal heading</ModalTitle>
      </ModalHeader>
      <ModalBody>bruh</ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default StoryModal;
