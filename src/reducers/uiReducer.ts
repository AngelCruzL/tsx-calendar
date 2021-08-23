import { ActionUI } from '../interfaces/ActionUI';
import { ActionTypes } from '../types/types';

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action: ActionUI) => {
  switch (action.type) {
    case ActionTypes.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case ActionTypes.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};
