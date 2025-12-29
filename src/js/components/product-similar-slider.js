import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import vars from "../_vars.js";


if (vars.productSimilar) {
const swiper = new Swiper(vars.productSimilar.querySelector('.product-similar__slider'), {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  watchSlidesProgress: true,

  scrollbar: {
    el: vars.productSimilar.querySelector(".product-similar__scrollbar"),
    // el: ".products__scrollbar",
    draggable: true
  },
  navigation: {
    // prevEl: ".products-similar__slider-btn--prev",
    // nextEl: ".products-similar__slider-btn--next"
    prevEl: vars.productSimilar.querySelector(".product-similar__slider-btn--prev"),
    nextEl: vars.productSimilar.querySelector(".product-similar__slider-btn--next")
  }
 });
}
