// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
// import vars from "../_vars.js";

// Swiper.use([Pagination]);

// if (vars.productSlider) {
//  const swiper = new Swiper(vars.productSlider, {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//     pagination: {
//       el: ".product-hero__pag",
//       clickable: true,

//   }
//  });
// }
// //
// if (vars.heroSlider) {
//   const swiper = new Swiper(vars.heroSlider, {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     pagination: {
//       el: ".hero__pag",
//       clickable: true,

//     }
//   });
// }
// products-slider.js

// document.addEventListener('DOMContentLoaded', function() {
//   const productsSlider = document.querySelector('.products__slider');

//   if (!productsSlider) return;

//   // Инициализация Swiper
//   const swiper = new Swiper(productsSlider, {
//     // Основные настройки
//     slidesPerView: 4, // Количество видимых слайдов по умолчанию
//     spaceBetween: 20, // Отступ между слайдами
//     loop: true, // Бесконечная прокрутка
//     speed: 500, // Скорость анимации
//     grabCursor: true, // Курсор-рука при наведении

//     // Адаптивность
//     breakpoints: {
//       // при 576px
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       // при 768px
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       },
//       // при 992px
//       992: {
//         slidesPerView: 4,
//         spaceBetween: 20
//       },
//       // при 1200px
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 30
//       }
//     },

//     // Навигация (стрелки)
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // Пагинация (точки)
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true,
//     },

//     // Скроллбар
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },

//     // Автопрокрутка
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },

//     // Эффекты
//     effect: 'slide', // или 'fade', 'cube', 'coverflow', 'flip'

//     // Параллакс
//     parallax: true,

//     // Отключение предзагрузки
//     preloadImages: false,

//     // Ленивая загрузка изображений
//     lazy: {
//       loadPrevNext: true,
//       loadPrevNextAmount: 2,
//     },
//   });

//   console.log('Swiper initialized:', swiper);


//   addCustomControls(swiper);
// });


// function addCustomControls(swiper) {

//   const sliderContainer = swiper.el;
//   const controlsContainer = document.createElement('div');
//   controlsContainer.className = 'slider-controls';
//   controlsContainer.style.cssText = `
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin-top: 20px;
//   `;

//   // Кнопка "Начать сначала"
//   const restartBtn = document.createElement('button');
//   restartBtn.className = 'btn btn--secondary';
//   restartBtn.textContent = 'Начать сначала';
//   restartBtn.addEventListener('click', () => {
//     swiper.slideTo(0);
//   });

//   // Кнопка паузы/продолжения автопрокрутки
//   const toggleAutoplayBtn = document.createElement('button');
//   toggleAutoplayBtn.className = 'btn btn--secondary';
//   toggleAutoplayBtn.textContent = 'Пауза';

//   toggleAutoplayBtn.addEventListener('click', () => {
//     if (swiper.autoplay.running) {
//       swiper.autoplay.stop();
//       toggleAutoplayBtn.textContent = 'Продолжить';
//     } else {
//       swiper.autoplay.start();
//       toggleAutoplayBtn.textContent = 'Пауза';
//     }
//   });

//   controlsContainer.appendChild(restartBtn);
//   controlsContainer.appendChild(toggleAutoplayBtn);
//   sliderContainer.appendChild(controlsContainer);
// }
// // vars.mainProductsInner------------------------------------

// vars.mainProductsInner.forEach(inner => {

//  const swiper = new Swiper(inner.querySelector('.products__slider'), {
//   slidesPerView: 4,
//   spaceBetween: 24,
//   loop: true,
//   watchSlidesProgress: true,
//    // Адаптивные брейкпоинты
//    breakpoints: {
//      480: {
//        slidesPerView: 2,
//        spaceBetween: 16
//      },
//      768: {
//        slidesPerView: 3,
//        spaceBetween: 20
//      },
//      1024: {
//        slidesPerView: 4,
//        spaceBetween: 24
//      }
//    },
//   scrollbar: {
//     el: inner.querySelector(".swiper-scrollbar"),
//     draggable: true
//   },
//   navigation: {
//     prevEl: inner.querySelector(".products__slider-btn--prev"),
//     nextEl: inner.querySelector(".products__slider-btn--next")
//   }
//  });
// });


// let swipers = [];

