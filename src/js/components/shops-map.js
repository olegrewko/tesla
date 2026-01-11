// import vars from "../_vars.js";

// if(vars.map) {


// script.js
// ymaps.ready(init);

// function init() {
//     // Координаты нескольких городов
//     var cities = [
//         {name: 'Москва', coords: [55.76, 37.64]},
//         {name: 'Санкт-Петербург', coords: [59.94, 30.31]},
//         {name: 'Екатеринбург', coords: [56.84, 60.61]},
//         {name: 'Новосибирск', coords: [55.03, 82.92]}
//     ];

//     // Создаем карту
//     var myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 4,
//         controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
//     });

//     // Добавляем метки для каждого города
//     cities.forEach(function(city) {
//         var placemark = new ymaps.Placemark(city.coords, {
//             balloonContent: '<strong>' + city.name + '</strong><br>Координаты: ' + city.coords[0] + ', ' + city.coords[1]
//         }, {
//             preset: 'islands#circleDotIcon',
//             iconColor: '#ff0000'
//         });

//         myMap.geoObjects.add(placemark);
//     });

//     // Меняем тип карты при клике
//     var mapTypeButtons = document.querySelectorAll('.map-type-btn');
//     mapTypeButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             var type = this.getAttribute('data-type');
//             myMap.setType('yandex#' + type);
//         });
//     });
// }
// }
// import vars from "../_vars.js";

// // Проверяем существует ли элемент с id="map" на странице
// if (vars.map) {
//   ymaps.ready(init);

//   function init() {
//     console.log('Инициализация карты...');

//     // Проверяем что элемент все еще существует
//     var mapElement = document.getElementById('map');
//     if (!mapElement) {
//       console.error('Элемент #map не найден');
//       return;
//     }

//     // Координаты нескольких городов
//     var cities = [
//       { name: 'Москва', coords: [55.76, 37.64] },
//       { name: 'Санкт-Петербург', coords: [59.94, 30.31] },
//       { name: 'Екатеринбург', coords: [56.84, 60.61] },
//       { name: 'Новосибирск', coords: [55.03, 82.92] }
//     ];

//     // Создаем карту
//     var myMap = new ymaps.Map("map", {
//       center: [55.76, 37.64],
//       zoom: 4,
//       controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
//     });

//     console.log('Карта создана');

//     // Добавляем метки для каждого города
//     cities.forEach(function (city) {
//       var placemark = new ymaps.Placemark(city.coords, {
//         balloonContent: '<strong>' + city.name + '</strong><br>Координаты: ' + city.coords[0] + ', ' + city.coords[1]
//       }, {
//         preset: 'islands#circleDotIcon',
//         iconColor: '#ff0000'
//       });

//       myMap.geoObjects.add(placemark);
//     });

//     console.log('Метки добавлены');

//     // Меняем тип карты при клике
//     var mapTypeButtons = document.querySelectorAll('.map-type-btn');
//     if (mapTypeButtons.length > 0) {
//       mapTypeButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//           var type = this.getAttribute('data-type');
//           myMap.setType('yandex#' + type);
//           console.log('Тип карты изменен на:', type);
//         });
//       });
//       console.log('Обработчики кнопок добавлены');
//     } else {
//       console.warn('Кнопки .map-type-btn не найдены');
//     }
//   }
// } else {
//   console.log('Элемент карты не найден, инициализация пропущена');
// }
// script.js - самодостаточный вариант
// (function () {
//   'use strict';

//   // Ждем загрузки DOM
//   document.addEventListener('DOMContentLoaded', function () {
//     var mapElement = document.getElementById('map');

//     if (!mapElement) {
//       console.log('Элемент #map не найден на странице');
//       return;
//     }

//     console.log('Элемент карты найден, инициализируем...');

//     ymaps.ready(initMap);
//   });

//   function initMap() {
//     console.log('ymaps.ready вызван');

//     // Координаты нескольких городов
//     var cities = [
//       { name: 'Москва', coords: [55.76, 37.64] },
//       { name: 'Санкт-Петербург', coords: [59.94, 30.31] },
//       { name: 'Екатеринбург', coords: [56.84, 60.61] },
//       { name: 'Новосибирск', coords: [55.03, 82.92] }
//     ];

//     // Создаем карту
//     var myMap = new ymaps.Map("map", {
//       center: [55.76, 37.64],
//       zoom: 4,
//       controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
//     });

//     console.log('Карта Яндекс создана');

//     // Добавляем метки для каждого города
//     cities.forEach(function (city) {
//       var placemark = new ymaps.Placemark(city.coords, {
//         balloonContent: '<strong>' + city.name + '</strong><br>Координаты: ' + city.coords[0] + ', ' + city.coords[1]
//       }, {
//         preset: 'islands#circleDotIcon',
//         iconColor: '#ff0000'
//       });

//       myMap.geoObjects.add(placemark);
//     });

//     // Меняем тип карты при клике
//     var mapTypeButtons = document.querySelectorAll('.map-type-btn');
//     mapTypeButtons.forEach(function (button) {
//       button.addEventListener('click', function () {
//         var type = this.getAttribute('data-type');
//         myMap.setType('yandex#' + type);
//       });
//     });
//   }
// })();
