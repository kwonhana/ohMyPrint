

 var swiper = new Swiper('.youtube-wrap', {
          loop: true,
          navigation: {
            // < > 버튼
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //   autoplay: {
          //     delay: 3000,
          //   },
          speee: 5000,
          slidesPerView: 4.5,
          // 사이 간격
          spaceBetween: 100,
          centeredSlides: true,
        });