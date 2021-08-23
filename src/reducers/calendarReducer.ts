import moment from 'moment';
import { ActionEvent, InitialState } from '../interfaces';
import { ActionTypes } from '../types/types';

const initialState: InitialState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumpleaños de Ángel',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      notes: 'Comprar el pastel',
      user: {
        uid: '115',
        name: 'Luis',
      },
    },
  ],
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

    default:
      return state;
  }
};
