 import vars  from "../_vars.js";


// Защита от двойного выполнения
if (window.catalogFilterInitialized) {
  console.log('Фильтр уже инициализирован');
} else {
  window.catalogFilterInitialized = true;

  document.addEventListener('DOMContentLoaded', function () {
    console.log('=== ИНИЦИАЛИЗАЦИЯ ФИЛЬТРА ===');

    if (!vars?.catalogFilterBlocks?.length) {
      console.warn('Блоки фильтра не найдены');
      return;
    }

    console.log('Блоков найдено:', vars.catalogFilterBlocks.length);

    vars.catalogFilterBlocks.forEach((block, index) => {
      const btn = block.querySelector('.catalog-filter__btn');
      const inner = block.querySelector('.catalog-filter__inner');

      if (!btn || !inner) {
        console.error(`Не найдены элементы в блоке ${index}`);
        return;
      }

      console.log(`Блок ${index}: inner.scrollHeight = ${inner.scrollHeight}px`);

      // Инициализация состояний
      if (block.classList.contains('catalog-filter__block--open')) {
        // Блок открыт
        inner.style.maxHeight = inner.scrollHeight + 'px';
        inner.style.opacity = '1';
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-label', 'Закрыть блок');
      } else {
        // Блок закрыт
        inner.style.maxHeight = '0';
        inner.style.opacity = '0';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Открыть блок');
      }

      // Обработчик клика
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = block.classList.contains('catalog-filter__block--open');
        const willBeOpen = !isOpen;

        console.log(`Клик по блоку ${index}: ${isOpen ? 'закрываем' : 'открываем'}`);

        // Переключаем класс
        block.classList.toggle('catalog-filter__block--open');

        // Обновляем ARIA
        btn.setAttribute('aria-expanded', willBeOpen);
        btn.setAttribute('aria-label', willBeOpen ? 'Закрыть блок' : 'Открыть блок');

        // Анимация
        if (willBeOpen) {
          // Открываем
          inner.style.maxHeight = inner.scrollHeight + 'px';
          inner.style.opacity = '1';
        } else {
          // Закрываем
          inner.style.maxHeight = '0';
          inner.style.opacity = '0';
        }
      });

      // Обработчик клавиатуры
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });

    console.log('=== ФИЛЬТР ИНИЦИАЛИЗИРОВАН ===');
  });
}
// import vars from "../_vars.js";
// .catalog-filter-badge
//
//
document.addEventListener('DOMContentLoaded', function () {
  // Инициализация бейджей фильтра
  initFilterBadges();

  // Если есть кнопка "Очистить все"
  initClearAllButton();
});

/**
 * Инициализация бейджей фильтра
 */
function initFilterBadges() {
  // Находим все бейджи
  const badges = document.querySelectorAll('.catalog-filter-badge');

  if (!badges.length) {
    console.log('Бейджи фильтра не найдены');
    return;
  }

  console.log(`Найдено ${badges.length} бейдж(ей)`);

  badges.forEach((badge, index) => {
    // Находим кнопку закрытия внутри бейджа
    const closeBtn = badge.querySelector('.catalog-filter-badge__close');

    if (!closeBtn) {
      console.warn(`Бейдж ${index}: не найдена кнопка закрытия`);
      return;
    }

    // Находим текст бейджа для логов
    const badgeText = badge.querySelector('.catalog-filter-badge__text');
    const textContent = badgeText ? badgeText.textContent.trim() : 'без текста';

    console.log(`Настройка бейджа ${index}: "${textContent}"`);

    // Добавляем обработчик клика на кнопку закрытия
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log(`Закрытие бейджа: "${textContent}"`);

      // Удаляем бейдж с анимацией
      removeBadgeWithAnimation(badge);

      // Обновляем состояние фильтров (если нужно)
      updateFilterState(textContent);
    });

    // Добавляем обработчик клавиатуры для доступности
    closeBtn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeBtn.click();
      }
    });

    // Добавляем title для доступности
    closeBtn.setAttribute('title', `Удалить фильтр: ${textContent}`);
    closeBtn.setAttribute('aria-label', `Удалить фильтр: ${textContent}`);
  });
}

/**
 * Инициализация кнопки "Очистить все"
 */
function initClearAllButton() {
  const clearAllBtn = document.querySelector('.catalog__reset');

  if (!clearAllBtn) {
    console.log('Кнопка "Очистить все" не найдена');
    return;
  }

  console.log('Найдена кнопка "Очистить все"');

  clearAllBtn.addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Очистка всех фильтров');

    // Находим все бейджи
    const badges = document.querySelectorAll('.catalog-filter-badge');

    if (!badges.length) {
      console.log('Нет бейджей для очистки');
      return;
    }

    // Подтверждение (опционально)
    if (!confirm('Вы уверены, что хотите очистить все фильтры?')) {
      return;
    }

    // Удаляем все бейджи с анимацией
    removeAllBadgesWithAnimation(badges);

    // Сбрасываем все фильтры в форме
    resetAllFilters();
  });

  // Обработчик клавиатуры
  clearAllBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      clearAllBtn.click();
    }
  });
}

