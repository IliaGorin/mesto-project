// Add to page initial array of cards
import Tyumen from '../images/Tyumen.jpg';
import Borjomi from '../images/Borjomi.jpg';
import BlackSea from '../images/BlackSea.jpg';
import Dombai from '../images/Dombai.jpg';
import Elbrus from '../images/Elbrus.jpg';
import Karachaevsk from '../images/Karachaevsk.jpg';

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

  imgSrc.src = newCardSrc;
  imgSrc.alt = newCardName;
  cardTitle.textContent = newCardName;

  return postWithImg;
}

function addLike(evt) {
  if (evt.target.classList.contains('posts-area__like')) {
    evt.target.classList.toggle('posts-area__like_active');
  }
}

function delCard(evt) {
  if (evt.target.classList.contains('posts-area__remove')) {
    evt.target.parentElement.remove();
  }
}

initialCards.forEach((item) => {
  postsArea.append(createNewCard(item.link, item.name));
});

export { createNewCard, postsArea, addLike, delCard };
