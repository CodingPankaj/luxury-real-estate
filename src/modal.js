import { hideOverlay, showOverlay } from "./main"

const modal = document.querySelector("#modal")
const modalBtn = modal.querySelector("#modal-close-btn")
const modalHeading = modal.querySelector("#modal-heading")

// show modal
const showModal = (heading) => {
  modalHeading.textContent = heading
  if (!modal.classList.contains("modal-active")) {
    modal.classList.add("modal-active")
  }
  //   modal.style.top = "50%"
  modal.setAttribute("aria-hidden", false)
}

// close modal
const closeModal = () => {
  if (modal.classList.contains("modal-active")) {
    modal.classList.remove("modal-active")
  }
  modal.setAttribute("aria-hidden", true)
}

modalBtn.addEventListener("click", () => {
  closeModal()
  hideOverlay()
})

// show modal on hero buy now button
const heroBuyNowBtn = document.querySelector("#hero-buy-now-btn")
heroBuyNowBtn.addEventListener("click", () => {
  showModal("Talk to our Relationship Manager!")
  showOverlay()
})

// show modal on download brochure button 3rd section
const downloadBrochure = document.querySelector("#download-brochure")

downloadBrochure.addEventListener("click", () => {
  showModal("Download Brochure")
  showOverlay()
})

// show modal on slider enquire now button
const enquireNowBtns = document.querySelectorAll(".explore-now-btn")

enquireNowBtns.forEach((enquireNow) => {
  enquireNow.addEventListener("click", () => {
    showModal("We Are Excited To Meet You")
    showOverlay()
  })
})

// show modal on slider download borchure button
const downloadBrochureBtns = document.querySelectorAll(
  ".slider-brochure-download"
)

downloadBrochureBtns.forEach((downloadBtn) => {
  downloadBtn.addEventListener("click", () => {
    showModal("Download Brochure")
    showOverlay()
  })
})

// show modal on limited units available
const limitedUnitBtn = document.querySelector("#limited-units")

limitedUnitBtn.addEventListener("click", () => {
  showModal("Hurry Up, limited units available!")
  showOverlay()
})

// show modal on connect with us button
const connectWithUs = document.querySelector("#connect-with-us-btn")

connectWithUs.addEventListener("click", () => {
  showModal("Get in touch with us")
  showOverlay()
})

// show modal on brochure button 2nd last section
const downloadBrochureTwo = document.querySelector("#download-brochure-two")

downloadBrochureTwo.addEventListener("click", () => {
  showModal("Download Brochure")
  showOverlay()
})

// show modal on brochure button 2nd last section
const sitePlanBtn = document.querySelector("#site-plan-btn")

sitePlanBtn.addEventListener("click", () => {
  showModal("Download site plans")
  showOverlay()
})

// show modal on brochure button 2nd last section
const priceListBtn = document.querySelector("#price-list-btn")

priceListBtn.addEventListener("click", () => {
  showModal("Download price list")
  showOverlay()
})
