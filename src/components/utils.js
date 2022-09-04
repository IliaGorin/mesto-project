const MY_ID = '07e030ff3f0c4352079f4dab';

const popupEditProfile = document.querySelector('#popupEditProfile');
const formUserInfo = document.forms['user-add-info'];
const formAddNewCard = document.forms['add-new-mesto'];
const formEditAvatar = document.forms['edit-avatar'];
const avatarLink = document.querySelector('#avatar-link');
const popupAvatar = document.querySelector('#popupEditAvatar');
const userName = document.querySelector('.profile__name');
const userSubtitle = document.querySelector('.profile__subtitle');
const userNameSubmit = document.querySelector('#profile-name');
const userSubtitleSubmit = document.querySelector('#profile-subtitle');
const popups = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('#popupNewMesto');
const newCardTitle = document.querySelector('#card-title');
const newCardLink = document.querySelector('#card-link');
const postsArea = document.querySelector('.posts-area__posts-list');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonSaveProfile = document.querySelector('#save-profile-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCreateCard = document.querySelector('#create-card-button');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');
const buttonUpdateAvatar = document.querySelector('#button-update-avatar');
const imageInPopup = document.querySelector('#imageInPopup');
const imagePopup = document.querySelector('#img-popup');
const headerInPopupImg = document.querySelector('.popup__image-header');
const profileAvatar = document.querySelector('.profile__avatar');
const templatePostsArea = document.querySelector(
  '#template-posts-area'
).content;

const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: '26532032-c932-44be-aa06-105c74f5a87c',
    'Content-Type': 'application/json',
  },
};

const cardData = {
  name: '',
  link: '',
  _Id: '',
  likes: '',
  owner: '',
  createdAt: '',
  owner: {
    name: '',
    about: '',
    _id: '',
    avatar: '',
  },
};

const userInfo = {
  name: '',
  about: '',
  _id: '',
  avatar: '',
};

export {
  config,
  MY_ID,
  popupEditProfile,
  formUserInfo,
  formAddNewCard,
  formEditAvatar,
  userName,
  userSubtitle,
  userNameSubmit,
  userSubtitleSubmit,
  popups,
  popupAddCard,
  newCardTitle,
  newCardLink,
  postsArea,
  buttonEditProfile,
  buttonSaveProfile,
  buttonAddCard,
  buttonCreateCard,
  imageInPopup,
  imagePopup,
  headerInPopupImg,
  parameters,
  templatePostsArea,
  profileAvatar,
  cardData,
  userInfo,
  avatarLink,
  popupAvatar,
  buttonEditAvatar,
  buttonUpdateAvatar,
};
