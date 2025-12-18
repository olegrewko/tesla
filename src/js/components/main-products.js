import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import vars from "../_vars.js";


Swiper.use([Navigation, Scrollbar]);
if (vars.mainProductsInner.length) {

vars.mainProductsInner.forEach(inner => {

});
 const swiper = new Swiper(inner.querySelector('.products__slider'), {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  watchSlidesProgress: true,
  scrollbar: {
    el: inner.querySelector(".products__scrollbar"),
    draggable: true
  },
  navigation: {
    prevEl: inner.querySelector(".products__slider-btn--prev"),
    nextEl: inner.querySelector(".products__slider-btn--next")
  }
 });
}
