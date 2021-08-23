import { CustomEvent } from './CustomEvent';

interface AuthState {
  checking: boolean;
  name?: string;
  uid?: string;
}

interface CalendarState {
  events: CustomEvent[];
  activeEvent: CustomEvent | null;
}

interface UIState {
  modalOpen: false;
}

export type InitialState = AuthState | CalendarState | UIState;
