import moment from 'moment';
import { CustomEvent } from '../interfaces';
import { types } from '../types/types';

interface initialState {
  events: CustomEvent[];
  activeEvent: any[] | null;
}

const initialState: initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumpleaños de Ángel',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      notes: 'Comprar el pastel',
      user: {
        _id: '115',
        name: 'Luis',
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventClearActive:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map(e =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter(e => e.id !== state.activeEvent.id),
        activeEvent: null,
      };

    default:
      return state;
  }
};
