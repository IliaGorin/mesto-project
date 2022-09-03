import './index.css';
import { openPopup, closePopup } from '../components/modal.js';
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
  profileAvatar,
  cardData,
  userInfo,
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
  postNewCard(cardData).then((data) => {
    cardData.name = data.name;
    cardData.link = data.link;
    cardData.owner._id = data.owner._id;
    cardData._Id = data._id;
    cardData.likes = data.likes;
    const newCard = createNewCard(cardData);
    postsArea.prepend(newCard);
  });

  formAddNewCard.reset();

  closePopup(popupAddCard);
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

// request info about profile

// postUserAvatar().then((data) => {
//   console.log(data);
// });

// handler for edit profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userInfo.name = userNameSubmit.value;
  userInfo.about = userSubtitleSubmit.value;
  postUserInfo(userInfo).then((data) => {
    console.log(data);
    userName.textContent = data.name;
    userSubtitle.textContent = data.about;
  });

  closePopup(popupEditProfile);
}

formUserInfo.addEventListener('submit', handleProfileFormSubmit);

//function for generate modal screen with image

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

enableValidation(parameters);