/**
 * Удаление бейджа с анимацией
 */
function removeBadgeWithAnimation(badge) {
  // Добавляем класс для анимации исчезновения
  badge.style.transition = 'all 0.3s ease';
  badge.style.opacity = '0';
  badge.style.transform = 'scale(0.8)';
  badge.style.maxHeight = '0';
  badge.style.margin = '0';
  badge.style.padding = '0';
  badge.style.overflow = 'hidden';

  // Удаляем через время анимации
  setTimeout(() => {
    badge.remove();
    console.log('Бейдж удален из DOM');

    // Проверяем, остались ли бейджи
    const remainingBadges = document.querySelectorAll('.catalog-filter-badge');
    console.log(`Осталось бейджей: ${remainingBadges.length}`);

    // Если бейджей не осталось, можно скрыть контейнер
    if (remainingBadges.length === 0) {
      const container = document.querySelector('.catalog__filtered');
      if (container) {
        container.style.display = 'none';
      }
    }
  }, 300);
}

/**
 * Удаление всех бейджей с анимацией
 */
function removeAllBadgesWithAnimation(badges) {
  const badgesArray = Array.from(badges);

  // Удаляем каждый бейдж с задержкой для каскадного эффекта
  badgesArray.forEach((badge, index) => {
    setTimeout(() => {
      removeBadgeWithAnimation(badge);
    }, index * 100); // Задержка для каскадного эффекта
  });
}

/**
 * Обновление состояния фильтров при удалении бейджа
 */
function updateFilterState(filterValue) {
  // Здесь должна быть логика обновления состояния фильтров
  // Например, снятие чекбокса в фильтре

  console.log(`Обновление фильтра для значения: ${filterValue}`);

  // Пример: снимаем соответствующий чекбокс
  const checkboxes = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
  checkboxes.forEach(checkbox => {
    // Проверяем, соответствует ли чекбокс удаленному бейджу
    // Это зависит от вашей структуры данных
    // Например, можно сравнивать значения или labels
    if (checkbox.checked) {
      // Ваша логика определения соответствия
      // checkbox.checked = false;
    }
  });
}

/**
 * Сброс всех фильтров в форме
 */
function resetAllFilters() {
  // Сбрасываем все чекбоксы и радиокнопки
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
    radio.checked = false;
  });

  // Сбрасываем поля ввода цены
  const priceInputs = document.querySelectorAll('.catalog-filter__price-input');
  priceInputs.forEach(input => {
    input.value = '';
  });

  // Сбрасываем range слайдер (если есть)
  const rangeSlider = document.getElementById('price-range');
  if (rangeSlider) {
    // Логика сброса слайдера зависит от реализации
    console.log('Сброс range слайдера');
  }

  // Обновляем URL или делаем AJAX запрос (если нужно)
  updateCatalogAfterFilterReset();
}

/**
 * Обновление каталога после сброса фильтров
 */
function updateCatalogAfterFilterReset() {
  console.log('Обновление каталога...');

  // Здесь может быть:
  // 1. AJAX запрос для обновления товаров
  // 2. Редирект на страницу без фильтров
  // 3. Обновление счетчика товаров

  // Пример AJAX запроса:
  /*
  fetch('/catalog/reset-filters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    // Обновляем список товаров
    updateProductList(data.products);
  })
  .catch(error => console.error('Ошибка:', error));
  */
}

/**
 * Динамическое добавление нового бейджа
 */
