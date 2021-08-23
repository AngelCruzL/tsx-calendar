import { CustomFetch } from '../interfaces';

const baseUrl = import.meta.env.VITE_API_URL;

// prettier-ignore
export const fetchWithoutToken = (endpoint: string, data: CustomFetch, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === 'GET') return fetch(url);

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// prettier-ignore
export const fetchWithToken = (endpoint: string, data?: CustomFetch, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token')||''

  if (method === 'GET')
    return fetch(url, {
      method,
      headers: {
        'x-token': token,
      }
    });

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-token': token,
    },
    body: JSON.stringify(data),
  });
};
