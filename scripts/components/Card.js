// import { openingPopupCard, popupCardImage, popupCardCaption } from './index.js';
export default class Card {
  // Конструктор наполнения карточки
  constructor({data, handleCardClick}, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;

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
    const img = this._element.querySelector('.elements__image');
    const cap = this._element.querySelector('.elements__title');
    img.addEventListener('click', () => {
      this._handleCardClick(img, cap);
    });

  }
  // Метод лайка карточки
  _handleLike() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_liked');
  }
  // Метод удаления карточки
  _handleRemove() {
    this._element.remove();
  }
  
}