
// ОбЪявляем переменные и константы
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloserEdit = document.querySelector('#closer-edit');
const popupCloserAdd = document.querySelector('#closer-add');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');


let formNamePopup = document.querySelector('input[name="name"]');
let formDescrPopup = document.querySelector('input[name="description"]');
let formLinkPopup = document.querySelector('input[name="link"]');
let formTitlePopup = document.querySelector('input[name="title"]');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElenent = document.querySelector('#edit-data');
let formElenentAdd = document.querySelector('#add-data');
// // Шаблон
let elements = document.querySelector('.elements');
let template = document.querySelector('#template');
let elementsCard = template.content.querySelector('.elements__card');
let elementsCardCopy = elementsCard.cloneNode(true);
const likeButton = elementsCardCopy.querySelector('.elements__like');



// Объявляем функцию открытия и закрытия попапа изменения данных пользователя
function openingPopup() {
  popup.classList.toggle('popup_opened');

  // Заполнение полей формы данными со страницы пользователя
  if (popup.classList.contains('popup_opened')) {
    formNamePopup.value = profileName.textContent;
    formDescrPopup.value = profileDescription.textContent;
  }
}

// Задаем функцию отправки данных из полей формы на страницу
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = formNamePopup.value;
  profileDescription.textContent = formDescrPopup.value;
  openingPopup();
}

// Функция открытия и закрытия попапа добавления карточек
function openingPopupAdd() {
  popupAdd.classList.toggle('popup_opened');
}

//Функция создания карточек
function addCard(link, name) {
  let elements = document.querySelector('.elements');
  let template = document.querySelector('#template');
  let elementsCard = template.content.querySelector('.elements__card');
  let elementsCardCopy = elementsCard.cloneNode(true);


  elementsCardCopy.querySelector('.elements__image').src = link;
  elementsCardCopy.querySelector('.elements__title').textContent = name;

  elements.append(elementsCardCopy);
}

addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', 'Архыз');
addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', 'Челябинская область');
addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', 'Иваново');
addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', 'Камчатка');
addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', 'Холмогорский район');
addCard('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', 'Байкал');


// Функция добавления новых карточек
function formSubmitAddHandler(evt) {
  evt.preventDefault();

  let elements = document.querySelector('.elements');
  let template = document.querySelector('#template');
  let elementsCard = template.content.querySelector('.elements__card');
  let elementsCardCopy = elementsCard.cloneNode(true);

  elementsCardCopy.querySelector('.elements__image').src = formLinkPopup.value;
  elementsCardCopy.querySelector('.elements__title').textContent = formTitlePopup.value;
  elements.prepend(elementsCardCopy);

  addCard(formLinkPopup.value, formNamePopup.value); // Функция добавления информации в шаблон
  openingPopupAdd();
}




// Слушатели 
formElenent.addEventListener('submit', formSubmitHandler);
formElenentAdd.addEventListener('submit', formSubmitAddHandler);

editButton.addEventListener('click', openingPopup);
popupCloserEdit.addEventListener('click', openingPopup);
addButton.addEventListener('click', openingPopupAdd);
popupCloserAdd.addEventListener('click', openingPopupAdd);

likeButton.addEventListener('click', function like() {
  // const eventTarget = evt.target;
  likeButton.classList.toggle('elements__like_liked');
});

console.log(likeButton);
console.log(like);