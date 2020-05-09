
const editButton = document.querySelector('.profile__edit-button');
const popupCloser = document.querySelector('.popup__closer');
const popup = document.querySelector('.popup');

editButton.addEventListener('click', openingPopup);

function openingPopup() {
  popup.classList.add('popup_opened');
}
popupCloser.addEventListener('click', closingPopup);

function closingPopup() {
  popup.classList.remove('popup_opened');
}

let formNamePopup = document.querySelector('#form-name');
let formDescrPopup = document.querySelector('#form-description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description')

formNamePopup.value = profileName.textContent;
formDescrPopup.value = profileDescription.textContent;


let formElenent = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = formNamePopup.value;
  profileDescription.textContent = formDescrPopup.value;
}

formElenent.addEventListener('submit', formSubmitHandler);

const saveButton = document.querySelector('.popup__button');
saveButton.addEventListener('click', closingPopup);


