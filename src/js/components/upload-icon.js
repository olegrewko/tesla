// upload-icon.js
class UploadIcon {
  constructor(container) {
    this.container = container;
    this.icon = container.querySelector('.upload-icon');
    this.init();
  }

  init() {
    // Клик по иконке
    this.container.addEventListener('click', () => {
      this.startUpload();
    });

    // Drag and drop события
    this.container.addEventListener('dragover', (e) => {
      e.preventDefault();
      this.container.classList.add('drag-over');
    });

    this.container.addEventListener('dragleave', () => {
      this.container.classList.remove('drag-over');
    });

    this.container.addEventListener('drop', (e) => {
      e.preventDefault();
      this.container.classList.remove('drag-over');
      this.handleFiles(e.dataTransfer.files);
    });

    // Добавляем прогресс бар
    this.addProgressBar();
  }

  startUpload() {
    // Сбрасываем предыдущее состояние
    this.resetState();

    // Показываем состояние загрузки
    this.container.classList.add('loading');

    // Имитация загрузки (в реальном проекте здесь будет fetch)
    this.simulateUpload();
  }

  simulateUpload() {
    // Случайный результат для демо (успех/ошибка)
    const isSuccess = Math.random() > 0.3;
    const duration = 2000 + Math.random() * 1000;

    setTimeout(() => {
      this.container.classList.remove('loading');

      if (isSuccess) {
        this.showSuccess();
      } else {
        this.showError();
      }

      // Сбрасываем через 3 секунды
      setTimeout(() => this.resetState(), 3000);
    }, duration);
  }

  showSuccess() {
    this.container.classList.add('success');

    // Отправляем событие
    this.dispatchEvent('upload-success', {
      message: 'Файл успешно загружен',
      timestamp: new Date().toISOString()
    });

    // Показываем уведомление
    this.showNotification('✅ Загрузка завершена успешно!');
  }

  showError() {
    this.container.classList.add('error');

    // Отправляем событие
    this.dispatchEvent('upload-error', {
      message: 'Ошибка при загрузке файла',
      timestamp: new Date().toISOString()
    });

    // Показываем уведомление
    this.showNotification('❌ Ошибка загрузки. Попробуйте еще раз.');
  }

  resetState() {
    this.container.classList.remove('loading', 'success', 'error', 'drag-over');
  }

  handleFiles(files) {
    if (files.length > 0) {
      this.startUpload();

      // Можно добавить обработку файлов
      console.log('Загружаемые файлы:', files);
    }
  }

  addProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'upload-progress';
    this.container.appendChild(progressBar);
  }

  dispatchEvent(name, detail) {
    const event = new CustomEvent(name, {
      detail: detail,
      bubbles: true
    });
    this.container.dispatchEvent(event);
  }

  showNotification(message) {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = 'upload-notification';
    notification.textContent = message;

    // Стили уведомления
    notification.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: white;
      color: #333;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 10000;
      animation: slideInRight 0.3s ease-out;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      border-left: 4px solid #4CAF50;
    `;

    // Для ошибки меняем цвет
    if (this.container.classList.contains('error')) {
      notification.style.borderLeftColor = '#FF5252';
    }

    document.body.appendChild(notification);

    // Удаляем через 3 секунды
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Инициализация всех иконок на странице
document.addEventListener('DOMContentLoaded', () => {
  const uploadContainers = document.querySelectorAll('.upload-container');

  uploadContainers.forEach(container => {
    new UploadIcon(container);
  });

  // Добавляем стили для анимаций уведомлений
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
