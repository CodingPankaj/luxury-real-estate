import { countryData } from "./countryData"

// add country options in form
const country = document.querySelector("#country")
country.innerHTML += countryData
  .map(
    (item) =>
      `<option value="${item.countryCode}:${item.telCode}">${item.telCode}</option>`
  )
  .join("")

// show country flag on change
const phoneContainer = document.querySelector("#phone-container")
const countryFlag = phoneContainer.querySelector("#country-flag")
const phoneCode = phoneContainer.querySelector("#phone-code")

country.addEventListener("change", (e) => {
  const value = e.target.value
  const splittedValue = value.split(":")
  const conCode = splittedValue[0]
  const tel = splittedValue[1]

  countryFlag.innerHTML = `<img src="/flags/${conCode.toLowerCase()}.png" alt=" flag" class="h-5 w-[25px] rounded object-cover"/>`
  phoneCode.textContent = tel
})
