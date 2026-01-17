import Swiper from 'swiper';
import { Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import vars from "../_vars.js";



Swiper.use([Pagination]);

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
// 1. Импортируем Swiper и его модули
// import Swiper from 'swiper';
// import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Parallax } from 'swiper/modules';

// // 2. ИМПОРТИРУЕМ СТИЛИ (важно!)
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/effect-fade';
// import 'swiper/css/parallax';

// // 3. Импортируем переменные
// import vars from "../_vars.js";

// // 4. Подключаем модули к Swiper
// Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade, Parallax]);

// // 5. Ждем загрузки DOM
// document.addEventListener('DOMContentLoaded', function () {
//   // Проверяем, существует ли heroSlider на странице
//   if (vars.heroSlider && document.querySelector(vars.heroSlider)) {
//     try {
//       const swiper = new Swiper(vars.heroSlider, {
//         // Основные настройки
//         modules: [Navigation, Pagination], // Явно указываем модули для этого слайдера
//         slidesPerView: 1,
//         spaceBetween: 20,
//         loop: true,
//         speed: 800,

//         // Пагинация
//         pagination: {
//           el: '.hero__pag',
//           clickable: true,
//           type: 'bullets',
//         },

//         // Навигация (если нужна)
//         navigation: {
//           nextEl: '.hero__next',
//           prevEl: '.hero__prev',
//         },

//         // Автопрокрутка (если нужна)
//         autoplay: {
//           delay: 5000,
//           disableOnInteraction: false,
//         },

//         // Отладка
//         on: {
//           init: function () {
//             console.log('Hero слайдер инициализирован');
//           },
//           error: function (error) {
//             console.error('Ошибка в слайдере:', error);
//           }
//         }
//       });

//       console.log('Swiper создан:', swiper);

//     } catch (error) {
//       console.error('Ошибка при создании Swiper:', error);
//     }
//   } else {
//     console.log('Hero слайдер не найден на странице. vars.heroSlider:', vars.heroSlider);
//   }
// });
// if (vars.productSlider) {
//   const swiper = new Swiper(vars.productSlider, {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     pagination: {
//       el: ".product-hero__pag",
//       clickable: true,

//     }
//   });
// }

// // products-slider.js
// document.addEventListener('DOMContentLoaded', function () {
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


// });


// // vars.mainProductsInner

// vars.mainProductsInner.forEach(inner => {

//   const swiper = new Swiper(inner.querySelector('.products__slider'), {
//     slidesPerView: 4,
//     spaceBetween: 24,
//     loop: true,
//     watchSlidesProgress: true,
//     scrollbar: {
//       el: inner.querySelector(".swiper-scrollbar"),
//       draggable: true
//     },
//     navigation: {
//       prevEl: inner.querySelector(".products__slider-btn--prev"),
//       nextEl: inner.querySelector(".products__slider-btn--next")
//     }
//   });
// });
// import Swiper from 'swiper';
// import { Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
// import vars from "../_vars.js";

// // Регистрируем ВСЕ необходимые модули
// Swiper.use([Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax]);

// // Проверяем, существует ли vars
// if (!vars) {
//   console.error('vars.js не загружен!');
// }

// // 1. Hero слайдер
// function initHeroSlider() {
//   if (vars?.heroSlider) {
//     console.log('Инициализация Hero слайдера');
//     return new Swiper(vars.heroSlider, {
//       modules: [Pagination],
//       slidesPerView: 1,
//       spaceBetween: 0,
//       loop: true,
//       speed: 600,
//       pagination: {
//         el: ".hero__pag",
//         clickable: true,
//         dynamicBullets: true,
//       },
//       autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//       },
//       effect: 'fade',
//       fadeEffect: {
//         crossFade: true
//       },
//     });
//   }
//   return null;
// }

// // 2. Product слайдер
// function initProductSlider() {
//   if (vars?.productSlider) {
//     console.log('Инициализация Product слайдера');
//     return new Swiper(vars.productSlider, {
//       modules: [Pagination],
//       slidesPerView: 1,
//       spaceBetween: 20,
//       loop: true,
//       pagination: {
//         el: ".product-hero__pag",
//         clickable: true,
//       }
//     });
//   }
//   return null;
// }

// // 3. Продуктовые слайдеры с табами
// function initProductsSliders() {
//   // Если есть переменная mainProductsInner
//   if (vars?.mainProductsInner?.length) {
//     console.log(`Инициализация ${vars.mainProductsInner.length} продуктовых слайдеров через vars`);

//     vars.mainProductsInner.forEach((inner, index) => {
//       const slider = inner.querySelector('.products__slider');
//       if (!slider) {
//         console.warn(`Слайдер не найден в mainProductsInner[${index}]`);
//         return;
//       }

//       // Проверяем, не инициализирован ли уже
//       if (slider.swiper) {
//         console.log(`Слайдер ${index} уже инициализирован`);
//         return;
//       }

//       new Swiper(slider, {
//         modules: [Navigation, Scrollbar],
//         slidesPerView: 1,
//         spaceBetween: 16,
//         loop: true,
//         speed: 500,
//         grabCursor: true,
//         watchSlidesProgress: true,

//         breakpoints: {
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 16
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 20
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 24
//           }
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
//       });
//     });
//     return;
//   }

//   // Альтернативный вариант: ищем слайдеры на странице
//   const productsSliders = document.querySelectorAll('.products__slider');
//   if (productsSliders.length) {
//     console.log(`Найдено ${productsSliders.length} продуктовых слайдеров на странице`);

//     productsSliders.forEach((slider, index) => {
//       // Проверяем, не инициализирован ли уже
//       if (slider.swiper) {
//         console.log(`Продуктовый слайдер ${index} уже инициализирован`);
//         return;
//       }

//       const parent = slider.closest('.products__inner');
//       if (!parent) return;

//       new Swiper(slider, {
//         modules: [Navigation, Scrollbar],
//         slidesPerView: 1,
//         spaceBetween: 16,
//         loop: true,
//         speed: 500,
//         grabCursor: true,
//         watchSlidesProgress: true,

//         breakpoints: {
//           480: {
//             slidesPerView: 2,
//             spaceBetween: 16
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 20
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 24
//           }
//         },

//         scrollbar: {
//           el: parent.querySelector(".swiper-scrollbar"),
//           draggable: true
//         },

//         navigation: {
//           prevEl: parent.querySelector(".products__slider-btn--prev"),
//           nextEl: parent.querySelector(".products__slider-btn--next")
//         },

//         observer: true,
//         observeParents: true,
//       });
//     });
//   }
// }

// // 4. Универсальный слайдер (если есть на странице)
// function initUniversalSlider() {
//   const universalSlider = document.querySelector('.products__slider:not([data-initialized])');
//   if (!universalSlider) return null;

//   console.log('Инициализация универсального слайдера');

//   return new Swiper(universalSlider, {
//     modules: [Navigation, Scrollbar, Autoplay],
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     speed: 500,
//     grabCursor: true,

//     breakpoints: {
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20
//       },
//       992: {
//         slidesPerView: 4,
//         spaceBetween: 20
//       },
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 30
//       }
//     },

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//     },

//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },

//     lazy: {
//       loadPrevNext: true,
//       loadPrevNextAmount: 2,
//     },
//   });
// }

// // 5. Главная функция инициализации
// function initAllSliders() {
//   console.log('=== ИНИЦИАЛИЗАЦИЯ ВСЕХ СЛАЙДЕРОВ ===');

//   try {
//     // Инициализируем все слайдеры
//     const heroSwiper = initHeroSlider();
//     const productSwiper = initProductSlider();
//     initProductsSliders();
//     const universalSwiper = initUniversalSlider();

//     // Логируем результат
//     console.log('Hero слайдер:', heroSwiper ? 'OK' : 'Не найден');
//     console.log('Product слайдер:', productSwiper ? 'OK' : 'Не найден');
//     console.log('Универсальный слайдер:', universalSwiper ? 'OK' : 'Не найден');

//     // Возвращаем все слайдеры для возможного доступа
//     return {
//       hero: heroSwiper,
//       product: productSwiper,
//       universal: universalSwiper
//     };

//   } catch (error) {
//     console.error('Ошибка инициализации слайдеров:', error);
//     return null;
//   }
// }

// // 6. Запуск при загрузке DOM
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initAllSliders);
// } else {
//   // DOM уже загружен
//   initAllSliders();
// }

