// const config = {
//   baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
//   headers: {
//     authorization: '26532032-c932-44be-aa06-105c74f5a87c',
//     'Content-Type': 'application/json',
//   },
// };

import { cardData, newCardLink, config } from './utils';

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

export const postUserInfo = (userInfo) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: userInfo.name,
      about: userInfo.about,
    }),
  }).then((res) => checkResponse(res));
};

export const postUserAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: 'https://i.postimg.cc/mrz87w2Z/mesto-avatar.jpg',
    }),
  }).then((res) => checkResponse(res));
};

export const postNewCard = (cardData) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ link: cardData.link, name: cardData.name }),
  }).then((res) => checkResponse(res));
};

export const getUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

export const delCardfromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

export const addLikeToAPI = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  }).then((res) => checkResponse(res));
};

export const removeLikeFromAPI = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then((res) => checkResponse(res));
};
