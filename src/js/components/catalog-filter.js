 import vars  from "../_vars.js";


// Защита от двойного выполнения
if (window.catalogFilterInitialized) {
  console.log('Фильтр уже инициализирован');
} else {
  window.catalogFilterInitialized = true;

  document.addEventListener('DOMContentLoaded', function () {
    console.log('=== ИНИЦИАЛИЗАЦИЯ ФИЛЬТРА ===');

    if (!vars?.catalogFilterBlocks?.length) {
      console.warn('Блоки фильтра не найдены');
      return;
    }

    console.log('Блоков найдено:', vars.catalogFilterBlocks.length);

    vars.catalogFilterBlocks.forEach((block, index) => {
      const btn = block.querySelector('.catalog-filter__btn');
      const inner = block.querySelector('.catalog-filter__inner');

      if (!btn || !inner) {
        console.error(`Не найдены элементы в блоке ${index}`);
        return;
      }

      console.log(`Блок ${index}: inner.scrollHeight = ${inner.scrollHeight}px`);

      // Инициализация состояний
      if (block.classList.contains('catalog-filter__block--open')) {
        // Блок открыт
        inner.style.maxHeight = inner.scrollHeight + 'px';
        inner.style.opacity = '1';
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Закрыть блок');
      } else {
        // Блок закрыт
        inner.style.maxHeight = '0';
        inner.style.opacity = '0';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Открыть блок');
      }

      // Обработчик клика
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = block.classList.contains('catalog-filter__block--open');
        const willBeOpen = !isOpen;

        console.log(`Клик по блоку ${index}: ${isOpen ? 'закрываем' : 'открываем'}`);

        // Переключаем класс
        block.classList.toggle('catalog-filter__block--open');

        // Обновляем ARIA
        btn.setAttribute('aria-expanded', willBeOpen);
        btn.setAttribute('aria-label', willBeOpen ? 'Закрыть блок' : 'Открыть блок');

        // Анимация
        if (willBeOpen) {
          // Открываем
          inner.style.maxHeight = inner.scrollHeight + 'px';
          inner.style.opacity = '1';
        } else {
          // Закрываем
          inner.style.maxHeight = '0';
          inner.style.opacity = '0';
        }
      });

      // Обработчик клавиатуры
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    console.log('=== ФИЛЬТР ИНИЦИАЛИЗИРОВАН ===');
  });
}