// vars.mainProductsInner.forEach((inner, index) => {
//   const swiper = new Swiper(inner.querySelector('.products__slider'), {
//     slidesPerView: 1,
//     spaceBetween: 16,
//     loop: true,
//     watchSlidesProgress: true,

//     breakpoints: {
//       480: { slidesPerView: 2, spaceBetween: 16 },
//       768: { slidesPerView: 3, spaceBetween: 20 },
//       1024: { slidesPerView: 4, spaceBetween: 24 }
//     },

//     scrollbar: {
//       el: inner.querySelector(".swiper-scrollbar"),
//       draggable: true
//     },
//     navigation: {
//       prevEl: inner.querySelector(".products__slider-btn--prev"),
//       nextEl: inner.querySelector(".products__slider-btn--next")
//     },

//     // Обновлять при изменении размера
//     observer: true,
//     observeParents: true,
//     observeSlideChildren: true
//   });

//   swipers.push(swiper);
// });

// // Обновлять все свайперы при ресайзе
// let resizeTimer;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     swipers.forEach(swiper => swiper.update());
//   }, 250);
// });
// //
// document.addEventListener('DOMContentLoaded', function () {
//   const productsInners = document.querySelectorAll('.products__inner');
//   let swipers = [];

//   productsInners.forEach((inner, index) => {
//     // Инициализируем только видимые слайдеры
//     if (inner.classList.contains('products__inner--active')) {
//       const swiper = new Swiper(inner.querySelector('.products__slider'), {
//         slidesPerView: 1,
//         spaceBetween: 16,
//         loop: true,
//         watchSlidesProgress: true,

//         breakpoints: {
//           480: { slidesPerView: 2, spaceBetween: 16 },
//           768: { slidesPerView: 3, spaceBetween: 20 },
//           1024: { slidesPerView: 4, spaceBetween: 24 }
//         },

//         scrollbar: {
//           el: inner.querySelector(".swiper-scrollbar"),
//           draggable: true
//         },
//         navigation: {
//           prevEl: inner.querySelector(".products__slider-btn--prev"),
//           nextEl: inner.querySelector(".products__slider-btn--next")
//         },

//         observer: true,
//         observeParents: true,
//         observeSlideChildren: true
//       });

//       swipers.push({ swiper, element: inner });
//     }
//   });

//   // Обновление при ресайзе
//   let resizeTimer;
//   window.addEventListener('resize', () => {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//       swipers.forEach(item => item.swiper.update());
//     }, 250);
//   });

//   // Переключение табов (если есть)
//   const tabButtons = document.querySelectorAll('.products-tabs__btn');
//   if (tabButtons.length) {
//     tabButtons.forEach(btn => {
//       btn.addEventListener('click', function () {
//         const tabId = this.getAttribute('data-tab');

//         // Обновляем активные классы кнопок
//         tabButtons.forEach(b => b.classList.remove('products-tabs__btn--active'));
//         this.classList.add('products-tabs__btn--active');

//         // Показываем соответствующий слайдер
//         productsInners.forEach(inner => {
//           inner.classList.remove('products__inner--active');
//           if (inner.getAttribute('data-target') === tabId) {
//             inner.classList.add('products__inner--active');

//             // Инициализируем слайдер, если он еще не инициализирован
//             const existingSwiper = swipers.find(s => s.element === inner);
//             if (!existingSwiper) {
//               const newSwiper = new Swiper(inner.querySelector('.products__slider'), {
//                 // та же конфигурация
//               });
//               swipers.push({ swiper: newSwiper, element: inner });
//             }
//           }
//         });
//       });
//     });
//   }
// });
import Swiper from 'swiper';
import { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper/modules';
import vars from "../_vars.js";

// Регистрируем модули
Swiper.use([Navigation, Scrollbar, Autoplay, Pagination]);

// Инициализация слайдера товара (если есть)
if (vars.productSlider) {
  const swiper = new Swiper(vars.productSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".product-hero__pag",
      clickable: true,
    }
  });
}

// Инициализация hero слайдера (если есть)
if (vars.heroSlider) {
  const swiper = new Swiper(vars.heroSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".hero__pag",
      clickable: true,
    }
  });
}

