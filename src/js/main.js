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
  function sendMail(userName, userPhone) {
    let params = {
      name: userName.value,
      phone: userPhone.value,
    };
    const serviceID = 'service_kumsi17';
    const templateID = 'template_95uynfw';

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        alert(`${userName.value}, Ваше сообщение отправлено успешно!`);
        userName.value = '';
        userPhone.value = '';
      })
      .catch((err) => console.log(err));
  }

  const firstName = document.querySelector('#call-name');
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
      sendMail(firstName, firstPhone);
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
      sendMail(secondName, secondPhone);
    });
});
