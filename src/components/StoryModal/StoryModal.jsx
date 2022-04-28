import React, { useRef } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";
import ReactDom from "react-dom";

const StoryModal = ({ setShow }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShow(false);
    }
  };

  return ReactDom.createPortal(
    <div>
      <Modal onClick={() => closeModal()} ref={modalRef}>
        <ModalHeader>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>bruh</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>,
    document.getElementById("portal")
  );
};

export default StoryModal;
