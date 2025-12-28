export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  enterModalSteps: document.querySelectorAll(".enter-modal__step"),
  mainProductsInner:document.querySelectorAll(".products__inner"),
mainProductsTabsBtns:document.querySelectorAll(".products-tabs__btn"),


  subscribeForm: document.querySelector(".subscribe__form"),
  cookieBlock: document.querySelector(".cookie-block"),
  cookieBlockBtn: document.querySelector(".cookie-block__btn"),
  catalogFilterBlocks: document.querySelectorAll(".catalog-filter__block"),
  // filterPrice: document.querySelectorAll(""),

  priceRange: document.querySelector('.price-range'),
  priceMin: document.getElementById('price-min'),
  priceMax: document.getElementById('price-max'),
  customSelects: document.querySelectorAll(".custom-select"),
  productSlider: document.querySelector(".product-hero__slider"),
  productPopupsBtns: document.querySelectorAll(".product-hero__btn"),
  productPopups: document.querySelectorAll(".product-hero__popup"),
  productPopupsClose: document.querySelectorAll(".product-hero__popup-close"),
  productRatingBar: document.querySelector(".product-test__rating-bars"),
}
