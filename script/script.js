// ОбЪявляем переменные и константы
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupCloser = document.querySelector('.popup__closer');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
let formNamePopup = document.querySelector('input[name="name"]');
let formDescrPopup = document.querySelector('input[name="description"]');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElenent = document.querySelector('.popup__container');
// Массив добавления новых карточек
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

// Объявляем функцию открытия и закрытия попапа
function openingPopup() {
  popup.classList.toggle('popup_opened');
// Заполнение полей формы данными со страницы пользователя
  if(popup.classList.contains('popup_opened')){
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
formElenent.addEventListener('submit', formSubmitHandler);
// Слушатели кнопок изменить и закрыть попап
editButton.addEventListener('click', openingPopup);
popupCloser.addEventListener('click', openingPopup);
addButton.addEventListener('click', () => {
  popupAdd.classList.toggle('popup_opened');
});
 