import { CustomEvent } from '../interfaces';
import { types } from '../types/types';

export const eventSetActive = (event: CustomEvent) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventAddNew = (event: CustomEvent) => ({
  type: types.eventAddNew,
  payload: event,
});

export const clearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = (event: CustomEvent) => ({
  type: types.eventUpdated,
  payload: event,
});
