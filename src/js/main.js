
import './_components.js';
import { getHeaderHeight } from "./functions/header-height.js";
getHeaderHeight();

// main.js - добавьте в начало
// if (typeof initPriceSlider === 'undefined') {
//   window.initPriceSlider = function () {
//     console.log('Функция initPriceSlider вызвана, но не реализована');
//     // Или простую реализацию
//     const slider = document.querySelector('.price-range');
//     if (slider && typeof noUiSlider !== 'undefined') {
//       noUiSlider.create(slider, {
//         start: [0, 50000],
//         connect: true,
//         range: { 'min': 0, 'max': 50000 }
//       });
//     }
//   };
// }

// Затем ваш существующий код
// document.addEventListener('DOMContentLoaded', function () {
//   // ...
//   initPriceSlider(); // Теперь функция существует
// });


// price-slider.js или добавьте в main.js
function initPriceSlider() {
  const priceSlider = document.querySelector('.price-range');

  if (!priceSlider) {
    console.log('Слайдер цены не найден');
    return;
  }

  // Проверяем, подключен ли noUiSlider
  if (typeof noUiSlider === 'undefined') {
    console.error('noUiSlider не подключен');
    return;
  }

  try {
    // Создаем слайдер
    noUiSlider.create(priceSlider, {
      start: [0, 50000],
      connect: true,
      range: {
        'min': 0,
        'max': 50000
      },
      step: 1000,
      format: {
        to: function (value) {
          return Math.round(value).toLocaleString() + ' ₽';
        },
        from: function (value) {
          return parseInt(value.replace(/\s₽/g, '').replace(/\s/g, ''));
        }
      }
    });

    // Обновляем отображение значений
    const priceValues = [
      document.querySelector('.price-min'),
      document.querySelector('.price-max')
    ];

    if (priceValues[0] && priceValues[1]) {
      priceSlider.noUiSlider.on('update', function (values, handle) {
        priceValues[handle].textContent = values[handle];
      });
    }

    console.log('Слайдер цены инициализирован');

  } catch (error) {
    console.error('Ошибка инициализации слайдера:', error);
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // Инициализируем слайдер
  initPriceSlider();

  // Можно подписаться на событие изменения цены
  document.addEventListener('price:change', function (e) {
    console.log('Цена изменена:', e.detail);
    // Здесь можно обновлять товары, делать AJAX запрос и т.д.
  });
});
