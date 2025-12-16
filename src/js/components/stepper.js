// document.addEventListener('DOMContentLoaded', function() {
//   const steppers = document.querySelectorAll('.stepper');



// if (steppers) {
//   steppers.forEach(stepper => {
//     const input = stepper.querySelector('.stepper__input');
//     const minus = stepper.querySelector('.stepper__minus');
//     const plus = stepper.querySelector('.stepper__plus');

//     const updateButtons = (value) => {
//       if (value <= 1) {
//         minus.classList.add('stepper__disabled');
//       } else {
//         minus.classList.remove('stepper__disabled');
//       }
//  if (value >= 99) {
//         plus.classList.add('stepper__disabled');
//       } else {
//         plus.classList.remove('stepper__disabled');
//       }
//     }

//     const updateValue = (newValue) => {
//     let num = parseInt(newValue);
//     if (isNaN(num)) num = 1;
//     if (num < 1) num = 1;
//     if (num > 99) num = 99;
//     input.value = num;
//     updateButtons(num);
//     return num;
//   }
//   input.addEventListener('input', () => {

//     updateValue(input.value);
//   });
//  minus.addEventListener('click', (e) => {
// let currentValue = parseInt(input.value);
//     updateValue(currentValue - 1);
//   });
//   plus.addEventListener('click', (e) => {
// let currentValue = parseInt(input.value);
//     updateValue(currentValue + 1);
//   });
// updateValue(input.value);
// });
// }
// __webpack_require__.r(__webpack_exports__);

// Оберните код в DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const steppers = document.querySelectorAll('.stepper');

  if (steppers) {
    steppers.forEach(stepper => {
      const input = stepper.querySelector('.stepper__input');
      const minus = stepper.querySelector('.stepper__minus');
      const plus = stepper.querySelector('.stepper__plus');

      if (!input || !minus || !plus) {
        console.warn('Stepper elements not found', stepper);
        return;
      }

      const updateButtons = value => {
        if (value <= 1) {
          minus.classList.add('stepper__disabled');
        } else {
          minus.classList.remove('stepper__disabled');
        }
        if (value >= 99) {
          plus.classList.add('stepper__disabled');
        } else {
          plus.classList.remove('stepper__disabled');
        }
      };

      const updateValue = (newValue) => {
        let num = parseInt(newValue);
        if (isNaN(num)) num = 1;
        if (num < 1) num = 1;
        if (num > 99) num = 99;
        input.value = num;
        updateButtons(num);
        return num;
      };

      input.addEventListener('input', () => {
        updateValue(input.value);
      });

      minus.addEventListener('click', e => {
        e.preventDefault();
        let currentValue = parseInt(input.value);
        if (isNaN(currentValue)) currentValue = 1;
        updateValue(currentValue - 1);
      });

      plus.addEventListener('click', e => {
        e.preventDefault();
        let currentValue = parseInt(input.value);
        if (isNaN(currentValue)) currentValue = 1;
        updateValue(currentValue + 1);
      });

      // Инициализация
      updateValue(input.value);
    });
  }
});
