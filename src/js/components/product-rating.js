import vars from "../_vars.js";

if (vars.productRatingBar) {
  const maxReviews = parseInt(vars.productRatingBar.dataset.maxReviews)

  const ratingBars = vars.productRatingBar.querySelectorAll('.product-test__rating-bar');

ratingBars.forEach(bar => {
  const value = parseInt(bar.dataset.value);
  const percent = (value / maxReviews) * 100;

  const valueBar = bar.querySelector(".product-test__rating-value-bar");
  valueBar.style.width = `${percent}%`;

})
}