// // 7. Экспорт для использования в других файлах
// export default initAllSliders;

// // 8. Глобальный доступ (опционально)
// if (typeof window !== 'undefined') {
//   window.initSliders = initAllSliders;
//   window.swiperModules = { Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax };
// }

// import Swiper from 'swiper';
// import { Pagination } from 'swiper/modules';
// import vars from "../_vars.js";

// ЖДЕМ ЗАГРУЗКИ DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('=== СЛАЙДЕРЫ: ДОМ ЗАГРУЖЕН ===');
  console.log('vars:', vars);
  console.log('heroSlider:', vars?.heroSlider);
  console.log('products__slider на странице:', document.querySelectorAll('.products__slider').length);

  // Только теперь инициализируем Swiper
  Swiper.use([Pagination]);

  // Инициализация hero слайдера
  // if (vars?.heroSlider) {
  //   console.log('Инициализация hero слайдера');
  //   const swiper = new Swiper(vars.heroSlider, {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     loop: true,
  //     pagination: {
  //       el: ".hero__pag",
  //       clickable: true,
  //     }
  //   });
  //   console.log('Hero слайдер создан:', swiper);
  // }

  // Остальной код...
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

  // products-slider.js
  document.addEventListener('DOMContentLoaded', function () {
    const productsSlider = document.querySelector('.products__slider');

    if (!productsSlider) return;

    // Инициализация Swiper
    const swiper = new Swiper(productsSlider, {
      // Основные настройки
      slidesPerView: 4, // Количество видимых слайдов по умолчанию
      spaceBetween: 20, // Отступ между слайдами
      loop: true, // Бесконечная прокрутка
      speed: 500, // Скорость анимации
      grabCursor: true, // Курсор-рука при наведении

      // Адаптивность
      breakpoints: {
        // при 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // при 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // при 992px
        992: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        // при 1200px
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },

      // Навигация (стрелки)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Пагинация (точки)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Скроллбар
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      // Автопрокрутка
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Эффекты
      effect: 'slide', // или 'fade', 'cube', 'coverflow', 'flip'

      // Параллакс
      parallax: true,

      // Отключение предзагрузки
      preloadImages: false,

      // Ленивая загрузка изображений
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
    });

    console.log('Swiper initialized:', swiper);


  });


  // vars.mainProductsInner

  vars.mainProductsInner.forEach(inner => {

    const swiper = new Swiper(inner.querySelector('.products__slider'), {
      slidesPerView: 4,
      spaceBetween: 24,
      loop: true,
      watchSlidesProgress: true,
      scrollbar: {
        el: inner.querySelector(".swiper-scrollbar"),
        draggable: true
      },
      navigation: {
        prevEl: inner.querySelector(".products__slider-btn--prev"),
        nextEl: inner.querySelector(".products__slider-btn--next")
      }
    });
  });


  // Регистрируем ВСЕ необходимые модули
  Swiper.use([Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax]);

  // Проверяем, существует ли vars
  if (!vars) {
    console.error('vars.js не загружен!');
  }

  // 1. Hero слайдер
  function initHeroSlider() {
    if (vars?.heroSlider) {
      console.log('Инициализация Hero слайдера');
      return new Swiper(vars.heroSlider, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 600,
        pagination: {
          el: ".hero__pag",
          clickable: true,
          dynamicBullets: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
    }
    return null;
  }

  // 2. Product слайдер
  function initProductSlider() {
    if (vars?.productSlider) {
      console.log('Инициализация Product слайдера');
      return new Swiper(vars.productSlider, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".product-hero__pag",
          clickable: true,
        }
      });
    }
    return null;
  }

  // 3. Продуктовые слайдеры с табами
  function initProductsSliders() {
    // Если есть переменная mainProductsInner
    if (vars?.mainProductsInner?.length) {
      console.log(`Инициализация ${vars.mainProductsInner.length} продуктовых слайдеров через vars`);

      vars.mainProductsInner.forEach((inner, index) => {
        const slider = inner.querySelector('.products__slider');
        if (!slider) {
          console.warn(`Слайдер не найден в mainProductsInner[${index}]`);
          return;
        }

        // Проверяем, не инициализирован ли уже
        if (slider.swiper) {
          console.log(`Слайдер ${index} уже инициализирован`);
          return;
        }

        new Swiper(slider, {
          modules: [Navigation, Scrollbar],
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          speed: 500,
          grabCursor: true,
          watchSlidesProgress: true,

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
            el: inner.querySelector(".swiper-scrollbar"),
            draggable: true
          },

          navigation: {
            prevEl: inner.querySelector(".products__slider-btn--prev"),
            nextEl: inner.querySelector(".products__slider-btn--next")
          },

          observer: true,
          observeParents: true,
        });
      });
      return;
    }

    // Альтернативный вариант: ищем слайдеры на странице
    const productsSliders = document.querySelectorAll('.products__slider');
    if (productsSliders.length) {
      console.log(`Найдено ${productsSliders.length} продуктовых слайдеров на странице`);

      productsSliders.forEach((slider, index) => {
        // Проверяем, не инициализирован ли уже
        if (slider.swiper) {
          console.log(`Продуктовый слайдер ${index} уже инициализирован`);
          return;
        }

        const parent = slider.closest('.products__inner');
        if (!parent) return;

        new Swiper(slider, {
          modules: [Navigation, Scrollbar],
          slidesPerView: 1,
          spaceBetween: 16,
          loop: true,
          speed: 500,
          grabCursor: true,
          watchSlidesProgress: true,

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
            el: parent.querySelector(".swiper-scrollbar"),
            draggable: true
          },

          navigation: {
            prevEl: parent.querySelector(".products__slider-btn--prev"),
            nextEl: parent.querySelector(".products__slider-btn--next")
          },

          observer: true,
          observeParents: true,
        });
      });
    }
  }

  // 4. Универсальный слайдер (если есть на странице)
  function initUniversalSlider() {
    const universalSlider = document.querySelector('.products__slider:not([data-initialized])');
    if (!universalSlider) return null;

    console.log('Инициализация универсального слайдера');

    return new Swiper(universalSlider, {
      modules: [Navigation, Scrollbar, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 500,
      grabCursor: true,

      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
    });
  }

  // 5. Главная функция инициализации
  function initAllSliders() {
    console.log('=== ИНИЦИАЛИЗАЦИЯ ВСЕХ СЛАЙДЕРОВ ===');

    try {
      // Инициализируем все слайдеры
      const heroSwiper = initHeroSlider();
      const productSwiper = initProductSlider();
      initProductsSliders();
      const universalSwiper = initUniversalSlider();

      // Логируем результат
      console.log('Hero слайдер:', heroSwiper ? 'OK' : 'Не найден');
      console.log('Product слайдер:', productSwiper ? 'OK' : 'Не найден');
      console.log('Универсальный слайдер:', universalSwiper ? 'OK' : 'Не найден');

      // Возвращаем все слайдеры для возможного доступа
      return {
        hero: heroSwiper,
        product: productSwiper,
        universal: universalSwiper
      };

    } catch (error) {
      console.error('Ошибка инициализации слайдеров:', error);
      return null;
    }
  }

  // 6. Запуск при загрузке DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSliders);
  } else {
    // DOM уже загружен
    initAllSliders();
  }

  // 7. Экспорт для использования в других файлах
  // export default initAllSliders;

  // 8. Глобальный доступ (опционально)
  if (typeof window !== 'undefined') {
    window.initSliders = initAllSliders;
    window.swiperModules = { Navigation, Scrollbar, Autoplay, Pagination, EffectFade, Parallax };
  }
});
