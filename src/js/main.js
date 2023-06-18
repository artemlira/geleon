'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Burger menu
  function toggleMenu() {}
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

  // send form
  // const firstForm = document.querySelector('#call-form');
  // const secondForm = document.querySelector('#form');

  // firstForm.addEventListener('submit', firstFormSend);
  // secondForm.addEventListener('submit', secondFormSend);

  // async function secondFormSend(e) {
  //   e.preventDefault();
  //   let secondFormData = new FormData(secondForm);
  //   let response = await fetch('sendmail.php', {
  //     method: 'POST',
  //     body: firstFormData,
  //   });
  // }

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
      const firstForm = document.querySelector('#call-form');

      firstForm.addEventListener('submit', firstFormSend);

      async function firstFormSend(e) {
        e.preventDefault();
        let firstFormData = new FormData(firstForm);

        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: firstFormData,
        });

        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          firstForm.reset();
        } else {
          alert('Ошибка!');
        }
      }
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
      const secondForm = document.querySelector('#form');

      secondForm.addEventListener('submit', secondFormSend);

      async function secondFormSend(e) {
        e.preventDefault();
        let secondFormData = new FormData(secondForm);

        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: secondFormData,
        });

        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          secondForm.reset();
        } else {
          alert('Ошибка!');
        }
      }
    });
});
