'use strict';
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#popupEditProfile');
const formElement = document.querySelector('#user-add-info');
const userName = document.querySelector('.profile__name');
const userSubtitle = document.querySelector('.profile__subtitle');
const userNameSubmit = document.querySelector('#profile-name');
const userSubtitleSubmit = document.querySelector('#profile-subtitle');
const imageInPopup = document.querySelector('#imageInPopup');
const headerInPopupImg = document.querySelector('.popup__image-header');
const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  });
});

// Edit profile name and subtitle
let userNameStore = 'Жак-Ив Кусто';
let userSubtitleStore = 'Исследователь океана';

userName.textContent = userNameStore;
userSubtitle.textContent = userSubtitleStore;
userNameSubmit.value = userNameStore;
userSubtitleSubmit.value = userSubtitleStore;

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

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupEditProfile);
  userNameStore = userNameSubmit.value;
  userSubtitleStore = userSubtitleSubmit.value;
  userName.textContent = userNameStore;
  userSubtitle.textContent = userSubtitleStore;
}

formElement.addEventListener('submit', handleProfileFormSubmit);

// Add to page initial array of cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
const templatePostsArea = document.querySelector('#template-posts-area').content;

const postsArea = document.querySelector('.posts-area__posts-list');

// function for create new card, also add like and remove button listeners for a new card
function createNewCard(newCardSrc, newCardName) {
  const postWithImg = templatePostsArea.cloneNode(true);
  const imgSrc = postWithImg.querySelector('.posts-area__image');
  const cardTitle = postWithImg.querySelector('.posts-area__title');
  const buttonLike = postWithImg.querySelector('.posts-area__like');
  const buttonRemove = postWithImg.querySelector('.posts-area__remove');
  const imagePopup = document.querySelector('#img-popup');

  imgSrc.src = newCardSrc;
  imgSrc.alt = newCardName;
  cardTitle.textContent = newCardName;

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('posts-area__like_active');
  });

  buttonRemove.addEventListener('click', () => {
    buttonRemove.parentElement.remove();
  });

  imgSrc.addEventListener('click', () => {
    openPopup(imagePopup);
    imageInPopup.src = imgSrc.src;
    imageInPopup.alt = imgSrc.alt;
    headerInPopupImg.textContent = cardTitle.textContent;
  });

  return postWithImg;
}

initialCards.forEach((item) => {
  const newCard = createNewCard(item.link, item.name);
  postsArea.append(newCard);
});

// popup for add a new card
const buttonAddCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#popupNewMesto');
const newCardTitle = document.querySelector('#card-title');
const newCardLink = document.querySelector('#card-link');

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// add new card
const formAddNewCard = document.querySelector('#add-new-mesto');

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);
  const newCard = createNewCard(newCardLink.value, newCardTitle.value);
  postsArea.prepend(newCard);
  formAddNewCard.reset();
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});
