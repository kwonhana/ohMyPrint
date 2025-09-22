let sliderBtnRight = document.querySelector(".next-btn-right");
let sliderBtnLeft = document.querySelector(".next-btn-left");
let sliderImg = document.querySelector(".item-slider-main img");
let sliderSmallImg = document.querySelectorAll(".item-slider>li");
let sliderSmallImgNum = sliderSmallImg.length;
let num = 1;

  sliderBtnRight.addEventListener("click",() => {
    if(num <= sliderSmallImgNum-1){
      num++;
      sliderImg.setAttribute("src", `./images/item-img${num}.png`);
    }
  })
  sliderBtnLeft.addEventListener("click",() => {
    if(num-1 > 0){
      num--;
      sliderImg.setAttribute("src", `./images/item-img${num}.png`);
    }
  })
