import { parameters } from './utils.js';

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(parameters.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(parameters.errorClass);
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(parameters.inputErrorClass);
  errorElement.classList.remove(parameters.errorClass);
  errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(parameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(parameters.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function setEventListenersForInputValidation(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(parameters.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    parameters.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function enableValidation(parameters) {
  const formList = Array.from(
    document.querySelectorAll(parameters.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      toggleButtonState(
        [...formElement.querySelectorAll(parameters.inputSelector)],
        formElement.querySelector(parameters.submitButtonSelector)
      );
    });
    setEventListenersForInputValidation(formElement);
  });
}

export { enableValidation, toggleButtonState };
