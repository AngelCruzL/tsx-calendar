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
        checking: false,
        ...action.payload,
      };

    default:
      return state;
  }
};
