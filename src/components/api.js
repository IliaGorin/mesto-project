// const config = {
//   baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
//   headers: {
//     authorization: '26532032-c932-44be-aa06-105c74f5a87c',
//     'Content-Type': 'application/json',
//   },
// };

import { newCardLink } from './utils';

// export const getInitialCards = () => {
//   return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
//     headers: {
//       authorization: '26532032-c932-44be-aa06-105c74f5a87c',
//     },
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//   });
// };

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Error ${res.status}`));
};

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: '26532032-c932-44be-aa06-105c74f5a87c',
    'Content-Type': 'application/json',
  },
};

export const postUserInfo = (profileName, profileAbout) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileAbout,
    }),
  }).then((res) => checkResponse(res));
};

export const postUserAvatar = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: 'https://i.postimg.cc/mrz87w2Z/mesto-avatar.jpg',
    }),
  }).then((res) => checkResponse(res));
};

export const postNewCard = (cardName, cardLink) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ link: cardLink, name: cardName }),
  }).then((res) => checkResponse(res));
};

export const getUserInfo = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me', {
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

// DELETE https://nomoreparties.co/v1/cohortId/cards/cardId

export const delCardfromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then((res) => checkResponse(res));
};