export function addFilterBadge(text, value, type = 'checkbox') {
  const container = document.querySelector('.catalog__filtered');

  if (!container) {
    console.error('Контейнер для бейджей не найден');
    return;
  }

  // Показываем контейнер, если он был скрыт
  container.style.display = 'flex';

  // Создаем HTML бейджа
  const badgeHTML = `
    <div class="catalog-filter-badge" data-filter-type="${type}" data-filter-value="${value}">
      <span class="catalog-filter-badge__text">${text}</span>
      <button class="btn-reset catalog-filter-badge__close" aria-label="Удалить фильтр: ${text}">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9998 4.99985C14.8436 4.84362 14.6317 4.75586 14.4107 4.75586C14.1897 4.75586 13.9778 4.84362 13.8215 4.99985L9.99985 8.82152L6.17818 4.99985C6.02191 4.84362 5.80998 4.75586 5.58901 4.75586C5.36804 4.75586 5.15612 4.84362 4.99985 4.99985C4.84362 5.15612 4.75586 5.36804 4.75586 5.58901C4.75586 5.80998 4.84362 6.02191 4.99985 6.17818L8.82152 9.99985L4.99985 13.8215C4.84362 13.9778 4.75586 14.1897 4.75586 14.4107C4.75586 14.6317 4.84362 14.8436 4.99985 14.9998C5.15612 15.1561 5.36804 15.2438 5.58901 15.2438C5.80998 15.2438 6.02191 15.1561 6.17818 14.9998L9.99985 11.1782L13.8215 14.9998C13.9778 15.1561 14.1897 15.2438 14.4107 15.2438C14.6317 15.2438 14.8436 15.1561 14.9998 14.9998C15.1561 14.8436 15.2438 14.6317 15.2438 14.4107C15.2438 14.1897 15.1561 13.9778 14.9998 13.8215L11.1782 9.99985L14.9998 6.17818C15.1561 6.02191 15.2438 5.80998 15.2438 5.58901C15.2438 5.36804 15.1561 5.15612 14.9998 4.99985Z" fill="#666666" />
        </svg>
      </button>
    </div>
  `;

  // Добавляем бейдж перед кнопкой "Очистить"
  const clearBtn = container.querySelector('.catalog__reset');
  if (clearBtn) {
    clearBtn.insertAdjacentHTML('beforebegin', badgeHTML);
  } else {
    container.insertAdjacentHTML('beforeend', badgeHTML);
  }

  // Инициализируем новый бейдж
  const newBadge = container.querySelector('.catalog-filter-badge:last-child');
  initSingleBadge(newBadge);

  console.log(`Добавлен бейдж: "${text}"`);
}

/**
 * Инициализация одного бейджа
 */
function initSingleBadge(badge) {
  const closeBtn = badge.querySelector('.catalog-filter-badge__close');
  const badgeText = badge.querySelector('.catalog-filter-badge__text').textContent.trim();

  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    removeBadgeWithAnimation(badge);
    updateFilterState(badgeText);
  });

  closeBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeBtn.click();
    }
  });
}
/**
 * Если нужно связать бейджи с чекбоксами фильтров
 */

// В обработчиках чекбоксов фильтра:
document.querySelectorAll('.custom-checkbox__field, .custom-radio__field').forEach(input => {
  input.addEventListener('change', function () {
    const label = this.closest('label');
    const text = label.querySelector('.custom-checkbox__content, .custom-radio__content').textContent.trim();

    if (this.checked) {
      // Добавляем бейдж при выборе фильтра
      addFilterBadge(text, this.value || text, this.type);
    } else {
      // Удаляем соответствующий бейдж при снятии фильтра
      removeBadgeByText(text);
    }
  });
});

/**
 * Удаление бейджа по тексту
 */
function removeBadgeByText(text) {
  const badges = document.querySelectorAll('.catalog-filter-badge__text');
  badges.forEach(badgeText => {
    if (badgeText.textContent.trim() === text) {
      const badge = badgeText.closest('.catalog-filter-badge');
      if (badge) {
        removeBadgeWithAnimation(badge);
      }
    }
  });
}
// Простой JS для улучшения UX---------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  // Удаление фильтров
  document.querySelectorAll('.catalog-filter-badge__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      this.closest('.catalog-filter-badge').remove();
    });
  });

  // Очистка всех фильтров
  const resetBtn = document.querySelector('.catalog__reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      document.querySelectorAll('.catalog-filter-badge').forEach(badge => {
        badge.remove();
      });
    });
  }

  // Селект сортировки
  const selectBtn = document.querySelector('.custom-select__btn');
  const selectDropdown = document.querySelector('.custom-select__dropdown');
  const selectOptions = document.querySelectorAll('.custom-select__choose');

  if (selectBtn && selectDropdown) {
    selectBtn.addEventListener('click', function () {
      selectDropdown.style.display = selectDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Закрытие при клике вне селекта
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.custom-select')) {
        selectDropdown.style.display = 'none';
      }
    });

    // Выбор опции
    selectOptions.forEach(option => {
      option.addEventListener('click', function () {
        selectBtn.querySelector('span').textContent = this.textContent;
        selectOptions.forEach(opt => opt.classList.remove('custom-select__choose--active'));
        this.classList.add('custom-select__choose--active');
        selectDropdown.style.display = 'none';
      });
    });
  }

  // Закрытие dropdown по ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && selectDropdown) {
      selectDropdown.style.display = 'none';
    }
  });
});
