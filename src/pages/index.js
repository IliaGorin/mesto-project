'use strict';

import './index.css';
import * as card from '../components/cards';

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});
