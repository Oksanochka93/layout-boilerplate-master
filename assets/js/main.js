window.onload = function(){
    slideOne();
    slideTwo();
  }
  
  let sliderOne = document.getElementById("slider-1");
  let sliderTwo = document.getElementById("slider-2");
  let displayValOne = document.getElementById("range-1");
  let displayValTwo = document.getElementById("range-2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".custom-range__track");
  let sliderMaxValue = document.getElementById("slider-1").max;
  
  function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
  }
  function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
  }
  function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #D7DCDF ${percent1}% , #00CA74 ${percent1}% , #00CA74 ${percent2}%, #D7DCDF ${percent2}%)`;
  }
  