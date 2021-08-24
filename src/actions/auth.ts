import { Dispatch } from 'redux';
import Swal from 'sweetalert2';

import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { User } from '../interfaces';
import { ActionTypes } from '../types/types';
import { eventLogout } from './events';

export const startLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', String(new Date().getTime()));

      dispatch(
        login({
          name: body.name,
          uid: body.uid,
        })
      );
    } else {
      Swal.fire('Error', body.message, 'error');
    }
  };
};

// prettier-ignore
export const startRegister = (email: string, password: string, name:string) => {
  return async (dispatch:Dispatch) => {
    const res = await fetchWithoutToken('auth/new', { email, password, name }, "POST")
    const body = await res.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', String(new Date().getTime()));

      dispatch(
        login({
          name: body.name,
          uid: body.uid,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  }
}

export const startChecking = () => {
  return async (dispatch: Dispatch) => {
    const res = await fetchWithToken('auth/renew');
    const body = await res.json();

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', String(new Date().getTime()));

      dispatch(
        login({
          name: body.name,
          uid: body.uid,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const login = (user: User) => ({
  type: ActionTypes.authLogin,
  payload: user,
});

const checkingFinish = () => ({ type: ActionTypes.authCheckingFinish });

export const startLogout = () => {
  return (dispatch: Dispatch) => {
    localStorage.clear();
    dispatch(logout());
    dispatch(eventLogout());
  };
};

const logout = () => ({ type: ActionTypes.authLogout });
