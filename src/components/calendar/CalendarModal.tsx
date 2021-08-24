import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';

import ModalContent from './ModalContent';
import { uiCloseModal } from '../../actions/ui';

import { customStyles } from './modalStyles';
import { eventClearActive } from '../../actions/events';
import { ReducersState } from '../../reducers/rootReducer';

Modal.setAppElement('#root');

function CalendarModal() {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state: ReducersState) => state.ui);

  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActive());
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
