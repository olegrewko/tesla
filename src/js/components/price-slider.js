// price-slider.js или добавьте в main.js
function initPriceSlider() {
  const priceSlider = document.querySelector('.price-range');

  if (!priceSlider) {
    console.log('Слайдер цены не найден');
    return;
  }

  // Проверяем, подключен ли noUiSlider
  if (typeof noUiSlider === 'undefined') {
    console.error('noUiSlider не подключен');
    return;
  }

  try {
    // Создаем слайдер
    noUiSlider.create(priceSlider, {
      start: [0, 50000],
      connect: true,
      range: {
        'min': 0,
        'max': 50000
      },
      step: 1000,
      format: {
        to: function (value) {
          return Math.round(value).toLocaleString() + ' ₽';
        },
        from: function (value) {
          return parseInt(value.replace(/\s₽/g, '').replace(/\s/g, ''));
        }
      }
    });

    // Обновляем отображение значений
    const priceValues = [
      document.querySelector('.price-min'),
      document.querySelector('.price-max')
    ];

    if (priceValues[0] && priceValues[1]) {
      priceSlider.noUiSlider.on('update', function (values, handle) {
        priceValues[handle].textContent = values[handle];
      });
    }

    console.log('Слайдер цены инициализирован');

  } catch (error) {
    console.error('Ошибка инициализации слайдера:', error);
  }
}
