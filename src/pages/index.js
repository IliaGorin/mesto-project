import './index.css';
import { openPopup, closePopup } from '../components/modal.js';
import { createNewCard } from '../components/cards.js';
import { enableValidation } from '../components/validate.js';
import {
  popupEditProfile,
  formAddNewCard,
  formUserInfo,
  formEditAvatar,
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
  profileAvatar,
  cardData,
  userInfo,
  avatarLink,
  popupAvatar,
  buttonEditAvatar,
  buttonSaveProfile,
  buttonCreateCard,
  buttonUpdateAvatar,
} from '../components/utils.js';
import {
  getInitialCards,
  getUserInfo,
  postUserInfo,
  postNewCard,
  postUserAvatar,
  delCardfromServer,
  addLikeToAPI,
  removeLikeFromAPI,
} from '../components/api.js';

let myId = '';
function setUserInfo(userInfo) {
  userName.textContent = userInfo.name;
  userSubtitle.textContent = userInfo.about;
  profileAvatar.src = userInfo.avatar;
  myId = userInfo._id;
}

function renderCard(card) {
  cardData.name = card.name;
  cardData.link = card.link;
  cardData.owner._id = card.owner._id;
  cardData._Id = card._id;
  cardData.likes = card.likes;
}

Promise.all([getInitialCards(), getUserInfo()])
  .then(([initialCards, userInfo]) => {
    setUserInfo(userInfo);

    initialCards.forEach((item) => {
      renderCard(item);
      postsArea.append(createNewCard(cardData, delCard, addLike, myId));
    });
  })
  .catch((err) => {
    console.log(err);
  });

// handler for add new card
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  cardData.name = newCardTitle.value;
  cardData.link = newCardLink.value;
  buttonCreateCard.textContent = 'Сохранение...';
  postNewCard(cardData)
    .then((data) => {
      renderCard(data);
      postsArea.prepend(createNewCard(cardData, delCard, addLike, myId));
      formAddNewCard.reset();
      closePopup(popupAddCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonCreateCard.textContent = 'Создать';
    });
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

// handler for edit profile
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  userInfo.name = userNameSubmit.value;
  userInfo.about = userSubtitleSubmit.value;
  buttonSaveProfile.textContent = 'Сохранение...';
  postUserInfo(userInfo)
    .then((data) => {
      userName.textContent = data.name;
      userSubtitle.textContent = data.about;
      closePopup(popupEditProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveProfile.textContent = 'Сохранить';
    });
}

formUserInfo.addEventListener('submit', handleProfileFormSubmit);

// handler for update avatar
function handleEditAvatarForm(evt) {
  evt.preventDefault();

  buttonUpdateAvatar.textContent = 'Сохранение...';
  postUserAvatar(avatarLink.value)
    .then((data) => {
      profileAvatar.src = data.avatar;
      avatarLink.value = '';
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonUpdateAvatar.textContent = 'Сохранить';
    });
}

formEditAvatar.addEventListener('submit', handleEditAvatarForm);

buttonEditAvatar.addEventListener('click', () => {
  openPopup(popupAvatar);
});

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  userNameSubmit.setAttribute('value', userName.textContent);
  userSubtitleSubmit.setAttribute('value', userSubtitle.textContent);
  openPopup(popupEditProfile);
});

//card handlers
function delCard(evt) {
  const cardId = evt.target.previousElementSibling.dataset.cardId;
  delCardfromServer(cardId).then((data) => {});
  evt.target.parentElement.remove();
}

function addLike(evt) {
  const card =
    evt.target.parentElement.parentElement.parentElement.firstElementChild;
  const cardId = card.dataset.cardId;

  evt.target.classList.toggle('posts-area__like_active');

  if (evt.target.classList.contains('posts-area__like_active')) {
    addLikeToAPI(cardId).then((data) => {
      card.dataset.likesCount = data.likes.length;
      evt.target.nextElementSibling.textContent = data.likes.length;
    });
  } else {
    removeLikeFromAPI(cardId).then((data) => {
      card.dataset.likesCount = data.likes.length;
      evt.target.nextElementSibling.textContent = data.likes.length;
    });
  }
}

enableValidation(parameters);
