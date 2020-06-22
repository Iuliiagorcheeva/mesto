export class Card{
  // Конструктор наполнения карточки
  constructor(data, cardSelector){
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  
  }
  // Получение шаблона карточки
  _getTemplate(){
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);

    return cardElement;
  }
  // Создание карточки, соединяем шаблон и элементы наполнения
  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__image').src = this._image;
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
  // Метод удаления карточки
  _handleRemove() {
    this._element.remove();
  }
  // Метод просмотра карточки
  _handleShow(){
    openingPopupCard();
    popupCardImage.src = this._element.querySelector('.elements__image').src;
    popupCardCaption.textContent = this._element.querySelector('.elements__title').textContent;
  }
}