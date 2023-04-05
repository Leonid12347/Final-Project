var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  breakpoints: {
      1200: {
          slidesPerView: 3,
          spaceBetween: 20,
      },

      992: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      576: {
          slidesPerView: 2,
          spaceBetween: 20,
      }
  },

  navigation: {
      nextEl: "#swiper-button-next-1",
      prevEl: "#swiper-button-prev-1",
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        1200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },

    navigation: {
        nextEl: "#swiper-button-next-2",
        prevEl: "#swiper-button-prev-2",
    },
});
