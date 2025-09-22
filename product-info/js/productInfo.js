let sliderBtnRight = document.querySelector('.next-btn-right');
let sliderBtnLeft = document.querySelector('.next-btn-left');
let sliderImg = document.querySelector('.item-slider-main img');
let sliderSmallImg = document.querySelectorAll('.item-slider>li');
let sliderSmallImgNum = sliderSmallImg.length;
let num = 1;

sliderBtnRight.addEventListener('click', () => {
  if (num <= sliderSmallImgNum - 1) {
    num++;
    sliderImg.setAttribute('src', `./images/item-img${num}.png`);
  }
});
sliderBtnLeft.addEventListener('click', () => {
  if (num - 1 > 0) {
    num--;
    sliderImg.setAttribute('src', `./images/item-img${num}.png`);
  }
});

let navMenus = document.querySelectorAll('.item-detail-menubar>li');
console.log(navMenus);
let sections = document.querySelectorAll('.navSection');
console.log(sections);

navMenus.forEach((item) => {
  item.addEventListener('click', () => {
    // 메뉴 active 토글
    navMenus.forEach((n) => {
      n.classList.remove('active');
    });
    item.classList.add('active');

    // 섹션 보이기
    sections.forEach((sec) => {
      sec.classList.add('hidden');
    });

    // 섹션 숨기기
    let targetSection = document.getElementById(item.dataset.target);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
    // document.getElementById(item.dataset.target).classList.remove("hidden");
  });
});
