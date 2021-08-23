import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import { fetchWithoutToken } from '../helpers/fetch';
import { User } from '../interfaces';
import { ActionTypes } from '../types/types';

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

const login = (user: User) => ({
  type: ActionTypes.authLogin,
  payload: user,
});
