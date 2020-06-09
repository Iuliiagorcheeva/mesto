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

// Функция проверки валидности заполнения полей форм
enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__form_error',
  errorClass: 'popup__span-error_active'
});

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


//Функция создания карточек
function addCard(item) {
  const elements = document.querySelector('.elements');
  const template = document.querySelector('#template');
  const elementsCard = template.content.querySelector('.elements__card');
  const elementsCardCopy = elementsCard.cloneNode(true);
  const elementsCardImage = elementsCardCopy.querySelector('.elements__image');
  const elementsCardTitle = elementsCardCopy.querySelector('.elements__title');

  elementsCardImage.src = item.link;
  elementsCardTitle.textContent = item.name;
  elements.prepend(elementsCardCopy);

  // Лайки
  elementsCardCopy.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_liked');
  });

  // Удаление
  elementsCardCopy.querySelector('.elements__waste').addEventListener('click', function () {
    elementsCardCopy.remove();
  });

  // Просмотр
  elementsCardCopy.querySelector('.elements__image').addEventListener('click', function () {
    openingPopupCard();
    popupCardImage.src = elementsCardImage.src;
    popupCardCaption.textContent = elementsCardTitle.textContent;
  });
}

// Создание карточек из массива
initialCards.forEach(addCard);

// Добавление элемента в массив
function addItem() {
  const arrayItem = {
    name: "",
    link: "",
  };
  arrayItem.name = formTitlePopup.value;
  arrayItem.link = formLinkPopup.value;
  initialCards.push(arrayItem);
  addCard(arrayItem);
}

// Добавление новых карточек из формы
function formSubmitAddHandler(evt) {
  evt.preventDefault();
  addItem();
  openingPopupAdd();
}

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

