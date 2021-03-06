export enum ActionTypes {
  uiOpenModal = '[ui] Open modal',
  uiCloseModal = '[ui] Close modal',

  eventSetActive = '[event] Set active',
  eventAddNew = '[event] Add new',
  eventClearActive = '[event] Clear active event',
  eventUpdated = '[event] Event updated',
  eventDeleted = '[event] Event deleted',
  eventLoaded = '[event] Events loaded',
  eventLogout = '[event] Logout',

  authChecking = '[auth] Checking login state',
  authCheckingFinish = '[auth] Finish checking login state',
  authStartLogin = '[auth] Start login',
  authLogin = '[auth] Login',
  authStartRegister = '[auth] Start register',
  authStartTokenRenew = '[auth] Start token renew',
  authLogout = '[auth] Logout',
}
