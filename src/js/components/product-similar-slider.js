import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import vars from "../_vars.js";




// if (vars.productSimilar) {
// const swiper = new Swiper(vars.productSimilar.querySelector('.product-similar__slider'), {
//   slidesPerView: 4,
//   spaceBetween: 24,
//   loop: true,
//   watchSlidesProgress: true,

//   scrollbar: {
//     el: vars.productSimilar.querySelector(".product-similar__scrollbar"),
//     // el: ".products__scrollbar",
//     draggable: true
//   },
//   navigation: {
//     // prevEl: ".products-similar__slider-btn--prev",
//     // nextEl: ".products-similar__slider-btn--next"
//     prevEl: vars.productSimilar.querySelector(".product-similar__slider-btn--prev"),
//     nextEl: vars.productSimilar.querySelector(".product-similar__slider-btn--next")
//   }
//  });
// }
// import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';

// // Инициализация после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // const productSimilar = document.querySelector('.product-similar');

  if (vars.productSimilar) {
    // Небольшая задержка для гарантии полной загрузки стилей
    setTimeout(() => {
      const swiper = new Swiper(vars.productSimilar.querySelector('.product-similar__slider'), {
        modules: [Scrollbar, Navigation],
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        watchSlidesProgress: true,
        centeredSlides: false,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        },

        scrollbar: {
          el: vars.productSimilar.querySelector('.product-similar__scrollbar'),
          draggable: true,
          dragSize: 'auto'
        },

        navigation: {
          prevEl: vars.productSimilar.querySelector('.product-similar__slider-btn--prev'),
          nextEl: vars.productSimilar.querySelector('.product-similar__slider-btn--next')
        },

        // Решаем проблему с отображением
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        on: {
          init: function () {
            // Принудительное обновление после инициализации
            setTimeout(() => {
              this.update();
            }, 100);
          }
        }
      });

      // Также обновляем при изменении размера окна
      window.addEventListener('resize', () => {
        swiper.update();
      });
    }, 100);
  }
});
