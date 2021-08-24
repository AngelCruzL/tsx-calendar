import { ActionTypes } from '../types/types';
import { CustomEvent } from './CustomEvent';

interface SetActiveAction {
  type: ActionTypes.eventSetActive;
  payload: CustomEvent;
}

interface AddNewAction {
  type: ActionTypes.eventAddNew;
  payload: CustomEvent;
}

interface ClearActiveAction {
  type: ActionTypes.eventClearActive;
}

interface UpdatedAction {
  type: ActionTypes.eventUpdated;
  payload: CustomEvent;
}

interface DeletedAction {
  type: ActionTypes.eventDeleted;
}

interface LoadedAction {
  type: ActionTypes.eventLoaded;
  payload: CustomEvent[];
}

interface LogoutAction {
  type: ActionTypes.eventLogout;
}

export type ActionEvent =
  | SetActiveAction
  | AddNewAction
  | ClearActiveAction
  | UpdatedAction
  | DeletedAction
  | LoadedAction
  | LogoutAction;
