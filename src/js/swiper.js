function swiper() {
  var swiperReview = new Swiper(".reviews__swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      speed: 500,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".reviews__swiper-next",
          prevEl: ".reviews__swiper-prev",
      },
  })
}

export default swiper;