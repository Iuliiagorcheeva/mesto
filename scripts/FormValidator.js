export class FormValidator {
  constructor(data, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }
  // Метод, который добавляет класс с ошибкой, выводит сообщение с ошибкой
  _showInputError(formInput, errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${formInput.id}-error`);
    formInput.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  // Метод, который удаляет класс с ошибкой, убирает сообщение об ошибке
  _hideInputError(formInput) {
    const errorElement = this._formSelector.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
  // Метод, который скрывает и показывает ошибку
  _showHideError(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  }
  // Метод, который принимает массив невалидных полей
  _hasInvalidInput(inputList) {
    return inputList.some((item) => {
      return !item.validity.valid;
    });
  }
  //  Метод, который принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
  _toggleButtonState(inputList) {
    const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }
  // метод добавления слушателя всем полям формы
  _setEventListeners(formInput) {
    const inputList = Array.from(this._formSelector.querySelectorAll(formInput));
    this._toggleButtonState(inputList);
    inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._showHideError(formInput);
        this._toggleButtonState(inputList);
      })
    })
  }
  // Метод добавления слушателей форме
  enableValidation() {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setEventListeners(this._inputSelector);
    });
    this._setEventListeners(this._inputSelector);
  }
  // Скрытие ошибки валидации 
  resetValidation() {
    const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    inputList.forEach((formInput) => {
      this._hideInputError(formInput);
    })
  }
}


