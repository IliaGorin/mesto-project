import { templatePostsArea, MY_ID } from './utils.js';
import { generatePopupImage } from './modal.js';
import { delCardfromServer, addLikeToAPI, removeLikeFromAPI } from './api.js';

// function for create new card
function createNewCard(cardData) {
  const postWithImg = templatePostsArea.cloneNode(true);
  const imgSrc = postWithImg.querySelector('.posts-area__image');
  const cardTitle = postWithImg.querySelector('.posts-area__title');
  const cardButtonRemove = postWithImg.querySelector('.posts-area__remove');
  const cardLike = postWithImg.querySelector('.posts-area__like');
  const cardLikesCounter = postWithImg.querySelector(
    '.posts-area__like-counter'
  );
  imgSrc.src = cardData.link;
  imgSrc.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  imgSrc.dataset.cardId = cardData._Id;
  imgSrc.dataset.likesCount = cardData.likes.length;
  cardLikesCounter.textContent = cardData.likes.length;

  for (let cardDataLikeInfo of cardData.likes) {
    if (cardDataLikeInfo._id === MY_ID) {
      cardLike.classList.add('posts-area__like_active');
    }
  }

  if (cardData.owner._id !== MY_ID) {
    cardButtonRemove.setAttribute('style', 'display:none');
  }
  addListenersToCard(postWithImg);
  return postWithImg;
}

// function for add like and remove button listeners for a card
function addListenersToCard(card) {
  const cardLike = card.querySelector('.posts-area__like');
  const cardButtonRemove = card.querySelector('.posts-area__remove');
  const imgSrc = card.querySelector('.posts-area__image');

  setEventListenersForCard(imgSrc, cardLike, cardButtonRemove);
}

function setEventListenersForCard(card, cardLike, cardButtonRemove) {
  card.addEventListener('click', generatePopupImage);
  cardLike.addEventListener('click', addLike);
  cardButtonRemove.addEventListener('click', delCard);
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

function delCard(evt) {
  const cardId = evt.target.previousElementSibling.dataset.cardId;
  delCardfromServer(cardId).then((data) => {});
  evt.target.parentElement.remove();
}

export { createNewCard };
