import Swiper from "swiper/bundle"
import "swiper/css/bundle"

// Initialize Key highlight slider
const keyHighlightSlider = new Swiper(".key-highlight-slider", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".key-highlight-slider-prev",
    prevEl: ".key-highlight-slider-next"
  },
  scrollbar: {
    el: ".key-highlight-slider-scroll-bar",
    draggable: true
  }
})

// product slider
const productCurrentSlide = document.querySelector(".product-current-slide")
const productTotalSlide = document.querySelector(".product-total-slide")
// product title slider
const productTitleSlider = new Swiper(".product-title-slider", {
  slidesPerView: 2.7,
  watchSlidesProgress: true,
  breakpoints: {
    768: { slidesPerView: 5 }
  }
})

// product slider
const productSLider = new Swiper(".products-slider", {
  loop: true,
  autoplay: {
    delay: 4000
  },
  thumbs: {
    swiper: productTitleSlider
  },
  navigation: {
    nextEl: ".products-slider-next",
    prevEl: ".products-slider-prev"
  },
  on: {
    init: function () {
      const sliderLength = this.slides.length
      productTotalSlide.textContent =
        sliderLength < 9 ? `0${sliderLength}` : sliderLength
    },
    slideChange: function () {
      const currentSlide = this.realIndex + 1
      productCurrentSlide.textContent =
        currentSlide < 9 ? `0${currentSlide}` : currentSlide
    }
  }
})

// Initialize testimonial mobile slider
const testiMonialMobileSlider = new Swiper(".mobile-testimonial", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".mobile-testimonial-prev",
    prevEl: ".mobile-testimonial-next"
  }
})

// testimonial desktop slider
// testimonial users
const testimonialUsers = new Swiper(".desktop-testimonial-users", {
  direction: "vertical",
  spaceBetween: 12.53,
  slidesPerView: 4,
  freeMode: true,
  mousewheel: true,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".desktop-testimonial-users-scroll-bar",
    draggable: true
  }
})

// testimonial content
const testimonialContent = new Swiper(".desktop-testimonial-content", {
  loop: true,
  autoplay: {
    delay: 4000
  },
  thumbs: {
    swiper: testimonialUsers
  }
})
