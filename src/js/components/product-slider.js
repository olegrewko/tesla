import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import vars from "../_vars.js";

Swiper.use([Pagination]);

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

// products-slider.js
document.addEventListener('DOMContentLoaded', function() {
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

  // Дополнительные элементы управления
  // addCustomControls(swiper);
});

// Дополнительные кастомные элементы управления
// function addCustomControls(swiper) {
  // Создаем контейнер для кнопок
  // const sliderContainer = swiper.el;
  // const controlsContainer = document.createElement('div');
  // controlsContainer.className = 'slider-controls';
  // controlsContainer.style.cssText = `
  //   display: flex;
  //   justify-content: center;
  //   gap: 10px;
  //   margin-top: 20px;
  // `;

  // Кнопка "Начать сначала"
  // const restartBtn = document.createElement('button');
  // restartBtn.className = 'btn btn--secondary';
  // restartBtn.textContent = 'Начать сначала';
  // restartBtn.addEventListener('click', () => {
  //   swiper.slideTo(0);
  // });

  // Кнопка паузы/продолжения автопрокрутки
  // const toggleAutoplayBtn = document.createElement('button');
  // toggleAutoplayBtn.className = 'btn btn--secondary';
  // toggleAutoplayBtn.textContent = 'Пауза';

  // toggleAutoplayBtn.addEventListener('click', () => {
  //   if (swiper.autoplay.running) {
  //     swiper.autoplay.stop();
  //     toggleAutoplayBtn.textContent = 'Продолжить';
  //   } else {
  //     swiper.autoplay.start();
  //     toggleAutoplayBtn.textContent = 'Пауза';
  //   }
  // });

  // controlsContainer.appendChild(restartBtn);
  // controlsContainer.appendChild(toggleAutoplayBtn);
  // sliderContainer.appendChild(controlsContainer);
// }
// vars.mainProductsInner------------------------------------

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
