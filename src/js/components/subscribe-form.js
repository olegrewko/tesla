// import { validateForms } from '../functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
document.addEventListener('DOMContentLoaded', function () {
  const subscribeForm = document.querySelector('.subscribe__form');
  const emailInput = document.querySelector('.subscribe__input');

  if (subscribeForm) {
    // Создаем элемент для сообщений
    const messageEl = document.createElement('div');
    messageEl.className = 'subscribe__message';
    subscribeForm.parentNode.insertBefore(messageEl, subscribeForm.nextSibling);

    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();

      // Сброс предыдущих сообщений
      messageEl.className = 'subscribe__message';
      messageEl.textContent = '';

      // Простая валидация email
      if (!email) {
        showMessage('Пожалуйста, введите email адрес', 'error');
        emailInput.focus();
        return;
      }

      if (!isValidEmail(email)) {
        showMessage('Пожалуйста, введите корректный email адрес', 'error');
        emailInput.focus();
        return;
      }

      // Имитация отправки
      showMessage('Подписка оформлена! Проверьте вашу почту.', 'success');
      emailInput.value = '';

      // В реальном проекте здесь будет AJAX запрос
      // setTimeout(() => {
      //   messageEl.style.display = 'none';
      // }, 5000);
    });

    function showMessage(text, type) {
      messageEl.textContent = text;
      messageEl.className = `subscribe__message ${type}`;

      // Автоматически скрыть через 5 секунд
      setTimeout(() => {
        messageEl.style.opacity = '0';
        setTimeout(() => {
          messageEl.className = 'subscribe__message';
          messageEl.style.opacity = '1';
        }, 300);
      }, 5000);
    }

    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // Анимация при фокусе на мобильных
    if (window.innerWidth <= 768) {
      emailInput.addEventListener('focus', function () {
        window.scrollTo({
          top: subscribeForm.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    }
  }
});
