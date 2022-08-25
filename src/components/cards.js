import { templatePostsArea, postsArea } from './utils.js';
import { generatePopupImage } from './modal.js';

// function for create new card
function createNewCard(newCardSrc, newCardName) {
  const postWithImg = templatePostsArea.cloneNode(true);
  const imgSrc = postWithImg.querySelector('.posts-area__image');
  const cardTitle = postWithImg.querySelector('.posts-area__title');
  imgSrc.src = newCardSrc;
  imgSrc.alt = newCardName;
  cardTitle.textContent = newCardName;
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
  evt.target.classList.toggle('posts-area__like_active');
}

function delCard(evt) {
  evt.target.parentElement.remove();
}

export { createNewCard, postsArea };
