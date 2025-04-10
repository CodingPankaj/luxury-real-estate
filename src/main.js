// import "./style.css"
import "./formControl.js"
import "./accordion.js"
import "./phoneFlag.js"
import "./slider.js"
import "./mobileNav.js"
import "./modal.js"

// header bg change
const header = document.querySelector("header")

const changeHeaderColor = () => {
  if (window.scrollY > 80) {
    header.classList.add("bg-black")
  } else {
    header.classList.remove("bg-black")
  }
}

// initial call
changeHeaderColor()

// call on window event
window.addEventListener("scroll", changeHeaderColor)

const blurOverlay = document.querySelector("#blur-overlay")
const overlay = document.querySelector("#overlay")
const body = document.body

// show blur overlay
export const showBlurOverlay = () => {
  if (blurOverlay.classList.contains("hidden")) {
    blurOverlay.classList.remove("hidden")
  }
  blurOverlay.setAttribute("aria-hidden", false)

  if (!body.classList.contains("overflow-hidden")) {
    body.classList.add("overflow-hidden")
  }
}

// hide  blur overlay
export const hideBlurOverlay = () => {
  if (!blurOverlay.classList.contains("hidden")) {
    blurOverlay.classList.add("hidden")
  }
  blurOverlay.setAttribute("aria-hidden", true)

  if (body.classList.contains("overflow-hidden")) {
    body.classList.remove("overflow-hidden")
  }
}

// show overlay
export const showOverlay = () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden")
  }
  overlay.setAttribute("aria-hidden", false)

  if (!body.classList.contains("overflow-hidden")) {
    body.classList.add("overflow-hidden")
  }
}

// hide overlay
export const hideOverlay = () => {
  if (!overlay.classList.contains("hidden")) {
    overlay.classList.add("hidden")
  }
  overlay.setAttribute("aria-hidden", true)

  if (body.classList.contains("overflow-hidden")) {
    body.classList.remove("overflow-hidden")
  }
}

// read more
const readMore = (container, btn, btnText, btnIcon) => {
  if (container.classList.contains("grid-rows-[0fr]")) {
    container.classList.remove("grid-rows-[0fr]")
    container.classList.add("grid-rows-[1fr]")
    container.setAttribute("aria-hidden", false)
    btn.setAttribute("aria-expanded", true)
    btnText.textContent = "Read Less"
    if (btnIcon) btnIcon.classList.add("rotate-180")
  } else {
    container.classList.remove("grid-rows-[1fr]")
    container.classList.add("grid-rows-[0fr]")
    container.setAttribute("aria-hidden", true)
    btn.setAttribute("aria-expanded", false)
    btnText.textContent = "Read More"
    if (btnIcon) btnIcon.classList.remove("rotate-180")
  }
}

// second section read more
const secondSectionReadMoreContainer = document.querySelector(
  "#second-section-read-more-container"
)
const secondSectionReadMoreBtn = document.querySelector(
  "#second-section-read-more-btn"
)
const secondSectionReadMoreTxt = document.querySelector(
  "#second-section-read-more-text"
)
const secondSectionReadMoreBtnIcon = document.querySelector(
  "#second-section-read-more-icon"
)

secondSectionReadMoreBtn.addEventListener("click", () => {
  readMore(
    secondSectionReadMoreContainer,
    secondSectionReadMoreBtn,
    secondSectionReadMoreTxt,
    secondSectionReadMoreBtnIcon
  )
})

// project status read more
const projectStatusMobileSecondContainer = document.querySelector(
  "#project-status-mobile-second-container"
)

const projectStatusMobileReadMoreBtn = document.querySelector(
  "#project-status-mobile-read-more-btn"
)

const projectStatusMobileReadMoreBtnTxt = document.querySelector(
  "#project-status-mobile-read-more-text"
)

const projectStatusMobileReadMoreBtnIcon = document.querySelector(
  "#project-status-mobile-read-more-icon"
)

projectStatusMobileReadMoreBtn.addEventListener("click", () => {
  readMore(
    projectStatusMobileSecondContainer,
    projectStatusMobileReadMoreBtn,
    projectStatusMobileReadMoreBtnTxt,
    projectStatusMobileReadMoreBtnIcon
  )
})

// desktop menu
const desktopOffCanvas = document.querySelector("#desktop-offcanvas-menu")

const showDesktopMenuBtn = document.querySelector("#show-desktop-menu")
const hideDesktopMenuBtn = document.querySelector("#hide-desktop-menu")

showDesktopMenuBtn.addEventListener("click", () => {
  console.log("hello")

  // console.log(desktopOffCanvas.classList)

  if (!desktopOffCanvas.classList.contains("active-desktop-offcanvas")) {
    desktopOffCanvas.classList.add("active-desktop-offcanvas")
  }
  desktopOffCanvas.setAttribute("aria-hidden", false)
  showOverlay()
})

hideDesktopMenuBtn.addEventListener("click", () => {
  if (desktopOffCanvas.classList.contains("active-desktop-offcanvas")) {
    desktopOffCanvas.classList.remove("active-desktop-offcanvas")
  }
  desktopOffCanvas.setAttribute("aria-hidden", true)

  hideOverlay()
})
