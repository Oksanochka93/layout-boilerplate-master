const modal = document.querySelector(".modal");
const btn = document.querySelector(".map__btn");
const close = document.querySelector(".modal__close");

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.add('modal--open');
  
  
  });

close.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal--open');
  
  
  });

const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");

function toggleMenu() {
    headerMenu.classList.toggle("header__menu--close");
    headerList.classList.toggle("header__list--open");
}

menuBtn.addEventListener("click", toggleMenu);


