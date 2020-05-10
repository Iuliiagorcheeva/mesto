// ОбЪявляем переменные и константы
const editButton = document.querySelector('.profile__edit-button');
const popupCloser = document.querySelector('.popup__closer');
const popup = document.querySelector('.popup');
let formNamePopup = document.querySelector('input[name="name"]');
let formDescrPopup = document.querySelector('input[name="description"]');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formElenent = document.querySelector('.popup__container');

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
 