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
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
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
const formElenent = document.querySelector('.popup__container-edit');
const formElenentAdd = document.querySelector('.popup__container-add');
const popupCardImage = document.querySelector('.popup-card__image');
const popupCardCaption = document.querySelector('.popup-card__caption');
const elements = document.querySelector('.elements');
const setting = {
  inputSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'popup__span-error_active'
};




// Фунуция закрытие попапа по Esc
function escapePressedHandler(evt) {
  if (evt.key === 'Escape') {
    popup.classList.remove('popup-opened');
    popupAdd.classList.remove('popup-opened');
    popupCard.classList.remove('popup-opened');
    removeEventListener('keydown', escapePressedHandler);
  }
}
// Объявляем функцию открытия и закрытия попапа изменения данных пользователя
function openOrClosePopup() {
  popup.classList.toggle('popup-opened');

  // Заполнение полей формы данными со страницы пользователя
  if (popup.classList.contains('popup-opened')) {
    formNamePopup.value = profileName.textContent;
    formDescrPopup.value = profileDescription.textContent;
  }
  addEventListener('keydown', escapePressedHandler);
}
// Функция отправки данных из полей формы на страницу
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = formNamePopup.value;
  profileDescription.textContent = formDescrPopup.value;
  openOrClosePopup();
}

// Функция открытия и закрытия попапа добавления карточек
function openingPopupAdd() {
  popupAdd.classList.toggle('popup-opened');
  formLinkPopup.value = "";
  formTitlePopup.value = "";
  addEventListener('keydown', escapePressedHandler);
}

// Функция открытия и закрытия попапа с просмотром фотографий
function openingPopupCard() {
  popupCard.classList.toggle('popup-opened');
  addEventListener('keydown', escapePressedHandler);
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
// Проверка валидности форм
const forms = Array.from(document.querySelectorAll('.popup__container'));
forms.forEach((item) => {
  const formValidator = new FormValidator(setting, item).enableValidation();
})

// Слушатели 
formElenent.addEventListener('submit', formSubmitHandler);
formElenentAdd.addEventListener('submit', formSubmitAddHandler);

editButton.addEventListener('click', openOrClosePopup);
addButton.addEventListener('click', openingPopupAdd);

popupCloser.addEventListener('click', openOrClosePopup);
popupCloserAdd.addEventListener('click', openingPopupAdd);
popupCloserCard.addEventListener('click', openingPopupCard);
popupEditOverlay.addEventListener('click', openOrClosePopup);
popupAddOverlay.addEventListener('click', openingPopupAdd);
popupCardOverlay.addEventListener('click', openingPopupCard);


