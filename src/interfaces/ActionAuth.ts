import { ActionTypes } from '../types/types';

interface CheckingAction {
  type: ActionTypes.authChecking;
}

interface CheckingFinishAction {
  type: ActionTypes.authCheckingFinish;
}

interface StartLoginAction {
  type: ActionTypes.authStartLogin;
}

interface LoginAction {
  type: ActionTypes.authLogin;
}

interface StartRegisterAction {
  type: ActionTypes.authStartRegister;
}

interface StartTokenRenewAction {
  type: ActionTypes.authStartTokenRenew;
}

interface LogoutAction {
  type: ActionTypes.authLogout;
}

export type ActionAuth =
  | CheckingAction
  | CheckingFinishAction
  | StartLoginAction
  | LoginAction
  | StartRegisterAction
  | StartTokenRenewAction
  | LogoutAction;
