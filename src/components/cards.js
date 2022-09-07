import { templatePostsArea } from './utils.js';
import { generatePopupImage } from './modal.js';
// import { myID } from '../pages/index.js';

// function for create new card
function createNewCard(cardData, delCard, addLike, myId) {
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

  if (
    cardData.likes.some(function (cardData) {
      return cardData._id === myId;
    })
  )
    cardLike.classList.add('posts-area__like_active');

  if (cardData.owner._id !== myId) {
    cardButtonRemove.setAttribute('style', 'display:none');
  }

  cardButtonRemove.addEventListener('click', delCard);
  cardLike.addEventListener('click', addLike);
  imgSrc.addEventListener('click', generatePopupImage);

  return postWithImg;
}

export { createNewCard };
