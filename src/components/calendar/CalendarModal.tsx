import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import ModalContent from './ModalContent';
import { uiCloseModal } from '../../actions/ui';

import { customStyles } from './modalStyles';

Modal.setAppElement('#root');

function CalendarModal() {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector(state => state.ui);

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  return (
    <Modal
      isOpen={modalOpen}
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
