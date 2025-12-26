import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import vars from "../_vars.js";

Swiper.use([Pagination]);

if (vars.productSlider) {
 const swiper = new Swiper(vars.productSlider, {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
    pagination: {
      el: ".product-hero__pag",
      clickable: true,

  }
 });
}

// vars.mainProductsInner.forEach(inner => {

//  const swiper = new Swiper(inner.querySelector('.products__slider'), {
//   slidesPerView: 4,
//   spaceBetween: 24,
//   loop: true,
//   watchSlidesProgress: true,
//   scrollbar: {
//     el: inner.querySelector(".products__scrollbar"),
//     draggable: true
//   },
//   navigation: {
//     prevEl: inner.querySelector(".products__slider-btn--prev"),
//     nextEl: inner.querySelector(".products__slider-btn--next")
//   }
//  });
// });
// }
