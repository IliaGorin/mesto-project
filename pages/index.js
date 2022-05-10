'use strict';
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('#popupEditProfile');
const buttonCloseProfile = popupEditProfile.querySelector('.popup__close-icon');

const formElement = document.querySelector('#user-add-info');
const userName = document.querySelector('.profile__name');
const userSubtitle = document.querySelector('.profile__subtitle');
const userNameSubmit = document.querySelector('#profile-name');
const userSubtitleSubmit = document.querySelector('#profile-subtitle');

const imageInPopup = document.querySelector('#imageInPopup');
const headerInPopupImg = document.querySelector('.popup__image-header');

// Edit profile name and subtitle
let userNameStore = 'Жак-Ив Кусто';
let userSubtitleStore = 'Исследователь океана';

userName.textContent = userNameStore;
userSubtitle.textContent = userSubtitleStore;
userNameSubmit.value = userNameStore;
userSubtitleSubmit.value = userSubtitleStore;

function addListenerForEscape(popupType) {
  document.addEventListener('keydown', function listener(e) {
    if (e.key === 'Escape') {
      popupType.classList.remove('popup_opened');
      document.removeEventListener('keydown', listener);
    }
  });
}

buttonEditProfile.addEventListener('click', () => {
  popupEditProfile.classList.add('popup_opened');
  addListenerForEscape(popupEditProfile);
});

buttonCloseProfile.addEventListener('click', () => {
  popupEditProfile.classList.remove('popup_opened');
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  popupEditProfile.classList.remove('popup_opened');
  userNameStore = userNameSubmit.value;
  userSubtitleStore = userSubtitleSubmit.value;
  userName.textContent = userNameStore;
  userSubtitle.textContent = userSubtitleStore;
}

formElement.addEventListener('submit', formSubmitHandler);

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
const templatePostsArea = document.querySelector(
  '#template-posts-area'
).content;

const postsArea = document.querySelector('.posts-area__posts-list');

// function for create new card, also add like and remove button listeners for a new card
function addNewCard(newCardSrc, newCardName) {
  const postWithImg = templatePostsArea.cloneNode(true);
  const imgSrc = postWithImg.querySelector('.posts-area__image');
  const cardTitle = postWithImg.querySelector('.posts-area__title');
  const buttonLike = postWithImg.querySelector('.posts-area__like');
  const buttonRemove = postWithImg.querySelector('.posts-area__remove');
  const cardForRemove = buttonRemove.parentElement;
  const imagePopup = document.querySelector('#img-popup');

  imgSrc.src = newCardSrc;
  cardTitle.textContent = newCardName;

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('posts-area__like_active');
  });

  buttonRemove.addEventListener('click', () => {
    cardForRemove.remove();
  });

  imgSrc.addEventListener('click', () => {
    imagePopup.classList.add('popup_opened');
    addListenerForEscape(imagePopup);
    imageInPopup.src = imgSrc.src;
    headerInPopupImg.textContent = cardTitle.textContent;
  });

  postsArea.prepend(postWithImg);
}

initialCards.forEach((item) => {
  addNewCard(item.link, item.name);
});
// popup for add a new card
const buttonAddCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('#popupNewMesto');
const buttonCloseAdd = popupAddCard.querySelector('.popup__close-icon');
const newCardTitle = document.querySelector('#card-title');
const newCardLink = document.querySelector('#card-link');

buttonAddCard.addEventListener('click', () => {
  popupAddCard.classList.add('popup_opened');
  addListenerForEscape(popupAddCard);
});

buttonCloseAdd.addEventListener('click', () => {
  popupAddCard.classList.remove('popup_opened');
});
// add new card
const formAddNewCard = document.querySelector('#add-new-mesto');

function formSubmitHandlerAddCard(evt) {
  evt.preventDefault();
  popupAddCard.classList.remove('popup_opened');
  addNewCard(newCardLink.value, newCardTitle.value);
  formAddNewCard.reset();
}

formAddNewCard.addEventListener('submit', formSubmitHandlerAddCard);

//popup large image

const imagePopupContainer = document.querySelector('#img-popup');
const buttonCloseImage =
  imagePopupContainer.querySelector('.popup__close-icon');
buttonCloseImage.addEventListener('click', () => {
  imagePopupContainer.classList.remove('popup_opened');
});
