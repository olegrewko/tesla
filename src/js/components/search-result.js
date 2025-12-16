import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";


const search = document.querySelector(".header-search");
if(search) {
const searchInput = document.querySelector(".header-search__input");
const searchResult = document.querySelector(".search-result");
// const overlay = document.querySelector(".overlay");

searchInput.addEventListener('input', (e) => {
if(e.currentTarget.value.length > 0) {
  disableScroll();
  searchResult.classList.add('search-result--visible')
} else {
  enableScroll();
searchResult.classList.remove('search-result--visible')
}
});
}
