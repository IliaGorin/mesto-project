import './index.css';
import {
  openPopup,
  closePopup,
  generatePopupImage,
} from '../components/modal.js';
import { createNewCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import {
  popupEditProfile,
  formAddNewCard,
  formUserInfo,
  buttonAddCard,
  buttonEditProfile,
  parameters,
  popupAddCard,
  postsArea,
  newCardLink,
  newCardTitle,
  userName,
  userNameSubmit,
  userSubtitle,
  userSubtitleSubmit,
  initialCards,
} from '../components/utils.js';

// creating initial cards
initialCards.forEach((item) => {
  postsArea.append(createNewCard(item.link, item.name));
});

// handler for add new card

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = createNewCard(newCardLink.value, newCardTitle.value);

  postsArea.prepend(newCard);
  formAddNewCard.reset();

  closePopup(popupAddCard);
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

// handler for edit profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  userName.textContent = userNameSubmit.value;
  userSubtitle.textContent = userSubtitleSubmit.value;
  closePopup(popupEditProfile);
}

formUserInfo.addEventListener('submit', handleProfileFormSubmit);

//function for generate modal screen with image(maybe move to cards.js??)

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

enableValidation(parameters);
