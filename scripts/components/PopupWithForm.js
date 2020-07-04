import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, submitForm }) {
    super(selectorPopup);
    
    this._submitForm = submitForm;
  }

  _getInputValues() {
    this._inputList = this._selectorPopup.querySelectorAll('.popup__form');

    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;

  }
  setEventListeners() {
    super.setEventListeners();
    this._selectorPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      super.close();
      this._selectorPopup.querySelector('.popup__container').reset();
    });
  }
  close() {
    super.close();
    const resetForm = this._selectorPopup.querySelector('.popup__container');
    this._selectorPopup.querySelector('.popup-closer').addEventListener('click', () => {
      resetForm.reset();
    });
    this._selectorPopup.querySelector('.popup-overlay').addEventListener('click', () => {
      resetForm.reset();
    });
  }
}