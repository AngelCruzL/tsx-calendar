import { ActionTypes } from '../types/types';

export interface ActionUI {
  type: ActionTypes.uiCloseModal | ActionTypes.uiOpenModal;
}
