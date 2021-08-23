import { ActionAuth } from '../interfaces';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    default:
      return state;
  }
};
