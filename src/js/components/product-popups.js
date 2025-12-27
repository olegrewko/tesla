
import vars from "../_vars.js";



if (vars.productPopupsBtns.length) {

vars.productPopupsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const activeTab = e.currentTarget.dataset.tab

  vars.productPopups.forEach((popup) => {
    btn.classList.remove("product-hero__popup--active");
  });

document.querySelector(`.product-hero__popup[data-target="${activeTab}"]`)
.classList.add("product-hero__popup--active")
  });
});

vars.productPopupsClose.forEach((btn) => {
   btn.addEventListener('click', (e) => {

  vars.productPopups.forEach((popup) => {
    popup.classList.remove("product-hero__popup--active");
  });

  });
});


}
