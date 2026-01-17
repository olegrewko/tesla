

// form-handler.js
class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.submitBtn = document.querySelector('#submitBtn');
        this.btnText = document.querySelector('.btn-text');
        this.btnLoader = document.querySelector('.btn-loader');
        this.successMessage = document.querySelector('.form-success');

        this.init();
    }

    init() {
        // Валидация на лету
        this.form.addEventListener('input', (e) => {
            this.validateField(e.target);
        });

        // Валидация при потере фокуса
        this.form.addEventListener('blur', (e) => {
            this.validateField(e.target);
        }, true);

        // Обработка отправки формы
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });

        // Маска для телефона
        const phoneInput = this.form.querySelector('[name="phone"]');
        if (phoneInput) {
            this.initPhoneMask(phoneInput);
        }
    }

    // Маска телефона
    initPhoneMask(input) {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length === 0) return '';

            let formattedValue = '';

            if (value.length > 0) {
                formattedValue += '+7 ';
            }
            if (value.length > 1) {
                formattedValue += '(' + value.substring(1, 4);
            }
            if (value.length >= 5) {
                formattedValue += ') ' + value.substring(4, 7);
            }
            if (value.length >= 8) {
                formattedValue += '-' + value.substring(7, 9);
            }
            if (value.length >= 10) {
                formattedValue += '-' + value.substring(9, 11);
            }

            e.target.value = formattedValue;
        });
    }

    // Валидация отдельного поля
    validateField(field) {
        const errorElement = field.closest('label').querySelector('.input-error');

        if (!errorElement) return true;

        errorElement.textContent = '';
        field.classList.remove('error');
        errorElement.classList.remove('active');

        if (field.hasAttribute('required') && !field.value.trim()) {
            this.showError(field, errorElement, 'Это поле обязательно для заполнения');
            return false;
        }

        switch (field.type) {
            case 'email':
                if (!this.validateEmail(field.value)) {
                    this.showError(field, errorElement, 'Введите корректный email');
                    return false;
                }
                break;

            case 'tel':
                if (field.value && !this.validatePhone(field.value)) {
                    this.showError(field, errorElement, 'Введите корректный номер телефона');
                    return false;
                }
                break;

            case 'checkbox':
                if (!field.checked) {
                    const checkboxError = document.querySelector('.checkbox-error');
                    checkboxError.textContent = 'Необходимо согласие с политикой';
                    field.classList.add('error');
                    return false;
                }
                break;
        }

        return true;
    }

    // Валидация всей формы
    validateForm() {
        let isValid = true;
        const fields = this.form.querySelectorAll('input, textarea, select');

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    // Показать ошибку
    showError(field, errorElement, message) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
        field.classList.add('error');

        // Автоматически скрыть ошибку через 5 секунд
        setTimeout(() => {
            errorElement.classList.remove('active');
        }, 5000);
    }

    // Валидация email
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Валидация телефона
    validatePhone(phone) {
        const digits = phone.replace(/\D/g, '');
        return digits.length >= 11;
    }

    // Отправка формы
    async submitForm() {
        try {
            // Показать лоадер
            this.showLoading(true);

            // Собрать данные формы
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);

            // В реальном проекте здесь будет fetch на ваш сервер
            // Пример с использованием FormSubmit (бесплатный сервис)
            const response = await fetch('https://formsubmit.co/ajax/ваш-email@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                this.showSuccess();
                this.form.reset();
            } else {
                throw new Error(result.message || 'Ошибка отправки');
            }

        } catch (error) {
            console.error('Ошибка отправки формы:', error);
            this.showErrorNotification('Ошибка отправки формы. Попробуйте еще раз.');
        } finally {
            this.showLoading(false);
        }
    }

    // Показать/скрыть лоадер
    showLoading(isLoading) {
        if (isLoading) {
            this.btnText.style.opacity = '0.5';
            this.btnLoader.style.display = 'inline-block';
            this.submitBtn.disabled = true;
        } else {
            this.btnText.style.opacity = '1';
            this.btnLoader.style.display = 'none';
            this.submitBtn.disabled = false;
        }
    }

    // Показать сообщение об успехе
    showSuccess() {
        this.successMessage.style.display = 'block';

        // Скрыть через 5 секунд
        setTimeout(() => {
            this.successMessage.style.display = 'none';
        }, 5000);
    }

    // Показать уведомление об ошибке
    showErrorNotification(message) {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12" y2="16"></line>
            </svg>
            <span>${message}</span>
        `;

        // Стили для уведомления
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff3860;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Удалить через 5 секунд
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Инициализация формы при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     const formHandler = new FormHandler('contactForm');
// });
document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, есть ли форма на странице
  const form = document.querySelector('#contactForm');
  if (form) {
    new FormHandler('contactForm');
  } else {
    console.log('FormHandler: форма не найдена, инициализация пропущена');
  }
});


// CSS для анимаций уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
