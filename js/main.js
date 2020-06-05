const menuBtn = document.querySelector('.menu-mobile');
const menu = document.querySelector('.main-sidebar-wrapper');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('main-sidebar-wrapper-active');
  })