// Add to page initial array of cards
import Tyumen from '../images/Tyumen.jpg';
import Borjomi from '../images/Borjomi.jpg';
import BlackSea from '../images/BlackSea.jpg';
import Dombai from '../images/Dombai.jpg';
import Elbrus from '../images/Elbrus.jpg';
import Karachaevsk from '../images/Karachaevsk.jpg';
import { openPopup } from './modal.js';

const imageInPopup = document.querySelector('#imageInPopup');
const headerInPopupImg = document.querySelector('.popup__image-header');

const initialCards = [
  {
    name: 'Тюмень',
    link: Tyumen,
  },
  {
    name: 'Боржоми',
    link: Borjomi,
  },
  {
    name: 'Черное море',
    link: BlackSea,
  },
  {
    name: 'Домбай',
    link: Dombai,
  },
  {
    name: 'Эльбрус',
    link: Elbrus,
  },
  {
    name: 'Карачаевск',
    link: Karachaevsk,
  },
];

const templatePostsArea = document.querySelector(
  '#template-posts-area'
).content;

const postsArea = document.querySelector('.posts-area__posts-list');

// function for create new card, also add like and remove button listeners for a new card
function createNewCard(newCardSrc, newCardName) {
  const postWithImg = templatePostsArea.cloneNode(true);
  const imgSrc = postWithImg.querySelector('.posts-area__image');
  const cardTitle = postWithImg.querySelector('.posts-area__title');
  const buttonLike = postWithImg.querySelector('.posts-area__like');
  const buttonRemove = postWithImg.querySelector('.posts-area__remove');
  const imagePopup = document.querySelector('#img-popup');

  imgSrc.src = newCardSrc;
  imgSrc.alt = newCardName;
  cardTitle.textContent = newCardName;

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('posts-area__like_active');
  });

  buttonRemove.addEventListener('click', () => {
    buttonRemove.parentElement.remove();
  });

  imgSrc.addEventListener('click', () => {
    openPopup(imagePopup);
    imageInPopup.src = imgSrc.src;
    imageInPopup.alt = imgSrc.alt;
    headerInPopupImg.textContent = cardTitle.textContent;
  });

  return postWithImg;
}

initialCards.forEach((item) => {
  const newCard = createNewCard(item.link, item.name);
  postsArea.append(newCard);
});

export { createNewCard };
