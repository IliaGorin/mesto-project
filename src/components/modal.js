import { createNewCard, postsArea } from './cards.js';

const popupEditProfile = document.querySelector('#popupEditProfile');
const formUserInfo = document.querySelector('#user-add-info');
const formAddNewCard = document.querySelector('#add-new-mesto');
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

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// close by close-icon and by click on background
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
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

  userNameStore = userNameSubmit.value;
  userSubtitleStore = userSubtitleSubmit.value;
  userName.textContent = userNameStore;
  userSubtitle.textContent = userSubtitleStore;
  closePopup(popupEditProfile);
}

formUserInfo.addEventListener('submit', handleProfileFormSubmit);

//function for generate modal screen with image(maybe move to cards.js??)
const imageInPopup = document.querySelector('#imageInPopup');
const imagePopup = document.querySelector('#img-popup');
const headerInPopupImg = document.querySelector('.popup__image-header');

function generatePopupImage(evt) {
  if (evt.target.classList.contains('posts-area__image')) {
    openPopup(imagePopup);
    imageInPopup.src = evt.target.src;
    imageInPopup.alt = evt.target.alt;
    headerInPopupImg.textContent = evt.target
      .closest('.posts-area__post-card')
      .querySelector('.posts-area__title').textContent;
  }
}

export {
  openPopup,
  popupAddCard,
  popupEditProfile,
  generatePopupImage,
  formUserInfo,
  formAddNewCard,
};
