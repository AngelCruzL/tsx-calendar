import React from 'react';
import Modal from 'react-modal';

import ModalContent from './ModalContent';

import { customStyles } from './modalStyles';

Modal.setAppElement('#root');

function CalendarModal() {
  const closeModal = () => {
    console.log('Close');
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <ModalContent closeModal={closeModal} />
    </Modal>
  );
}

export default CalendarModal;
