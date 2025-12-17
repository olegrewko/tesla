import { disableScroll } from "../functions/disable-scroll.js";
import { enableScroll } from "../functions/enable-scroll.js";

 const megamenus = document.querySelectorAll(".megamenu");
// const catalog = document.querySelectorAll(".megamenu");

if(megamenus.length) {
const headerBtns = document.querySelectorAll(".header__btn");
const catalogMenu = document.querySelector(".catalog-menu");
const collectionsMenu = document.querySelector(".collections-menu");

headerBtns.forEach(btn => {
//  megamenus.forEach(megamenu => {megamenu.classList.remove("megamenu--visible"); });

if (btn.classList.contains('header__catalog')) {
   btn.addEventListener('click', (e) => {
megamenus.forEach(megamenu => {megamenu.classList.remove("megamenu--visible"); });
   if (!catalogMenu.classList.contains('megamenu--visible')) {

   disableScroll();
   catalogMenu.classList.add('megamenu--visible');
   e.currentTarget.classList.add('header__btn--active');
} else {
 enableScroll();
 catalogMenu.classList.remove('megamenu--visible');
 e.currentTarget.classList.remove('header__btn--active');
}
});

}

if (btn.classList.contains('header__collections')) {
   btn.addEventListener('click', (e) => {
megamenus.forEach(megamenu => {megamenu.classList.remove("megamenu--visible"); });
   if (!collectionsMenu.classList.contains('megamenu--visible')) {

   disableScroll();
   collectionsMenu.classList.add('megamenu--visible');
   e.currentTarget.classList.add('header__btn--active');
} else {
 enableScroll();
 collectionsMenu.classList.remove('megamenu--visible');
 e.currentTarget.classList.remove('header__btn--active');
}
});
}
});

}
// const catalog = document.querySelectorAll(".megamenu");

// if(catalog.length) {
// const headerBtns = document.querySelectorAll(".header__btn");
// const catalogMenu = document.querySelector(".catalog-menu");

// headerBtns.forEach(btn => {
// if (btn.classList.contains('header__catalog')) {
//    btn.addEventListener('click', (e) => {
//     if (!catalogMenu.classList.contains('megamenu--visible')) {
//       disableScroll();
//       catalogMenu.classList.add('megamenu--visible');
//     } else {
//       enableScroll();
//       catalogMenu.classList.remove('megamenu--visible');
//     }
//    });
//   }
// });
// }
// Ждем загрузки DOM
// document.addEventListener('DOMContentLoaded', function() {
//   const catalog = document.querySelectorAll(".megamenu");
//   console.log('1. Найдено элементов .megamenu:', catalog.length);

//   // ИСПРАВЛЕННОЕ УСЛОВИЕ!
//   if(catalog.length > 0) {
//     const headerBtns = document.querySelectorAll(".header__btn");
//     const catalogMenu = document.querySelector(".catalog-menu");

//     console.log('2. Найдено кнопок .header__btn:', headerBtns.length);
//     console.log('3. Найден .catalog-menu?:', catalogMenu);

//     headerBtns.forEach(btn => {
//       console.log('4. Проверяю кнопку:', btn, 'Классы:', btn.classList);

//       if (btn.classList.contains('header__catalog')) {
//         console.log('5. Это кнопка каталога! Вешаю обработчик...');

//         btn.addEventListener('click', function(e) {
//           console.log('6. КЛИК! catalogMenu сейчас:', catalogMenu);

//           if (!catalogMenu.classList.contains('megamenu--visible')) {
//             console.log('7. Открываю меню');
//             disableScroll();
//             catalogMenu.classList.add('megamenu--visible');
//           } else {
//             console.log('8. Закрываю меню');
//             enableScroll();
//             catalogMenu.classList.remove('megamenu--visible');
//           }
//         });
//       }
//     });
//   } else {
//     console.warn('Нет элементов .megamenu на странице!');
//   }
// });
