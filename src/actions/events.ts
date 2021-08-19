import { CustomEvent } from '../interfaces';
import { types } from '../types/types';

export const eventSetActive = (event: CustomEvent) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventAddNew = event => ({
  type: types.eventAddNew,
  payload: event,
});
