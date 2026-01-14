import GraphModal from 'graph-modal';
const modal = new GraphModal();
// Добавьте этот код к существующему скрипту
function setupFormSteps() {
  const firstStep = document.querySelector('.enter-modal__step--first');
  const secondStep = document.querySelector('.enter-modal__step--second');
  const form = document.querySelector('.enter-modal__form');
  const backBtn = document.querySelector('.enter-modal__back');

  if (!firstStep || !secondStep) return;

  // По умолчанию показываем первый шаг
  firstStep.classList.add('enter-modal__step--active');
  secondStep.classList.remove('enter-modal__step--active');

  // Обработка отправки формы (переход на второй шаг)
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const phoneInput = this.querySelector('input[name="phone"]');
      if (phoneInput && phoneInput.value.trim()) {
        // Переключаем шаги
        firstStep.classList.remove('enter-modal__step--active');
        secondStep.classList.add('enter-modal__step--active');

        // Фокус на поле для кода
        setTimeout(() => {
          const codeInput = secondStep.querySelector('input[name="code"]');
          if (codeInput) codeInput.focus();
        }, 100);
      }
    });
  }

  // Кнопка "Назад" на втором шаге
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      secondStep.classList.remove('enter-modal__step--active');
      firstStep.classList.add('enter-modal__step--active');

      // Фокус на поле телефона
      setTimeout(() => {
        const phoneInput = firstStep.querySelector('input[name="phone"]');
        if (phoneInput) phoneInput.focus();
      }, 100);
    });
  }
}

// Вызовите эту функцию после открытия модального окна
// И при инициализации страницы
document.addEventListener('DOMContentLoaded', setupFormSteps);
