import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { fetchWithToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
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

const eventUpdated = (event: CustomEvent) => ({
  type: ActionTypes.eventUpdated,
  payload: event,
});

export const eventStartUpdate = (event: CustomEvent) => {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await fetchWithToken(`events/${event.id}`, event, 'PUT');
      const body = await resp.json();

      if (body.ok) return dispatch(eventUpdated(event));
      else return Swal.fire('Error', body.message, 'error');
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventDeleted = () => ({ type: ActionTypes.eventDeleted });

export const eventStartLoading = () => {
  return async (dispatch: Dispatch) => {
    try {
      const resp = await fetchWithToken('events');
      const body = await resp.json();
      const events = prepareEvents(body.events);

      dispatch(eventLoaded(events));
    } catch (error) {}
  };
};

const eventLoaded = (events: CustomEvent[]) => ({
  type: ActionTypes.eventLoaded,
  payload: events,
});
