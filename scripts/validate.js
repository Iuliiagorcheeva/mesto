// Функция, которая добавляет класс с ошибкой, выводит сообщение с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
  const errorElement = formElement.querySelector(`#${formInput.id}-error`);

  formInput.classList.add('popup__form_error');

  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__span-error_active');
};

// Функция, которая удаляет класс с ошибкой, убирает сообщение об ошибке
const hideInputError = (formElement, formInput) => {
  const errorElement = formElement.querySelector(`#${formInput.id}-error`);

  formInput.classList.remove('popup__form_error');

  errorElement.classList.remove('popup__span-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formInput) => {
  if (!formInput.validity.valid) {
    return !formInput.validity.valid;
  }
};

// Функция, которая скрывает и показывает ошибку
const showHideError = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};


// Функция, которая принимает массив невалидных полей
const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
    buttonElement.removeAttribute('disabled');
  }
};

// Функция, которая добавит полям нужные обработчики событий
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      showHideError(formElement, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Функция добавления слушателей формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__container'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

