// vertical accordion
const verticalAccordions = document.querySelectorAll(".vertical-accordion")

verticalAccordions.forEach((item, index) => {
  const heading = item.querySelector(".vertical-accordion-heading")
  const icon = item.querySelector(".v-icon")
  const content = item.querySelector(".v-content")

  item.addEventListener("click", () => {
    // Remove "grow" class from other divs and set aria-expanded to false
    verticalAccordions.forEach((otherItem) => {
      const otherHeadings = otherItem.querySelector(
        ".vertical-accordion-heading"
      )
      const otherIcon = otherItem.querySelector(".v-icon")
      const otherContent = otherItem.querySelector(".v-content")

      // Check if otherHeadings exists before trying to manipulate it
      if (otherItem !== item) {
        otherItem.classList.remove("grow")
        otherItem.setAttribute("aria-expanded", "false")
        otherHeadings.classList.add("v-text")
        otherIcon.classList.remove("v-icon-big")
        otherContent.classList.remove("v-content-active")
      }
    })

    // Add "grow" class to the clicked div and set aria-expanded to true
    item.classList.add("grow")
    item.setAttribute("aria-expanded", "true")
    heading.classList.remove("v-text")
    icon.classList.add("v-icon-big")
    content.classList.add("v-content-active")
  })
})

// faq accordion
const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq, index) => {
  const faqHeading = faq.querySelector(".faq-heading")
  const faqAnswer = faq.querySelector(".faq-answer")
  const faqIcon = faq.querySelector(".faq-icon")

  faqHeading.addEventListener("click", () => {
    faqs.forEach((otherFaq) => {
      if (otherFaq !== faq) {
        const otherFaqHeading = otherFaq.querySelector(".faq-heading")
        const otherFaqAnswer = otherFaq.querySelector(".faq-answer")
        const otherFaqIcon = otherFaq.querySelector(".faq-icon")
        otherFaqAnswer.style.maxHeight = null
        otherFaqIcon.classList.remove("rotate-90")
        otherFaqHeading.setAttribute("aria-expanded", false)
        otherFaqAnswer.setAttribute("aria-hidden", true)
      }
    })

    if (faqAnswer.style.maxHeight) {
      faqAnswer.style.maxHeight = null
      faqIcon.classList.remove("rotate-90")
      faqHeading.setAttribute("aria-expanded", false)
      faqAnswer.setAttribute("aria-hidden", true)
    } else {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"
      faqIcon.classList.add("rotate-90")
      faqHeading.setAttribute("aria-expanded", true)
      faqAnswer.setAttribute("aria-hidden", false)
    }
  })
})
