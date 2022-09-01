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
  profileAvatar,
} from '../components/utils.js';
import {
  getInitialCards,
  getUserInfo,
  postUserInfo,
  postNewCard,
  postUserAvatar,
} from '../components/api.js';

// creating initial cards (from server)

getInitialCards()
  .then((data) => {
    console.log(data);
    data.forEach((cardInfoFromAPI) => {
      initialCards.push({
        name: cardInfoFromAPI.name,
        link: cardInfoFromAPI.link,
      });
    });
  })
  .then(() => {
    initialCards.forEach((item) => {
      postsArea.append(createNewCard(item.link, item.name));
    });
  });

console.log(initialCards);

// handler for add new card

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  console.log(newCardTitle.value, newCardLink.value);
  const cardTitleAPI = newCardTitle.value;
  const cardLinkAPI = newCardLink.value;
  postNewCard(cardTitleAPI, cardLinkAPI).then((data) => {});
  const newCard = createNewCard(newCardLink.value, newCardTitle.value);
  postsArea.prepend(newCard);
  formAddNewCard.reset();

  closePopup(popupAddCard);
}

formAddNewCard.addEventListener('submit', handleAddCardFormSubmit);

// request info about profile

// postUserAvatar().then((data) => {
//   console.log(data);
// });

getUserInfo().then((data) => {
  userName.textContent = data.name;
  userSubtitle.textContent = data.about;
  profileAvatar.src = data.avatar;
});

// handler for edit profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  postUserInfo(userNameSubmit.value, userSubtitleSubmit.value).then((data) => {
    console.log(data);
    userName.textContent = data.name;
    userSubtitle.textContent = data.about;
  });
  // userName.textContent = userNameSubmit.value;
  // userSubtitle.textContent = userSubtitleSubmit.value;
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
