import  "simplebar";
import './_components.js';
import { getHeaderHeight } from "./functions/header-height.js";
getHeaderHeight();
// В вашем основном JS файле (например, main.js)
import 'simplebar/dist/simplebar.css';
// В вашем основном JS файле (например, catalog.js)
import { initPriceSlider } from './price-slider.js';

document.addEventListener('DOMContentLoaded', function () {
  // Инициализируем слайдер
  initPriceSlider();

  // Можно подписаться на событие изменения цены
  document.addEventListener('price:change', function (e) {
    console.log('Цена изменена:', e.detail);
    // Здесь можно обновлять товары, делать AJAX запрос и т.д.
  });
});
