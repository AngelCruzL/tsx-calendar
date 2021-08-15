import React, { useState } from 'react';
import Modal from 'react-modal';

import { customStyles } from './modalStyles';

Modal.setAppElement('#root');

function CalendarModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </Modal>
  );
}

export default CalendarModal;
