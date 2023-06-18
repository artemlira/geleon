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

menu.addEventListener('click', ()=>{
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
