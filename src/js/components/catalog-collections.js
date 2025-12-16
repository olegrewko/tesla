import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";


const catalog = document.querySelector(".catalog");
if(miniCart) {
const headerBtns = document.querySelectorAll(".header__btn");
const catalogMenu = document.querySelector(".catalog-menu");

headerBtns.forEach(btn => {
if (btn.classList.contains('header__catalog')) {
btn.addEventListener('click', (e) => {
if (!catalogMenu.classList.contains('megamenu--visible')) {
 disableScroll();
 catalogMenu.classList.add('megamenu--visible');
 e.currentTarget.classList.add('header-btn--active');
} else {
 enableScroll();
catalogMenu.classList.remove('megamenu--visible');
e.currentTarget.classList.remove('header-btn--active');
}
});

}
});



// miniCartBtn.addEventListener('click', () => {
// miniCart.classList.add('mini-cart--active');
// overlay.classList.add('overlay--visible');
// disableScroll();
// });
// miniCartClose.addEventListener('click', () => {
// miniCart.classList.remove('mini-cart--active');

// enableScroll();
// });
}
