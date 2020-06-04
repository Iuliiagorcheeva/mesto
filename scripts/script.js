// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// ОбЪявляем переменные и константы
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloser = document.querySelector('.popup__edit-closer');
const popupCloserAdd = document.querySelector('.popup__add-closer');
const popupCloserCard = document.querySelector('.popup-card__closer');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const popupCard = document.querySelector('.popup-card');


let formNamePopup = document.querySelector('.popup__form-name');
let formDescrPopup = document.querySelector('.popup__form-description');
let formLinkPopup = document.querySelector('.popup__form-link');
let formTitlePopup = document.querySelector('.popup__form-title');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElenent = document.querySelector('.popup__container-edit');
let formElenentAdd = document.querySelector('.popup__container-add');
let popupCardImage = document.querySelector('.popup-card__image');
let popupCardCaption = document.querySelector('.popup-card__caption');


// Объявляем функцию открытия и закрытия попапа изменения данных пользователя
function openingPopup() {
  popup.classList.toggle('popup-opened');

  // Заполнение полей формы данными со страницы пользователя
  if (popup.classList.contains('popup-opened')) {
    formNamePopup.value = profileName.textContent;
    formDescrPopup.value = profileDescription.textContent;
  };
}

// Функция отправки данных из полей формы на страницу
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = formNamePopup.value;
  profileDescription.textContent = formDescrPopup.value;
  openingPopup();
}

// Функция открытия и закрытия попапа добавления карточек
function openingPopupAdd() {
  popupAdd.classList.toggle('popup-opened');
  formLinkPopup.value = "";
  formTitlePopup.value = "";
}

// Функция открытия и закрытия попапа с просмотром фотографий
function openingPopupCard() {
  popupCard.classList.toggle('popup-opened');
}

//Функция создания карточек
function addCard(item) {
  let elements = document.querySelector('.elements');
  let template = document.querySelector('#template');
  let elementsCard = template.content.querySelector('.elements__card');
  let elementsCardCopy = elementsCard.cloneNode(true);

  elementsCardCopy.querySelector('.elements__image').src = item.link;
  elementsCardCopy.querySelector('.elements__title').textContent = item.name;
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
    popupCardImage.src = elementsCardCopy.querySelector('.elements__image').src;
    popupCardCaption.textContent = elementsCardCopy.querySelector('.elements__title').textContent;
  });
}

// Создание карточек из массива
initialCards.forEach(addCard);

// Добавление элемента в массив
function addItem() {
  let arrayItem = {
    name: "",
    link: "",
  }
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

editButton.addEventListener('click', openingPopup);
addButton.addEventListener('click', openingPopupAdd);

popupCloser.addEventListener('click', openingPopup);
popupCloserAdd.addEventListener('click', openingPopupAdd);
popupCloserCard.addEventListener('click', openingPopupCard);

