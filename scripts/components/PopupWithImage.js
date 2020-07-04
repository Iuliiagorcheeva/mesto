import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor({image, caption}, selectorPopup) {
    super(selectorPopup);
    this._image = image;
    this._caption = caption;
  }
  open(image, caption){
    this._selectorPopup.classList.add('popup-opened');
    this._image.src = image.src;
    this._image.alt = image.alt;
    this._caption.textContent = caption.textContent;
  }
}