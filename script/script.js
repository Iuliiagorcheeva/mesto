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
const popupCloserEdit = document.querySelector('#closer-edit');
const popupCloserAdd = document.querySelector('#closer-add');
const popupCloserCard = document.querySelector('#closer-card');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const popupCard = document.querySelector('.popup-card');


let formNamePopup = document.querySelector('input[name="name"]');
let formDescrPopup = document.querySelector('input[name="description"]');
let formLinkPopup = document.querySelector('input[name="link"]');
let formTitlePopup = document.querySelector('input[name="title"]');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElenent = document.querySelector('#edit-data');
let formElenentAdd = document.querySelector('#add-data');
let popupCardImage = document.querySelector('.popup-card__image');
let popupCardCaption = document.querySelector('.popup-card__caption');
let elements = document.querySelector('.elements');
let template = document.querySelector('#template');
let elementsCard = template.content.querySelector('.elements__card');

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
}

// Функция открытия и закрытия попапа с просмотром фотографий
function openingPopupCard() {
  popupCard.classList.toggle('popup-opened');
}

//Функция создания карточек
function addCard() {
  initialCards.forEach(function (item, i) {
    let elementsCardCopy = elementsCard.cloneNode(true);
    elementsCardCopy.querySelector('.elements__image').src = initialCards[i].link;
    elementsCardCopy.querySelector('.elements__title').textContent = initialCards[i].name;
    elements.append(elementsCardCopy);

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
  });

  // Добавление новых карточек
  function formSubmitAddHandler(evt) {
    evt.preventDefault();
    let elementsCardCopy = elementsCard.cloneNode(true);
    elementsCardCopy.querySelector('.elements__image').src = formLinkPopup.value;
    elementsCardCopy.querySelector('.elements__title').textContent = formTitlePopup.value;
    elements.prepend(elementsCardCopy);
    openingPopupAdd();

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
  formElenentAdd.addEventListener('submit', formSubmitAddHandler);
}
addCard();

// Слушатели 
formElenent.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openingPopup);
popupCloserEdit.addEventListener('click', openingPopup);
addButton.addEventListener('click', openingPopupAdd);
popupCloserAdd.addEventListener('click', openingPopupAdd);
popupCloserCard.addEventListener('click', openingPopupCard);

