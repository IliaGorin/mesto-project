import { createNewCard } from './cards.js';

const popupEditProfile = document.querySelector('#popupEditProfile');
const formElement = document.querySelector('#user-add-info');
const userName = document.querySelector('.profile__name');
const userSubtitle = document.querySelector('.profile__subtitle');
const userNameSubmit = document.querySelector('#profile-name');
const userSubtitleSubmit = document.querySelector('#profile-subtitle');
const popups = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('#popupNewMesto');
const newCardTitle = document.querySelector('#card-title');
const newCardLink = document.querySelector('#card-link');

// Edit profile name and subtitle
let userNameStore = 'Жак-Ив Кусто';
let userSubtitleStore = 'Исследователь океана';

userName.textContent = userNameStore;
userSubtitle.textContent = userSubtitleStore;
userNameSubmit.value = userNameStore;
userSubtitleSubmit.value = userSubtitleStore;

// functions for open and close popups

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(e) {
  if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
// close by close-icon
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  });
});

//close by click on background
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});

// add new card
const formAddNewCard = document.querySelector('#add-new-mesto');

// handler for add new card

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);
  const newCard = createNewCard(newCardLink.value, newCardTitle.value);
  postsArea.prepend(newCard);
  formAddNewCard.reset();
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupEditProfile);
  userNameStore = userNameSubmit.value;
  userSubtitleStore = userSubtitleSubmit.value;
  userName.textContent = userNameStore;
  userSubtitle.textContent = userSubtitleStore;
}

formElement.addEventListener('submit', handleProfileFormSubmit);

export { handleProfileFormSubmit, handleAddCardFormSubmit, openPopup };
