'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Burger menu
  function toggleMenu() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#mobile-menu');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('hidden');
      menu.classList.toggle('block');
      body.classList.toggle('overflow-hidden');
    });

    menu.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('block');
      burger.classList.remove('active');
      body.classList.remove('overflow-hidden');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        menu.classList.add('hidden');
        menu.classList.remove('block');
        burger.classList.remove('active');
        body.classList.remove('overflow-hidden');
      }
    });
  }

  toggleMenu();

  // Swiper slider
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 80,
    speed: 1000,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 1800,
    // }
  });

  // send message

  const firstName = document.querySelector('#call-form');
  const successMessage = document.querySelector('#success-message');
  const errorMessage = document.querySelector('#error-message');

  firstName.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(firstName);
    const formData = new FormData(firstName);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../application.php', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Обработка успешной отправки формы
        console.log(xhr.responseText);
        form.reset(); // Сброс формы после успешной отправки
        // Вывод сообщения об успешной отправке
        successMessage.textContent = 'Спасибо! Ваша заявка успешно отправлена.';
        successMessage.classList.add('block');
        setTimeout(function () {
          successMessage.classList.add('hidden');
        }, 3000);
      } else {
        // Обработка ошибки при отправке формы
        console.error(xhr.statusText);
        // Вывод сообщения об ошибке
        errorMessage.textContent =
          'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
        errorMessage.classList.add('block');
        setTimeout(function () {
          errorMessage.classList.add('hidden');
        }, 3000);
      }
    };
    xhr.onerror = function () {
      // Обработка ошибки при отправке формы
      console.error(xhr.statusText);
      // Вывод сообщения об ошибке
      errorMessage.textContent =
        'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
      errorMessage.classList.add('block');
      setTimeout(function () {
        errorMessage.classList.add('hidden');
      }, 3000);
    };
    xhr.send(formData);
  });

  const firstPhone = document.querySelector('#call-phone');
  const secondName = document.querySelector('#name');
  const secondPhone = document.querySelector('#phone');

  // form validation
  let validation = new JustValidate('#call-form');
  let secondValidation = new JustValidate('#form');

  validation
    .addField('#call-name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа!',
      },
    ])
    .addField('#call-phone', [
      {
        rule: 'required',
        errorMessage: 'Введите телефон!',
      },
    ])
    .onSuccess(function () {
      // sendMail(firstName, firstPhone);
    });

  secondValidation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа!',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Введите телефон!',
      },
    ])
    .onSuccess(function () {
      // sendMail(secondName, secondPhone);
    });
});
