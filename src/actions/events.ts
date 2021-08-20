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

export const clearActive = () => ({ type: types.eventClearActive });

export const eventUpdated = (event: CustomEvent) => ({
  type: types.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({ type: types.eventDeleted });
