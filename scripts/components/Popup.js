export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
  }
  open(button) {
    button.addEventListener('click', () => {
      this._selectorPopup.classList.add('popup-opened');
    });
  }
  close() {
    this._selectorPopup.classList.remove('popup-opened');
    addEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const moduleWindow = document.querySelector('.popup-opened');
      moduleWindow.classList.remove('popup-opened');
      removeEventListener('keydown', this._handleEscClose);
    }
  }
  setEventListeners() {
    this._selectorPopup.querySelector('.popup-closer').addEventListener('click', () => {
      this.close();
    });
    this._selectorPopup.querySelector('.popup-overlay').addEventListener('click', () => {
      this.close();
    });
  }
}