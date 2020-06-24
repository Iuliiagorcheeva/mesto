import { openingPopupCard, popupCardImage, popupCardCaption } from './index.js';
export class Card {
  // Конструктор наполнения карточки
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;

  }
  // Получение шаблона карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }
  // Создание карточки, соединяем шаблон и элементы наполнения
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const image = this._element.querySelector('.elements__image');
    image.src = this._image;
    image.alt = 'Загрузка изображения ' + this._title;
    this._element.querySelector('.elements__title').textContent = this._title;

    return this._element;
  }
  // Слушатели событий
  _setEventListeners() {
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.elements__waste').addEventListener('click', () => {
      this._handleRemove();
    });
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleShow();
    });

  }
  // Метод лайка карточки
  _handleLike() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_liked');
  }
  // Метод удаления карточки. Не совсем поняла про зануление карточки после удаления. Если ли какая-то информация в интернете по этому поводу, сама не нашла((
  _handleRemove() {
    this._element.remove();
  }
  // Метод просмотра карточки
  _handleShow() {
    openingPopupCard();
    const image = this._element.querySelector('.elements__image');
    popupCardImage.alt = image.alt;
    popupCardImage.src = image.src;
    popupCardCaption.textContent = this._element.querySelector('.elements__title').textContent;
  }
}