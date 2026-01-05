import vars from "../_vars.js";

// if (vars.productRatingBar) {
//   const maxReviews = parseInt(vars.productRatingBar.dataset.maxReviews);

//   const ratingBars = vars.productRatingBar.querySelectorAll('.product-test__rating-bar');

// ratingBars.forEach(bar => {
//   const value = parseInt(bar.dataset.value);
//   const percent = (value / maxReviews) * 100;

//   const valueBar = bar.querySelector(".product-test__rating-value-bar");
//   valueBar.style.width = `${percent}%`;

// })
// }

// rating.js
document.addEventListener('DOMContentLoaded', function() {
  const ratingBars = document.querySelector('.product-test__rating-bars');

  if (!ratingBars) return;

  const maxReviews = parseInt(ratingBars.getAttribute('data-max-reviews')) || 1000;
  const bars = ratingBars.querySelectorAll('.product-test__rating-bar');

  bars.forEach(bar => {
    const value = parseInt(bar.getAttribute('data-value'));
    const percentage = (value / maxReviews) * 100;
    const valueBar = bar.querySelector('.product-test__rating-value-bar');

    // Устанавливаем ширину с небольшой задержкой для анимации
    setTimeout(() => {
      valueBar.style.width = percentage + '%';
    }, 100);
  });
});
