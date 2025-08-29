const topBanner = document.querySelector('.top-banner')
const bannerBtn = topBanner.querySelector('.closeBtn')

bannerBtn.addEventListener('click', ()=>{
  topBanner.remove()
})

const header1 = document.querySelector('.header1')
const header2 = document.querySelector('.header2')

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header1.classList.add('hidden')
    header2.classList.remove('hidden')
  } else {
    header1.classList.remove('hidden')
    header2.classList.add('hidden')
  }
})