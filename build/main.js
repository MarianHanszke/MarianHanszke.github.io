const clientImg = document.querySelector('.client-img');
const clientQuote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-container .author');
const clients = document.querySelectorAll('.client-list .client');

function changeClientsOpinion(){

  if(this.classList.contains('active')) return;

  const lastActive = document.querySelector('.client-list .client.active');

  lastActive.classList.remove('active');
  this.classList.add('active');

  clientImg.classList.add('change');
  clientQuote.classList.add('change');
  quoteAuthor.classList.add('change');

  clientImg.addEventListener('transitionend' , () => {
    clientImg.src = this.dataset.src;
    clientQuote.textContent = this.dataset.quote;
    quoteAuthor.textContent = this.dataset.author;
    clientImg.classList.remove('change');
    clientQuote.classList.remove('change');
    quoteAuthor.classList.remove('change');
  })
}

clients.forEach(client => client.addEventListener('click', changeClientsOpinion));

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

const leftBtn = document.querySelector('.slider .left-btn');
const rightBtn = document.querySelector('.slider .right-btn');
const sliderContainer = document.querySelector('.slider .slider-list');
let sliderOff = false;//FLAG FOR SLIDER TIMEOUT

function changeSlide(e) {

  const sliderItems = document.querySelectorAll('.slider .list-item');
  const transitionTime = 800;

  if(sliderOff) return;

  sliderOff = true

  setTimeout(function(){
    sliderOff = false;
  }, transitionTime);//TIME OUT FLAG TO DISABLE BUTTONS

  if(e){

     sliderItems[0].classList.remove('left');
     sliderItems[0].classList.add('center');

    sliderItems[1].classList.remove('center');
    sliderItems[1].classList.add('right');

    sliderItems[2].classList.remove('right');
    sliderItems[2].classList.add('behind');

    sliderItems[sliderItems.length - 1].classList.remove('behind');
    sliderItems[sliderItems.length - 1].classList.add('left');

    setTimeout(function(){
    sliderContainer.insertBefore(sliderItems[sliderItems.length - 1], sliderItems[0]);
        }, transitionTime);
  } else {

    sliderItems[0].classList.remove('left');
    sliderItems[0].classList.add('behind');

    sliderItems[1].classList.remove('center');
    sliderItems[1].classList.add('left');

    sliderItems[2].classList.remove('right');
    sliderItems[2].classList.add('center');

    sliderItems[3].classList.remove('behind');
    sliderItems[3].classList.add('right');

    setTimeout(function(){
      sliderContainer.appendChild(sliderItems[0]);
        }, transitionTime);
  }
}

//SWIPE FOR MOBLE

const swiper = new Hammer(sliderContainer);

swiper.on('swipeleft', () => changeSlide(false));
swiper.on('swiperight', () => changeSlide(true));

leftBtn.addEventListener('click', () => changeSlide(false));
rightBtn.addEventListener('click', () => changeSlide(true));

$j(window).scroll(function() {
  
		var ScrollPos = $j(window).scrollTop();
    if (ScrollPos > 380) {
        $j('.main-nav').removeClass('fixod');
        $j('.main-nav').addClass('fixyd');
        $j('.logo').removeClass('invis');
        $j('.logo').addClass('vis');
        
    } else {
        
        $j('.main-nav').removeClass('fixyd');
        $j('.main-nav').addClass('fixod');
        $j('.logo').removeClass('vis');
        $j('.logo').addClass('invis');
    }
    
});   

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


