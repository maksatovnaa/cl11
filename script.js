
  // Получаем поля ввода
  const nameInput = document.querySelectorAll('.placeholder')[0];
  const numberInput = document.querySelectorAll('.placeholder')[1];
  const monthInput = document.querySelectorAll('.placeholder')[2];
  const yearInput = document.querySelectorAll('.placeholder')[3];
  const cvcInput = document.querySelectorAll('.placeholder')[4];

  // Получаем отображаемые элементы карточки
  const displayName = document.querySelector('.card-info p:first-child');
  const displayNumber = document.querySelector('.card-number');
  const displayExpiry = document.querySelector('.card-info p:last-child');
  const displayCVC = document.querySelector('.card2 p');

  // Получаем ошибки
  const numberError = document.querySelectorAll('.error')[0];
  const monthError = document.querySelectorAll('.error')[1];
  const yearError = document.querySelectorAll('.error')[2];
  const cvcError = document.querySelectorAll('.error')[3];

  // Обновление карточки при вводе
  nameInput.addEventListener('input', () => {
    displayName.textContent = nameInput.value || 'Jane Appleseed';
  });

  numberInput.addEventListener('input', () => {
    let formatted = numberInput.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    numberInput.value = formatted;
    displayNumber.textContent = formatted || '0000 0000 0000 0000';

    // Показываем ошибку если есть буквы
    if (/\D/.test(numberInput.value.replace(/\s/g, ''))) {
      numberError.style.display = 'block';
    } else {
      numberError.style.display = 'none';
    }
  });

  monthInput.addEventListener('input', updateExpiry);
  yearInput.addEventListener('input', updateExpiry);

  function updateExpiry() {
    const mm = monthInput.value;
    const yy = yearInput.value;
    displayExpiry.textContent = `${mm || '00'}/${yy || '00'}`;
  }

  cvcInput.addEventListener('input', () => {
    displayCVC.textContent = cvcInput.value || '000';
  });

  // Кнопка подтверждения
  const confirmButton = document.querySelector('button');

  confirmButton.addEventListener('click', (e) => {
    e.preventDefault();

    let error = false;

    if (monthInput.value.trim() === '') {
      monthError.style.display = 'block';
      error = true;
    } else {
      monthError.style.display = 'none';
    }

    if (yearInput.value.trim() === '') {
      yearError.style.display = 'block';
      error = true;
    } else {
      yearError.style.display = 'none';
    }

    if (cvcInput.value.trim() === '') {
      cvcError.style.display = 'block';
      error = true;
    } else {
      cvcError.style.display = 'none';
    }

    if (/\D/.test(numberInput.value.replace(/\s/g, ''))) {
      numberError.style.display = 'block';
      error = true;
    } else if (numberInput.value.trim() === '') {
      numberError.style.display = 'block';
      error = true;
    } else {
      numberError.style.display = 'none';
    }
  });
