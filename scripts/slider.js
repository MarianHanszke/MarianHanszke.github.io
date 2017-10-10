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
