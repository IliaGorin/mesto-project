import './index.css';
import {
  openPopup,
  popupEditProfile,
  popupAddCard,
  generatePopupImage,
  formUserInfo,
  formAddNewCard,
} from '../components/modal.js';
import { addLike, delCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';

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

const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

enableValidation(parameters);

export { parameters };
