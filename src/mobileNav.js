import {
  hideBlurOverlay,
  hideOverlay,
  showBlurOverlay,
  showOverlay
} from "./main"

// dropdown navs
const allNavs = document.querySelectorAll(".dropdown-navs")

allNavs.forEach((nav) => {
  const navHeading = nav.querySelector(".dropdown-navs-heading")
  const navContent = nav.querySelector(".dropdown-navs-content")
  const navIcon = nav.querySelector(".dropdown-navs-icon")

  navHeading.addEventListener("click", () => {
    allNavs.forEach((otherNav) => {
      if (otherNav !== nav) {
        const otherNavHeading = otherNav.querySelector(".dropdown-navs-heading")
        const otherNavAnswer = otherNav.querySelector(".dropdown-navs-content")
        const otherNavIcon = otherNav.querySelector(".dropdown-navs-icon")
        otherNavAnswer.style.maxHeight = null
        otherNavIcon.classList.remove("rotate-180")
        otherNavHeading.setAttribute("aria-expanded", false)
        otherNavAnswer.setAttribute("aria-hidden", true)
      }
    })

    if (navContent.style.maxHeight) {
      navContent.style.maxHeight = null
      navIcon.classList.remove("rotate-180")
      navHeading.setAttribute("aria-expanded", false)
      navContent.setAttribute("aria-hidden", true)
    } else {
      navContent.style.maxHeight = navContent.scrollHeight + "px"
      navIcon.classList.add("rotate-180")
      navHeading.setAttribute("aria-expanded", true)
      navContent.setAttribute("aria-hidden", false)
    }
  })
})

const mobileMenu = document.querySelector("#mobile-menu")
const openMobileMenuBtn = document.querySelector("#show-mobile-menu")
const closeMobileMenuBtn = document.querySelector("#close-mobile-menu")

const showMobileMenu = () => {
  mobileMenu.classList.remove("translate-x-full")
  showOverlay()
}

const hideMobileMenu = () => {
  mobileMenu.classList.add("translate-x-full")
  hideOverlay()
}

closeMobileMenuBtn.addEventListener("click", hideMobileMenu)
openMobileMenuBtn.addEventListener("click", showMobileMenu)

// pop menu
const popMenu = document.querySelector("#pop-menu")

const popMEnuBtn = document.querySelector("#pop-menu-btn")

popMEnuBtn.addEventListener("click", () => {
  popMenu.classList.toggle("scale-0")
  popMEnuBtn.classList.toggle("rotate-360")

  let attr = popMenu.getAttribute("aria-hidden")
  if (attr === "true") {
    popMenu.setAttribute("aria-hidden", false)
    showBlurOverlay()
  } else {
    popMenu.setAttribute("aria-hidden", true)
    hideBlurOverlay()
  }
})
