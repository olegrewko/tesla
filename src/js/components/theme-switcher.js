// theme-switcher.js
class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.querySelector('.theme-toggle');
    this.init();
  }

  init() {
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);

    // Вешаем обработчик
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Меняем текст/иконку
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
      }
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
