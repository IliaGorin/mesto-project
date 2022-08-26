import {
  userNameSubmit,
  userSubtitleSubmit,
  popups,
  imagePopup,
  imageInPopup,
  headerInPopupImg,
} from './utils.js';

// functions for open and close popups
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// close by close-icon and by click on background
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('popup__close-icon') ||
      evt.target.classList.contains('popup')
    ) {
      closePopup(popup);
    }
  });
});

// function for generation popup overlay with fullscreen image
function generatePopupImage(evt) {
  if (evt.target.classList.contains('posts-area__image')) {
    openPopup(imagePopup);
    imageInPopup.src = evt.target.src;
    imageInPopup.alt = evt.target.alt;
    headerInPopupImg.textContent = evt.target
      .closest('.posts-area__post-card')
      .querySelector('.posts-area__title').textContent;
  }
}

export { openPopup, closePopup, generatePopupImage };
