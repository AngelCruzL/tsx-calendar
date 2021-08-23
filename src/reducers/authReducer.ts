import { ActionAuth } from '../interfaces';
import { ActionTypes } from '../types/types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case ActionTypes.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case ActionTypes.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
