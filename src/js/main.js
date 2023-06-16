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

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
     menu.classList.add('hidden');
  menu.classList.remove('block');
  burger.classList.remove('active');
  body.classList.remove('overflow-hidden');
  }
});
toggleMenu();
