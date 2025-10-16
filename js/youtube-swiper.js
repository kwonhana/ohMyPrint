var swiper = new Swiper('.youtube-wrap', {
          slidesPerView: 4.5,
          // 사이 간격
          spaceBetween: 100,
          centeredSlides: true,
          loop: true,
          speed: 1000,

          navigation: {
            // < > 버튼
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            0: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1020: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1021: {
              slidesPerView: 4.5,
              spaceBetween: 100,
            }
}
        }
      );

