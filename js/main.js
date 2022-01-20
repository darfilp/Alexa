const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.nav__list')

menuBtn.addEventListener('click', (e) => {
   menuBtn.classList.toggle('menu__btn-active');
   menu.classList.toggle('nav__list-active');
 });

