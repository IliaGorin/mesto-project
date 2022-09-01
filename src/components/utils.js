// Add to page initial array of cards
import Tyumen from '../images/Tyumen.jpg';
import Borjomi from '../images/Borjomi.jpg';
import BlackSea from '../images/BlackSea.jpg';
import Dombai from '../images/Dombai.jpg';
import Elbrus from '../images/Elbrus.jpg';
import Karachaevsk from '../images/Karachaevsk.jpg';

const initialCards = [];
// {
//   name: 'Тюмень',
//   link: Tyumen,
// },
// {
//   name: 'Боржоми',
//   link: Borjomi,
// },
// {
//   name: 'Черное море',
//   link: BlackSea,
// },
// {
//   name: 'Домбай',
//   link: Dombai,
// },
// {
//   name: 'Эльбрус',
//   link: Elbrus,
// },
// {
//   name: 'Карачаевск',
//   link: Karachaevsk,
// },

const popupEditProfile = document.querySelector('#popupEditProfile');
const formUserInfo = document.forms['user-add-info'];
const formAddNewCard = document.forms['add-new-mesto'];
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
const buttonAddCard = document.querySelector('.profile__add-button');
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

export {
  initialCards,
  popupEditProfile,
  formUserInfo,
  formAddNewCard,
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
  buttonAddCard,
  imageInPopup,
  imagePopup,
  headerInPopupImg,
  parameters,
  templatePostsArea,
  profileAvatar,
};
