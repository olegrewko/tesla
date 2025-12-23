// import vars  from "../_vars.js";

// document.addEventListener('DOMContentLoaded', function() {

// if (vars.catalogFilterBlocks.length) {
// vars.catalogFilterBlocks.forEach(block => {
// const btn = block.querySelector(".catalog-filter__btn");
// const inner = block.querySelector(".catalog-filter__inner");


// btn.addEventListener('click', (e) => {
//   block.classList.toggle('catalog-filter__block--open');
//   const isOpen = block.classList.contains('catalog-filter__block--open');

//   btn.setAttribute("aria-expanded", isOpen ? "true" : false);
//   btn.setAttribute('aria-label', isOpen ? "Закрыть блок" : "Открыть блок");

//   if (isOpen) {
//   inner.style.maxHeight = `${inner.scrollHeight}px`;
//   } else {
//   inner.style.maxHeight = null;
//   }
// });

// });
// }
// });
import vars from "../_vars.js";

document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, что переменная существует
  if (!vars || !vars.catalogFilterBlocks) {
    console.error('vars.catalogFilterBlocks не определена!');
    return;
  }

  console.log('Блоков найдено:', vars.catalogFilterBlocks.length);

  if (vars.catalogFilterBlocks.length) {
    vars.catalogFilterBlocks.forEach((block, index) => {
      const btn = block.querySelector(".catalog-filter__btn");
      const inner = block.querySelector(".catalog-filter__inner");

      // Проверяем, что элементы внутри блока найдены
      if (!btn) {
        console.error(`Не найдена кнопка в блоке ${index}`);
        return;
      }

      if (!inner) {
        console.error(`Не найден inner в блоке ${index}`);
        return;
      }

      console.log(`Настройка блока ${index}:`, { btn, inner });

      btn.addEventListener('click', (e) => {
        console.log(`Клик по блоку ${index}`);

        // Переключаем класс
        block.classList.toggle('catalog-filter__block--open');
        const isOpen = block.classList.contains('catalog-filter__block--open');

        console.log(`Состояние: ${isOpen ? 'открыт' : 'закрыт'}`);

        // Устанавливаем ARIA атрибуты
        btn.setAttribute("aria-expanded", isOpen);
        btn.setAttribute('aria-label', isOpen ? "Закрыть блок" : "Открыть блок");

        // Анимация высоты
        if (isOpen) {
          inner.style.maxHeight = `${inner.scrollHeight}px`;
          // Добавляем transition для плавности
          inner.style.transition = 'max-height 0.3s ease';
        } else {
          inner.style.maxHeight = null;
        }
      });

      // Добавляем обработчик клавиатуры для доступности
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  } else {
    console.warn('Блоки фильтра не найдены на странице');
  }
});
