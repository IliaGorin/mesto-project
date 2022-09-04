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
} from '../components/api.js';

// creating initial cards (from server)

Promise.all([getInitialCards(), getUserInfo()])
  .then(([initialCards, userInfo]) => {
    initialCards.forEach((item) => {
      cardData.name = item.name;
      cardData.link = item.link;
      cardData.owner._id = item.owner._id;
      cardData._Id = item._id;
      cardData.likes = item.likes;
      postsArea.append(createNewCard(cardData));

      userNameSubmit.setAttribute('value', userInfo.name);
      userSubtitleSubmit.setAttribute('value', userInfo.about);

      userName.textContent = userInfo.name;
      userSubtitle.textContent = userInfo.about;
      profileAvatar.src = userInfo.avatar;
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
      cardData.name = data.name;
      cardData.link = data.link;
      cardData.owner._id = data.owner._id;
      cardData._Id = data._id;
      cardData.likes = data.likes;
      const newCard = createNewCard(cardData);
      postsArea.prepend(newCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonCreateCard.textContent = 'Создать';
    });

  formAddNewCard.reset();

  closePopup(popupAddCard);
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
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonSaveProfile.textContent = 'Сохранить';
    });

  closePopup(popupEditProfile);
}

formUserInfo.addEventListener('submit', handleProfileFormSubmit);

// handler for update avatar

function handleEditAvatarForm(evt) {
  evt.preventDefault();

  buttonUpdateAvatar.textContent = 'Сохранение...';
  postUserAvatar(avatarLink.value)
    .then((data) => {
      profileAvatar.src = data.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      buttonUpdateAvatar.textContent = 'Сохранить';
    });
  avatarLink.value = '';

  closePopup(popupAvatar);
}

formEditAvatar.addEventListener('submit', handleEditAvatarForm);

buttonEditAvatar.addEventListener('click', () => {
  openPopup(popupAvatar);
});

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

enableValidation(parameters);
