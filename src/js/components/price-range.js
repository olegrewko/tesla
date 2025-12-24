// import noUiSlider from "nouislider";
// import vars from "../_vars.js";

// if (vars.priceRange) {
//  noUiSlider.create(vars.priceRange, {
//     start: [20, 80],
//     connect: true,
//     range: {
//       'min': 0,
//       'max': 100
//     },
//   });
// }

// import noUiSlider from "nouislider";
// import vars from "./_vars.js";

// // Отладка: что импортировалось?
// console.log('noUiSlider импортирован:', typeof noUiSlider);
// console.log('vars.priceRange:', vars.priceRange);

// if (vars.priceRange) {
//   console.log('Создаю слайдер...');

//   try {
//     // Создаём слайдер
//     noUiSlider.create(vars.priceRange, {
//       start: [20, 80],
//       connect: true,
//       range: {
//         'min': 0,
//         'max': 100
//       },
//       step: 1, // Добавляем шаг
//       behaviour: 'tap-drag', // Поведение
//     });

//     console.log('Слайдер создан успешно!');

//     // Обновляем значения при изменении
//     vars.priceRange.noUiSlider.on('update', function(values, handle) {
//       const value = Math.round(values[handle]);
//       if (handle === 0) {
//         vars.priceMin.textContent = value;
//       } else {
//         vars.priceMax.textContent = value;
//       }
//     });

//     // Добавляем стили для видимости
//     vars.priceRange.style.margin = '30px 0';
//     vars.priceRange.style.height = '30px';

//   } catch (error) {
//     console.error('Ошибка создания слайдера:', error);
//   }
// } else {
//   console.error('Элемент .price-range не найден!');
//   console.log('Документ:', document);
//   console.log('Поиск вручную:', document.querySelector('.price-range'));
// }
