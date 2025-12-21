import vars from "../_vars.js";
import  Cookies  from "js-cookie";

if (!Cookies.get('cookie-block')) {
  vars.cookieBlock.classList.add("cookie-block--visible");

 vars.cookieBlockBtn.addEventListener('click', (e)  => {
 Cookies.set('cookie-block', 'true', {expires: 31});
vars.cookieBlock.classList.remove("cookie-block--visible");
 })
}
