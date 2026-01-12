import noUiSlider from "nouislider";

/**
 * Инициализация слайдера цены
 */
export function initPriceSlider() {
  // Находим все контейнеры с слайдерами на странице
  const priceContainers = document.querySelectorAll('.catalog-filter__price');

  if (!priceContainers.length) {
    console.log('Контейнеры цены не найдены');
    return;
  }

  console.log(`Найдено контейнеров цены: ${priceContainers.length}`);

  priceContainers.forEach((container, index) => {
    // Находим элементы внутри контейнера
    const minInput = container.querySelector('.catalog-filter__price-input--min');
    const maxInput = container.querySelector('.catalog-filter__price-input--max');

    // Находим следующий элемент .price-range после контейнера
    let priceRange = container.nextElementSibling;
    while (priceRange && !priceRange.classList.contains('price-range')) {
      priceRange = priceRange.nextElementSibling;
    }

    if (!minInput || !maxInput || !priceRange) {
      console.warn(`Контейнер ${index}: не все элементы найдены`);
      return;
    }

    console.log(`Инициализация слайдера ${index + 1}:`, {
      minInput,
      maxInput,
      priceRange
    });

    // Инициализируем слайдер для этого контейнера
    initSinglePriceSlider(minInput, maxInput, priceRange, index);
  });
}

/**
 * Инициализация одного слайдера
 */
