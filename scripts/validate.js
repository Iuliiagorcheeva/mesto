// Вынесем все необходимые элементы формы в константы
// const formElement = document.querySelector('.popup__container');
// const formInput = formElement.querySelector('.popup__form');
// const formError = formElement.querySelector(`#${formInput.id}-error`);


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

  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};
// Функция, которая добавит полям нужные обработчики событий
const setEventListeners = (formElement) => {
  // Находим все поля внутри формы
  const inputList = Array.from(formElement.querySelectorAll('.popup__form'));

  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput)
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

enableValidation();

// // Слушатели событий
// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });
// // Вызовем функцию isValid на каждый ввод символа
// formInput.addEventListener('input', isValid);