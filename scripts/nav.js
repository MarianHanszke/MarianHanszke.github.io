const hamburger = document.querySelector('.hamburger');
const mainNavBar = document.querySelector('.main-nav');
const navList = document.querySelectorAll('.nav-mobile-list');
let windowWidth = window.innerWidth;

function windowWidhtCheck(){
  windowWidth = window.innerWidth;
}

function toggleMenu(){

  if(windowWidth <= 830){

    if(mainNavBar.classList.contains('open')){
      mainNavBar.classList.remove('open');
      navList.forEach(item => item.removeAttribute('style'));
    } else {
      mainNavBar.classList.add('open');
      setTimeout(function(){navList.forEach(item => item.style.opacity = 1)}, 100);
    }
}
}

window.addEventListener('resize', () => windowWidth = window.innerWidth);
hamburger.addEventListener('click', toggleMenu);
navList.forEach( item => item.addEventListener('click', toggleMenu));
