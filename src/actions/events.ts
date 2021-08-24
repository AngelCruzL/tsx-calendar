import { Dispatch } from 'redux';
import { fetchWithToken } from '../helpers/fetch';

import { CustomEvent } from '../interfaces';
import { ActionTypes } from '../types/types';

const eventAddNew = (event: CustomEvent) => ({
  type: ActionTypes.eventAddNew,
  payload: event,
});

export const eventStartAddNew = (event: CustomEvent) => {
  return async (dispatch: Dispatch, getState: any) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchWithToken('events', event, 'POST');
      const body = await resp.json();

      if (body.ok) {
        event.id = body.event.id;
        event.user = { uid, name };
      }

      dispatch(eventAddNew(event));
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventSetActive = (event: CustomEvent) => ({
  type: ActionTypes.eventSetActive,
  payload: event,
});

export const eventClearActive = () => ({ type: ActionTypes.eventClearActive });

export const eventUpdated = (event: CustomEvent) => ({
  type: ActionTypes.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({ type: ActionTypes.eventDeleted });

export const eventStartLoading = () => {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await fetchWithToken('events');
      const body = await resp.json();
      const { events } = body;

      console.log(events);
    } catch (error) {}
  };
};

const eventLoaded = (events: CustomEvent[]) => ({
  type: ActionTypes.eventLoaded,
  payload: events,
});
