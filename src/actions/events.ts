import { CustomEvent } from '../interfaces';
import { ActionTypes } from '../types/types';

export const eventSetActive = (event: CustomEvent) => ({
  type: ActionTypes.eventSetActive,
  payload: event,
});

export const eventAddNew = (event: CustomEvent) => ({
  type: ActionTypes.eventAddNew,
  payload: event,
});

export const clearActive = () => ({ type: ActionTypes.eventClearActive });

export const eventUpdated = (event: CustomEvent) => ({
  type: ActionTypes.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({ type: ActionTypes.eventDeleted });
