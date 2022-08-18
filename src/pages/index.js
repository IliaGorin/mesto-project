import './index.css';
import {
  openPopup,
  popupEditProfile,
  popupAddCard,
  generatePopupImage,
} from '../components/modal.js';
import { addLike, delCard } from '../components/cards.js';

document.addEventListener('click', addLike);

document.addEventListener('click', delCard);

document.addEventListener('click', generatePopupImage);

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});
