import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import vars from "../_vars.js";

Swiper.use([Navigation, Scrollbar]);

//  document.addEventListener('DOMContentLoaded', function() {


if (vars.mainProductsInner.length) {

  vars.mainProductsTabsBtns.forEach((btn) => {

  btn.addEventListener('click', (e) => {
    const activeTab = e.currentTarget.dataset.tab;

    vars.mainProductsTabsBtns.forEach((btn) => {
     btn.classList.remove("products-tabs__btn--active");

    e.currentTarget.classList.add("products-tabs__btn--active");
    vars.mainProductsInner.forEach(btn => {btn.classList.remove("products__inner--active");});
    document.querySelector(`.products__inner[data-target="${activeTab}"]`).classList.add("products__inner--active")
  });
  });
});


vars.mainProductsInner.forEach(inner => {
 const swiper = new Swiper(inner.querySelector('.products__slider'), {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  watchSlidesProgress: true,

  scrollbar: {
    el: inner.querySelector(".products__scrollbar"),
    // el: ".products__scrollbar",
    draggable: true
  },
  navigation: {
    // prevEl: ".products__slider-btn--prev",
    // nextEl: ".products__slider-btn--next"
    prevEl: inner.querySelector(".products__slider-btn--prev"),
    nextEl: inner.querySelector(".products__slider-btn--next")
  }
 });
});
 }
// });
// if (vars.mainProductsInner.length) {

// vars.mainProductsTabsBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const activeTab = e.currentTarget.dataset.tab
//   vars.mainProductsTabsBtns.forEach(btn => {btn.classList.remove("products-tabs__btn--active");});
//     e.currentTarget.classList.add("products-tabs__btn--active");
// vars.mainProductsInner.forEach(btn => {btn.classList.remove("products-tabs__btn--active");});
// document.querySelector(`.products__inner[data-target="${activeTab}"]`)
// .classList.add("products__inner--active")
//   });
// });

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
