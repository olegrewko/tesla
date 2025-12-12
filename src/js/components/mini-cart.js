import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";


const miniCart = document.querySelector(".mini-cart");
if(miniCart) {
const miniCartBtn = document.querySelector(".header__cart");
const miniCartClose = document.querySelector(".mini-cart__close");
const overlay = document.querySelector(".overlay");
miniCartBtn.addEventListener('click', () => {
miniCart.classList.add('mini-cart--active');
overlay.classList.add('overlay--visible');
disableScroll();
});
miniCartClose.addEventListener('click', () => {
miniCart.classList.remove('mini-cart--active');
overlay.classList.remove('overlay--visible');
enableScroll();
});
}
