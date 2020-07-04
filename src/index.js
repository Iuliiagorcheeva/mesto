// Импорты классов и констант
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import { initialCards } from '../scripts/array/initialCards.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

import {
  elements,
  popupCard,
  popupCardImage,
  popupCardCaption,
  formElementEdit,
  formElementAdd,
  setting,
  editButton,
  popupProfile,
  profileName,
  profileDescription,
  formNamePopup,
  formDescrPopup,
  popupAdd,
  addButton,
  formLinkPopup,
  formTitlePopup
} from '../scripts/constants/constants.js'

// ВАЛИДАЦИЯ
const formValidatorEdit = new FormValidator(setting, formElementEdit);
formValidatorEdit.enableValidation(); // Валидность формы изменения данных профиля

const formValidatorAdd = new FormValidator(setting, formElementAdd);
formValidatorAdd.enableValidation();  // Валидность формы добавления карточки

// Создание карточек на странице из массива
const section = new Section({
  items: initialCards,
  renderer: (itemCard) => {
    const card = new Card({
      data: itemCard,
      handleCardClick: (img, cap) => {
        const popupWithImage = new PopupWithImage({
          image: popupCardImage,
          caption: popupCardCaption
        }, popupCard);
        popupWithImage.open(img, cap);
        popupWithImage.setEventListeners();
      }
    }, '#template');
    const cardElement = card.generateCard();
    section.addItem(cardElement);
  }
}, elements);
section.renderItem();

// Взаимодействие поля с информацией о пользователе и формой редактирования информации
const userInfo = new UserInfo({
  name: profileName,
  info: profileDescription,
})

// Форма редактирования информации о пользователе
const popupEdit = new PopupWithForm({
  selectorPopup: popupProfile,
  submitForm: () => {
    userInfo.setUserInfo(formNamePopup, formDescrPopup);
  }
})
popupEdit.setEventListeners();
popupEdit.open(editButton);
popupEdit.close();

// Форма добавления новых карточек
const popupAdds = new PopupWithForm({
  selectorPopup: popupAdd,
  submitForm: () => {
    const arrayItem = {
      name: "",
      link: "",
    };
    arrayItem.name = formTitlePopup.value;
    arrayItem.link = formLinkPopup.value;

    initialCards.push(arrayItem);
    const card = new Card({
      data: arrayItem,
      handleCardClick: (img, cap) => {
        const popupWithImage = new PopupWithImage({
          image: popupCardImage,
          caption: popupCardCaption
        }, popupCard);
        popupWithImage.open(img, cap);
        popupWithImage.setEventListeners();
      }
    }, '#template');
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
  }
})
popupAdds.open(addButton);
popupAdds.setEventListeners();
popupAdds.close();


// СЛУШАТЕЛИ
editButton.addEventListener('click', () => {
  formValidatorEdit.resetValidation();
  formValidatorEdit.invisibleButton();
  userInfo.getUserInfo(formNamePopup, formDescrPopup);
})


addButton.addEventListener('click', () => {
  formValidatorAdd.resetValidation();
  formValidatorAdd.invisibleButton();
})
