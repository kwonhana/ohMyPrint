let navMenus = document.querySelectorAll(".item-detail-menubar>li");
console.log(navMenus);
let sections = document.querySelectorAll(".navSection");
console.log(sections);

navMenus.forEach(item => {
  item.addEventListener("click",()=>{
    // 메뉴 active 토글
    navMenus.forEach(n => {
      n.classList.remove("active");
    })
    item.classList.add("active");

    // 섹션 보이기 
    sections.forEach((sec) => {
      sec.classList.add("hidden");
    })

    // 섹션 숨기기
    let targetSection = document.getElementById(item.dataset.target);
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }
    // document.getElementById(item.dataset.target).classList.remove("hidden");
  })
})