function initSinglePriceSlider(minInput, maxInput, priceRange, sliderIndex) {
  // Функции для работы с числами
  const formatNumber = (num) => {
    if (isNaN(num)) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const parseNumber = (str) => {
    const num = parseInt(str.toString().replace(/\s/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  // Получаем значения из атрибутов или используем дефолтные
  const minLimit = parseNumber(minInput.getAttribute('min')) || 0;
  const maxLimit = parseNumber(minInput.getAttribute('max')) || 50000;

  // Получаем текущие значения из инпутов
  let currentMin = parseNumber(minInput.value) || minInput.placeholder ? parseNumber(minInput.placeholder) : minLimit;
  let currentMax = parseNumber(maxInput.value) || maxInput.placeholder ? parseNumber(maxInput.placeholder) : maxLimit;

  console.log(`Слайдер ${sliderIndex}:`, {
    minLimit,
    maxLimit,
    currentMin,
    currentMax
  });

  try {
    // Создаем слайдер
    noUiSlider.create(priceRange, {
      start: [currentMin, currentMax],
      connect: true,
      range: {
        'min': minLimit,
        'max': maxLimit
      },
      step: 100, // Шаг 100 рублей
      behaviour: 'tap-drag',
      tooltips: false,
      format: {
        to: function (value) {
          return Math.round(value);
        },
        from: function (value) {
          return parseFloat(value);
        }
      }
    });

    console.log(`Слайдер ${sliderIndex} создан успешно`);

    // Получаем инстанс слайдера
    const priceSlider = priceRange.noUiSlider;

    // 1. ОБНОВЛЕНИЕ ИНПУТОВ ПРИ ДВИЖЕНИИ СЛАЙДЕРА
    priceSlider.on('update', function (values, handle) {
      const value = Math.round(values[handle]);

      if (handle === 0) {
        // Минимальное значение
        minInput.value = formatNumber(value);
      } else {
        // Максимальное значение
        maxInput.value = formatNumber(value);
      }

      // Можно добавить кастомное событие
      dispatchPriceChange(minInput, maxInput);
    });

    // 2. ОБНОВЛЕНИЕ СЛАЙДЕРА ПРИ ИЗМЕНЕНИИ ИНПУТОВ
    // Для минимального инпута
    minInput.addEventListener('change', function () {
      let value = parseNumber(this.value);
      const maxValue = parseNumber(maxInput.value);

      // Валидация
      if (value < minLimit) value = minLimit;
      if (value > maxLimit) value = maxLimit;
      if (value > maxValue) value = maxValue - 100;

      // Обновляем слайдер
      priceSlider.set([value, null]);

      // Форматируем значение
      this.value = formatNumber(value);

      console.log(`Слайдер ${sliderIndex}: min изменен на ${value}`);
    });

    // Для максимального инпута
    maxInput.addEventListener('change', function () {
      let value = parseNumber(this.value);
      const minValue = parseNumber(minInput.value);

      // Валидация
      if (value < minLimit) value = minLimit;
      if (value > maxLimit) value = maxLimit;
      if (value < minValue) value = minValue + 100;

      // Обновляем слайдер
      priceSlider.set([null, value]);

      // Форматируем значение
      this.value = formatNumber(value);

      console.log(`Слайдер ${sliderIndex}: max изменен на ${value}`);
    });

    // 3. ВВОД В РЕАЛЬНОМ ВРЕМЕНИ (с debounce)
    minInput.addEventListener('input', debounce(function () {
      let value = parseNumber(this.value);
      const maxValue = parseNumber(maxInput.value);

      if (value > maxValue) value = maxValue;
      if (value < minLimit) value = minLimit;

      priceSlider.set([value, null]);
      this.value = formatNumber(value);
    }, 300));

    maxInput.addEventListener('input', debounce(function () {
      let value = parseNumber(this.value);
      const minValue = parseNumber(minInput.value);

      if (value < minValue) value = minValue;
      if (value > maxLimit) value = maxLimit;

      priceSlider.set([null, value]);
      this.value = formatNumber(value);
    }, 300));

    // 4. ФОРМАТИРОВАНИЕ ПРИ ПОТЕРЕ ФОКУСА
    minInput.addEventListener('blur', function () {
      const value = parseNumber(this.value);
      this.value = formatNumber(value);
    });

    maxInput.addEventListener('blur', function () {
      const value = parseNumber(this.value);
      this.value = formatNumber(value);
    });

    // 5. ПРИ ФОКУСЕ - УДАЛЯЕМ ФОРМАТИРОВАНИЕ (опционально)
    minInput.addEventListener('focus', function () {
      this.value = parseNumber(this.value);
    });

    maxInput.addEventListener('focus', function () {
      this.value = parseNumber(this.value);
    });

    // 6. ИНИЦИАЛИЗИРУЕМ ИНПУТЫ ПРАВИЛЬНЫМИ ЗНАЧЕНИЯМИ
    minInput.value = formatNumber(currentMin);
    maxInput.value = formatNumber(currentMax);

    // 7. ДОБАВЛЯЕМ ДОПОЛНИТЕЛЬНЫЕ СТИЛИ ДЛЯ КАСТОМИЗАЦИИ
    priceRange.style.margin = '20px 0';
    priceRange.style.height = '6px';

  } catch (error) {
    console.error(`Ошибка создания слайдера ${sliderIndex}:`, error);
  }
}

/**
 * Debounce функция
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Кастомное событие изменения цены
 */
function dispatchPriceChange(minInput, maxInput) {
  const event = new CustomEvent('price:change', {
    detail: {
      min: parseInt(minInput.value.replace(/\s/g, '')),
      max: parseInt(maxInput.value.replace(/\s/g, ''))
    },
    bubbles: true
  });

  minInput.dispatchEvent(event);
}

/**
 * Сброс слайдера
 */
export function resetPriceSlider() {
  const minInputs = document.querySelectorAll('.catalog-filter__price-input--min');
  const maxInputs = document.querySelectorAll('.catalog-filter__price-input--max');

  minInputs.forEach((minInput, index) => {
    const maxInput = maxInputs[index];
    if (!minInput || !maxInput) return;

    const minPlaceholder = minInput.placeholder ? parseInt(minInput.placeholder.replace(/\s/g, '')) : 0;
    const maxPlaceholder = maxInput.placeholder ? parseInt(maxInput.placeholder.replace(/\s/g, '')) : 50000;

    minInput.value = minPlaceholder;
    maxInput.value = maxPlaceholder;

    // Находим слайдер
    const container = minInput.closest('.catalog-filter__price');
    let priceRange = container.nextElementSibling;
    while (priceRange && !priceRange.classList.contains('price-range')) {
      priceRange = priceRange.nextElementSibling;
    }

    if (priceRange && priceRange.noUiSlider) {
      priceRange.noUiSlider.set([minPlaceholder, maxPlaceholder]);
    }
  });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
  console.log('Инициализация слайдеров цены...');
  initPriceSlider();
});
// import noUiSlider from "nouislider";
// import vars from "../_vars.js";


// // Отладка: что импортировалось?
// console.log('noUiSlider импортирован:', typeof noUiSlider);
// console.log('vars.priceRange:', vars.priceRange);

// if (vars.priceRange) {
//   console.log('Создаю слайдер...');

//   try {
//     // Создаём слайдер
//     noUiSlider.create(vars.priceRange, {
//       start: [0, 50000],
//       connect: true,
//       range: {
//         'min': 0,
//         'max': 50000
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
// import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

// export function initPriceSlider() {
//   const priceRange = document.getElementById('price-range');
//   const minInput = document.querySelector('.catalog-filter__price-input--min');
//   const maxInput = document.querySelector('.catalog-filter__price-input--max');

//   if (!priceRange || !minInput || !maxInput) {
//     console.warn('Элементы слайдера цены не найдены');
//     return;
//   }

//   // Устанавливаем значения по умолчанию
//   const minPrice = parseInt(minInput.getAttribute('min')) || 0;
//   const maxPrice = parseInt(maxInput.getAttribute('max')) || 50000;
//   const defaultMin = parseInt(minInput.value) || minPrice;
//   const defaultMax = parseInt(maxInput.value) || maxPrice;

//   console.log('Инициализация слайдера цены:', {
//     minPrice,
//     maxPrice,
//     defaultMin,
//     defaultMax
//   });

//   // Создаем слайдер
//   noUiSlider.create(priceRange, {
//     start: [defaultMin, defaultMax],
//     connect: true,
//     step: 100, // Шаг в 100 рублей
//     range: {
//       'min': minPrice,
//       'max': maxPrice
//     },
//     format: {
//       to: function(value) {
//         return Math.round(value);
//       },
//       from: function(value) {
//         return parseInt(value);
//       }
//     }
//   });

//   // Получаем инстанс слайдера
//   const priceSlider = priceRange.noUiSlider;

//   // 1. При изменении слайдера обновляем инпуты
//   priceSlider.on('update', function(values, handle) {
//     const minValue = Math.round(values[0]);
//     const maxValue = Math.round(values[1]);

//     // Обновляем инпуты
//     minInput.value = formatNumber(minValue);
//     maxInput.value = formatNumber(maxValue);

//     console.log(`Слайдер обновлен: ${minValue} - ${maxValue}`);
//   });

//   // 2. При изменении инпута min обновляем слайдер
//   minInput.addEventListener('change', function() {
//     let value = parseInt(this.value.replace(/\s/g, '')) || minPrice;

//     // Проверяем границы
//     if (value < minPrice) value = minPrice;
//     if (value > maxPrice) value = maxPrice;

//     // Получаем текущее значение max
//     const currentMax = parseInt(priceSlider.get()[1]);

//     // Проверяем, чтобы min не был больше max
//     if (value > currentMax) value = currentMax - 100;

//     // Обновляем слайдер
//     priceSlider.set([value, null]);

//     // Форматируем значение в инпуте
//     this.value = formatNumber(value);
//   });

//   // 3. При изменении инпута max обновляем слайдер
//   maxInput.addEventListener('change', function() {
//     let value = parseInt(this.value.replace(/\s/g, '')) || maxPrice;

//     // Проверяем границы
//     if (value < minPrice) value = minPrice;
//     if (value > maxPrice) value = maxPrice;

//     // Получаем текущее значение min
//     const currentMin = parseInt(priceSlider.get()[0]);

//     // Проверяем, чтобы max не был меньше min
//     if (value < currentMin) value = currentMin + 100;

//     // Обновляем слайдер
//     priceSlider.set([null, value]);

//     // Форматируем значение в инпуте
//     this.value = formatNumber(value);
//   });

//   // 4. При вводе в реальном времени (опционально)
//   minInput.addEventListener('input', debounce(function() {
//     let value = parseInt(this.value.replace(/\s/g, '')) || minPrice;
//     const currentMax = parseInt(priceSlider.get()[1]);

//     if (value > currentMax) value = currentMax;
//     if (value < minPrice) value = minPrice;

//     priceSlider.set([value, null]);
//     this.value = formatNumber(value);
//   }, 300));

//   maxInput.addEventListener('input', debounce(function() {
//     let value = parseInt(this.value.replace(/\s/g, '')) || maxPrice;
//     const currentMin = parseInt(priceSlider.get()[0]);

//     if (value < currentMin) value = currentMin;
//     if (value > maxPrice) value = maxPrice;

//     priceSlider.set([null, value]);
//     this.value = formatNumber(value);
//   }, 300));

//   // 5. При клике вне инпута (blur) форматируем число
//   minInput.addEventListener('blur', function() {
//     const value = parseInt(this.value.replace(/\s/g, '')) || minPrice;
//     this.value = formatNumber(value);
//   });

//   maxInput.addEventListener('blur', function() {
//     const value = parseInt(this.value.replace(/\s/g, '')) || maxPrice;
//     this.value = formatNumber(value);
//   });

//   // 6. При загрузке страницы форматируем начальные значения
//   minInput.value = formatNumber(defaultMin);
//   maxInput.value = formatNumber(defaultMax);

//   console.log('Слайдер цены успешно инициализирован');

//   return priceSlider;
// }

// /**
//  * Форматирование числа с пробелами (1 000 вместо 1000)
//  */
// function formatNumber(num) {
//   if (isNaN(num)) return '0';
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

// /**
//  * Функция debounce для оптимизации обработки ввода
//  */
// function debounce(func, wait) {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func.apply(this, args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

// /**
//  * Обновление слайдера при изменении размера окна
//  */
// function handleResize() {
//   const priceRange = document.getElementById('price-range');
//   if (priceRange && priceRange.noUiSlider) {
//     priceRange.noUiSlider.updateOptions({
//       range: {
//         'min': parseInt(document.querySelector('.catalog-filter__price-input--min').getAttribute('min')) || 0,
//         'max': parseInt(document.querySelector('.catalog-filter__price-input--max').getAttribute('max')) || 50000
//       }
//     });
//   }
// }

// // Инициализация при загрузке страницы
// document.addEventListener('DOMContentLoaded', function() {
//   initPriceSlider();

//   // Обновление при изменении размера окна
//   window.addEventListener('resize', debounce(handleResize, 250));
// });
// export function initCustomPriceSlider() {
//   const sliderContainer = document.getElementById('price-range');
//   const minInput = document.querySelector('.catalog-filter__price-input--min');
//   const maxInput = document.querySelector('.catalog-filter__price-input--max');

//   if (!sliderContainer || !minInput || !maxInput) return;

//   // Значения по умолчанию
//   const minPrice = parseInt(minInput.min) || 0;
//   const maxPrice = parseInt(maxInput.max) || 50000;
//   let currentMin = parseInt(minInput.value) || minPrice;
//   let currentMax = parseInt(maxInput.value) || maxPrice;

//   // Создаем элементы слайдера
//   sliderContainer.innerHTML = `
//     <div class="price-slider">
//       <div class="price-slider__track"></div>
//       <div class="price-slider__range"></div>
//       <div class="price-slider__thumb price-slider__thumb--min"></div>
//       <div class="price-slider__thumb price-slider__thumb--max"></div>
//     </div>
//   `;

//   const slider = sliderContainer.querySelector('.price-slider');
//   const track = slider.querySelector('.price-slider__track');
//   const range = slider.querySelector('.price-slider__range');
//   const minThumb = slider.querySelector('.price-slider__thumb--min');
//   const maxThumb = slider.querySelector('.price-slider__thumb--max');

//   // Обновление позиций
//   function updateSlider() {
//     const minPercent = ((currentMin - minPrice) / (maxPrice - minPrice)) * 100;
//     const maxPercent = ((currentMax - minPrice) / (maxPrice - minPrice)) * 100;

//     range.style.left = minPercent + '%';
//     range.style.width = (maxPercent - minPercent) + '%';

//     minThumb.style.left = minPercent + '%';
//     maxThumb.style.left = maxPercent + '%';
//   }

//   // Форматирование числа
//   function formatNumber(num) {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   }

//   // Обновление инпутов
//   function updateInputs() {
//     minInput.value = formatNumber(currentMin);
//     maxInput.value = formatNumber(currentMax);
//   }

//   // Обработчики для min thumb
//   minThumb.addEventListener('mousedown', startDrag);
//   minThumb.addEventListener('touchstart', startDrag);

//   // Обработчики для max thumb
//   maxThumb.addEventListener('mousedown', startDrag);
//   maxThumb.addEventListener('touchstart', startDrag);

//   // Функция перетаскивания
//   function startDrag(e) {
//     e.preventDefault();
//     const isMin = e.target.classList.contains('price-slider__thumb--min');
//     const sliderRect = slider.getBoundingClientRect();

//     function move(e) {
//       const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
//       const percent = ((clientX - sliderRect.left) / sliderRect.width) * 100;
//       const value = minPrice + (percent / 100) * (maxPrice - minPrice);
//       const roundedValue = Math.round(value / 100) * 100; // Округляем до 100

//       if (isMin) {
//         if (roundedValue >= minPrice && roundedValue <= currentMax - 100) {
//           currentMin = roundedValue;
//           updateSlider();
//           updateInputs();
//         }
//       } else {
//         if (roundedValue <= maxPrice && roundedValue >= currentMin + 100) {
//           currentMax = roundedValue;
//           updateSlider();
//           updateInputs();
//         }
//       }
//     }

//     function stop() {
//       document.removeEventListener('mousemove', move);
//       document.removeEventListener('mouseup', stop);
//       document.removeEventListener('touchmove', move);
//       document.removeEventListener('touchend', stop);
//     }

//     document.addEventListener('mousemove', move);
//     document.addEventListener('mouseup', stop);
//     document.addEventListener('touchmove', move);
//     document.addEventListener('touchend', stop);
//   }

//   // Обработчики инпутов
//   minInput.addEventListener('change', function () {
//     let value = parseInt(this.value.replace(/\s/g, '')) || minPrice;
//     if (value < minPrice) value = minPrice;
//     if (value > currentMax - 100) value = currentMax - 100;
//     currentMin = value;
//     updateSlider();
//     updateInputs();
//   });

//   maxInput.addEventListener('change', function () {
//     let value = parseInt(this.value.replace(/\s/g, '')) || maxPrice;
//     if (value > maxPrice) value = maxPrice;
//     if (value < currentMin + 100) value = currentMin + 100;
//     currentMax = value;
//     updateSlider();
//     updateInputs();
//   });

//   // Инициализация
//   updateSlider();
//   updateInputs();

//   console.log('Кастомный слайдер инициализирован');
// }