// Основная инициализация продуктовых слайдеров с табами
document.addEventListener('DOMContentLoaded', function () {
  const productsInners = document.querySelectorAll('.products__inner');
  let swipers = [];

  // Функция инициализации слайдера
  function initSwiper(element) {
    const sliderElement = element.querySelector('.products__slider');
    if (!sliderElement) return null;

    // Проверяем, инициализирован ли уже слайдер
    if (sliderElement.swiper) {
      return sliderElement.swiper;
    }

    const swiper = new Swiper(sliderElement, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      watchSlidesProgress: true,
      speed: 500,
      grabCursor: true,

      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      },

      scrollbar: {
        el: element.querySelector(".swiper-scrollbar"),
        draggable: true
      },

      navigation: {
        prevEl: element.querySelector(".products__slider-btn--prev"),
        nextEl: element.querySelector(".products__slider-btn--next")
      },

      // Автопрокрутка (опционально)
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Для корректной работы при изменении размеров
      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      // Ленивая загрузка (опционально)
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
      }
    });

    return swiper;
  }

  // Инициализация активного слайдера при загрузке
  productsInners.forEach((inner, index) => {
    if (inner.classList.contains('products__inner--active')) {
      const swiper = initSwiper(inner);
      if (swiper) {
        swipers.push({
          swiper,
          element: inner
        });
      }
    }
  });

  // Переключение табов
  const tabButtons = document.querySelectorAll('.products-tabs__btn');
  if (tabButtons.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');

        // Обновляем активные классы кнопок
        tabButtons.forEach(b => b.classList.remove('products-tabs__btn--active'));
        this.classList.add('products-tabs__btn--active');

        // Скрываем все слайдеры, показываем нужный
        productsInners.forEach(inner => {
          inner.classList.remove('products__inner--active');

          // Обновляем swiper при скрытии
          const existingSwiper = swipers.find(s => s.element === inner);
          if (existingSwiper) {
            existingSwiper.swiper.update();
          }

          if (inner.getAttribute('data-target') === tabId) {
            inner.classList.add('products__inner--active');

            // Инициализируем слайдер, если он еще не инициализирован
            const existingSwiper = swipers.find(s => s.element === inner);
            if (!existingSwiper) {
              const newSwiper = initSwiper(inner);
              if (newSwiper) {
                swipers.push({
                  swiper: newSwiper,
                  element: inner
                });
              }
            } else {
              // Обновляем существующий слайдер
              existingSwiper.swiper.update();
              existingSwiper.swiper.slideTo(0);
            }
          }
        });
      });
    });
  }

  // Обновление при ресайзе с дебаунсингом
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      swipers.forEach(item => {
        if (item.swiper && !item.swiper.destroyed) {
          item.swiper.update();
        }
      });
    }, 250);
  });

  // Деструктуризация при размонтировании (если нужно)
  window.addEventListener('beforeunload', () => {
    swipers.forEach(item => {
      if (item.swiper && !item.swiper.destroyed) {
        item.swiper.destroy(true, true);
      }
    });
  });
});

// Функция для добавления кастомных контролов (опционально)
function addCustomControls(swiper) {
  const sliderContainer = swiper.el;

  // Проверяем, не добавлены ли уже контролы
  if (sliderContainer.querySelector('.slider-controls')) {
    return;
  }

  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'slider-controls';
  controlsContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  `;

  // Кнопка "Начать сначала"
  const restartBtn = document.createElement('button');
  restartBtn.className = 'btn btn--secondary';
  restartBtn.textContent = 'Начать сначала';
  restartBtn.addEventListener('click', () => {
    swiper.slideTo(0);
  });

  // Кнопка паузы/продолжения автопрокрутки
  const toggleAutoplayBtn = document.createElement('button');
  toggleAutoplayBtn.className = 'btn btn--secondary';
  toggleAutoplayBtn.textContent = 'Пауза';

  toggleAutoplayBtn.addEventListener('click', () => {
    if (swiper.autoplay && swiper.autoplay.running) {
      swiper.autoplay.stop();
      toggleAutoplayBtn.textContent = 'Продолжить';
    } else {
      swiper.autoplay.start();
      toggleAutoplayBtn.textContent = 'Пауза';
    }
  });

  controlsContainer.appendChild(restartBtn);
  controlsContainer.appendChild(toggleAutoplayBtn);
  sliderContainer.appendChild(controlsContainer);
}
