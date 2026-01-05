import vars from "../_vars.js";

if(vars.map) {


// script.js
ymaps.ready(init);

function init() {
    // Координаты нескольких городов
    var cities = [
        {name: 'Москва', coords: [55.76, 37.64]},
        {name: 'Санкт-Петербург', coords: [59.94, 30.31]},
        {name: 'Екатеринбург', coords: [56.84, 60.61]},
        {name: 'Новосибирск', coords: [55.03, 82.92]}
    ];

    // Создаем карту
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 4,
        controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
    });

    // Добавляем метки для каждого города
    cities.forEach(function(city) {
        var placemark = new ymaps.Placemark(city.coords, {
            balloonContent: '<strong>' + city.name + '</strong><br>Координаты: ' + city.coords[0] + ', ' + city.coords[1]
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: '#ff0000'
        });

        myMap.geoObjects.add(placemark);
    });

    // Меняем тип карты при клике
    var mapTypeButtons = document.querySelectorAll('.map-type-btn');
    mapTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var type = this.getAttribute('data-type');
            myMap.setType('yandex#' + type);
        });
    });
}
}
