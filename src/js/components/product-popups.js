import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import vars from "../_vars.js";

Swiper.use([Navigation, Scrollbar]);

if (vars.mainProductsInner.length) {

vars.mainProductsTabsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const activeTab = e.currentTarget.dataset.tab
  vars.mainProductsTabsBtns.forEach(btn => {btn.classList.remove("products-tabs__btn--active");});
    e.currentTarget.classList.add("products-tabs__btn--active");
vars.mainProductsInner.forEach(btn => {btn.classList.remove("products-tabs__btn--active");});
document.querySelector(`.products__inner[data-target="${activeTab}"]`)
.classList.add("products__inner--active")
  });
});
