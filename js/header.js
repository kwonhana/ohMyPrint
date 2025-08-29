const topBanner = document.querySelector('.top-banner');
const bannerBtn = topBanner.querySelector('.closeBtn');

bannerBtn.addEventListener('click', () => {
  topBanner.remove();
});

const gnb = document.querySelector('.gnb');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    gnb.classList.remove('hidden');
  } else {
    gnb.classList.add('hidden');
  }
});
