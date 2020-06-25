// Импорты классов
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './initialCards.js';
// ОбЪявляем переменные и константы
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloser = document.querySelector('.popup__edit-closer');
const popupCloserAdd = document.querySelector('.popup__add-closer');
const popupCloserCard = document.querySelector('.popup-card__closer');


const popupProfile = document.querySelector('.popup-profile');
const popupAdd = document.querySelector('.popup-add');
const popupCard = document.querySelector('.popup-card');
const popupEditOverlay = document.querySelector('.popup-overlay-edit');
const popupAddOverlay = document.querySelector('.popup-overlay-add');
const popupCardOverlay = document.querySelector('.popup-overlay-card');

const formNamePopup = document.querySelector('.popup__form-name');
const formDescrPopup = document.querySelector('.popup__form-description');
const formLinkPopup = document.querySelector('.popup__form-link');
const formTitlePopup = document.querySelector('.popup__form-title');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElementEdit = document.querySelector('.popup__container-edit');
const formElementAdd = document.querySelector('.popup__container-add');
export const popupCardImage = document.querySelector('.popup-card__image');
export const popupCardCaption = document.querySelector('.popup-card__caption');
const buttonAdd = popupAdd.querySelector('.popup__button'); 
const elements = document.querySelector('.elements');
const setting = {
  inputSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'popup__span-error_active'
};
const formValidatorEdit = new FormValidator(setting, formElementEdit);
formValidatorEdit.enableValidation(); // Валидность формы изменения данных профиля
const formValidatorAdd = new FormValidator(setting, formElementAdd);
formValidatorAdd.enableValidation();  // Валидность формы добавления карточки
// Фунуция закрытие попапа по Esc
function escapePressedHandler(evt) {
  if (evt.key === 'Escape') {
    const moduleWindow = document.querySelector('.popup-opened');
    moduleWindow.classList.toggle('popup-opened');
    removeEventListener('keydown', escapePressedHandler);
  }
}
// Функция открытия и закрытия попапов
function openClosePopup(popup) {
  popup.classList.toggle('popup-opened');
  addEventListener('keydown', escapePressedHandler);
  // Сброс валидации
  formValidatorAdd.resetValidation();
  formValidatorEdit.resetValidation();
}

//Функция открытия и закрытия попапа изменения данных пользователя
function openingPopupProfile() {
  openClosePopup(popupProfile);
  // Заполнение полей формы данными со страницы пользователя
  if (popupProfile.classList.contains('popup-opened')) {
    formNamePopup.value = profileName.textContent;
    formDescrPopup.value = profileDescription.textContent;
  }
}
// Функция отправки данных из полей формы на страницу
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formNamePopup.value;
  profileDescription.textContent = formDescrPopup.value;
  openClosePopup(popupProfile);
}
// Функция открытия и закрытия попапа добавления карточек
function openingPopupAdd() {
  openClosePopup(popupAdd);
  formLinkPopup.value = "";
  formTitlePopup.value = "";
  // Сброс состояния активности кнопки
  formValidatorAdd.invisibleButton();

}
// Функция открытия и закрытия попапа с просмотром фотографий
export function openingPopupCard() {
  openClosePopup(popupCard);
}

// Перебор массива, в котором к каждому элементу применяем  создание КАРТОЧКИ
initialCards.forEach((item) => {
  const card = new Card(item, '#template');
  const cardElement = card.generateCard();
  elements.append(cardElement);
});
// Функция добавления в массив новых карточек в массив
function addItem() {
  const arrayItem = {
    name: "",
    link: "",
  };
  arrayItem.name = formTitlePopup.value;
  arrayItem.link = formLinkPopup.value;
  initialCards.push(arrayItem);
  const card = new Card(arrayItem, '#template');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}
// Добавление новых карточек из формы
function formSubmitAddHandler(evt) {
  evt.preventDefault();
  addItem();
  openingPopupAdd();
}

// Слушатели 
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitAddHandler);

editButton.addEventListener('click', openingPopupProfile);
addButton.addEventListener('click', openingPopupAdd);

popupCloser.addEventListener('click', openingPopupProfile);
popupCloserAdd.addEventListener('click', openingPopupAdd);
popupCloserCard.addEventListener('click', openingPopupCard);
popupEditOverlay.addEventListener('click', openingPopupProfile);
popupAddOverlay.addEventListener('click', openingPopupAdd);
popupCardOverlay.addEventListener('click', openingPopupCard);