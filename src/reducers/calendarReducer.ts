import { ActionEvent, InitialState } from '../interfaces';
import { ActionTypes } from '../types/types';

const initialState: InitialState = {
  events: [],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action: ActionEvent) => {
  switch (action.type) {
    case ActionTypes.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case ActionTypes.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case ActionTypes.eventClearActive:
      return {
        ...state,
        activeEvent: null,
      };

    case ActionTypes.eventUpdated:
      return {
        ...state,
        events: state.events.map(e =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case ActionTypes.eventDeleted:
      return {
        ...state,
        events: state.events.filter(e => e.id !== state.activeEvent!.id),
        activeEvent: null,
      };

    case ActionTypes.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };

    default:
      return state;
  }
};
