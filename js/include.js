//header 불러오기
fetch('/header.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('#header').innerHTML = data;

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

    const searchIcon = document.querySelector('.search-wrap .search svg');
    const searchWrap = document.querySelector('.search-wrap');
    searchIcon.addEventListener('click', (e) => {
      console.log('asd');
      searchWrap.classList.toggle('active');
      e.preventDefault();
    });

    // ham-btn관련
    const hamBtn = document.querySelector('.ham-btn > a');
    const hamNavWrap = document.querySelector('.snb');
    hamBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hamNavWrap.style['display'] = 'block';
    });
    const closeBtn = document.querySelector('.close-btn .btn');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hamNavWrap.style['display'] = 'none';
    });
  });

//footer 불러오기
fetch('/footer.html')
  .then((res) => res.text())
  .then((data) => {
    document.querySelector('#footer').innerHTML = data;

    const openModal = document.querySelectorAll('.open-modal');

    openModal.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log('모달버튼있다');
        e.preventDefault();
        const targetSelect = button.getAttribute('data-target');
        const targetModal = document.querySelector(targetSelect);

        console.log(targetSelect);

        targetModal?.classList.remove('hidden');

        const closeBtn = targetModal.querySelector('.modal-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            targetModal?.classList.add('hidden');
          });
        }
      });
    });
    //
  });
