// contact form
const contactForm = document.querySelector("#contact-form")
const submitBtn = contactForm.querySelector("#contact-form-submit-btn")
const submitBtnLoader = submitBtn.querySelector("#submit-loader")

// form fields
const firstNameField = contactForm.querySelector("#first-name")
const lastNameField = contactForm.querySelector("#last-name")
const countryField = contactForm.querySelector("#country")
const phoneField = contactForm.querySelector("#phone")
const emailField = contactForm.querySelector("#email")
const cityField = contactForm.querySelector("#city")
const preferredSizeField = contactForm.querySelector("#preferred-size")
const brokerField = contactForm.querySelector("#broker")
const hearAboutUsField = contactForm.querySelector("#hear-about-us")
const messageField = contactForm.querySelector("#message")

// error text
const firstNameError = contactForm.querySelector("#first-name-error")
const lastNameError = contactForm.querySelector("#last-name-error")
const countryError = contactForm.querySelector("#country-error")
const phoneError = contactForm.querySelector("#phone-error")
const emailError = contactForm.querySelector("#email-error")
const cityError = contactForm.querySelector("#city-error")
const preferredSizeError = contactForm.querySelector("#preferred-size-error")
const brokerError = contactForm.querySelector("#borker-error")
const hearAboutUsError = contactForm.querySelector("#hear-about-us-error")
const messageError = contactForm.querySelector("#message-error")

// change form place holder
const updateNamePlaceHolder = () => {
  if (window.innerWidth >= 1024) {
    firstNameField.setAttribute("placeholder", "First name")
  } else {
    firstNameField.setAttribute("placeholder", "Name")
  }
}

// initial call
updateNamePlaceHolder()

// call on resize
window.addEventListener("resize", updateNamePlaceHolder)

// get form values
const getFormValues = () => {
  return {
    firstName: firstNameField.value?.trim(),
    lastName: lastNameField.value?.trim(),
    country: countryField.value?.trim(),
    phone: phoneField.value?.trim(),
    email: emailField.value?.trim(),
    city: cityField.value?.trim(),
    preferredSize: preferredSizeField.value?.trim(),
    broker: brokerField.value?.trim(),
    hearAboutUs: hearAboutUsField.value?.trim(),
    message: messageField.value?.trim()
  }
}

// clear errors
function clearErrors() {
  firstNameError.style.display = "none"
  lastNameError.style.display = "none"
  phoneError.style.display = "none"
  phoneError.textContent = "Phone is required"
  emailError.style.display = "none"
  cityError.style.display = "none"
  preferredSizeError.style.display = "none"
  brokerError.style.display = "none"
  hearAboutUsError.style.display = "none"
  messageError.style.display = "none"

  firstNameField.style.border = ""
  lastNameField.style.border = ""
  phoneField.style.border = ""
  emailField.style.border = ""
  countryField.style.border = ""
  cityField.style.border = ""
  preferredSizeField.style.border = ""
  brokerField.style.border = ""
  hearAboutUsField.style.border = ""
  messageField.style.border = ""
}

// handle form submit
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  const {
    firstName,
    lastName,
    country,
    phone,
    email,
    city,
    preferredSize,
    broker,
    hearAboutUs,
    message
  } = getFormValues()

  // Clear previous errors
  clearErrors()

  // Validate first name
  if (!firstName) {
    firstNameError.style.display = "block"
    firstNameField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate phone
  if (!phone) {
    phoneError.style.display = "block"
    phoneContainer.style.border = "1px solid #fb2c36"
    return
  }

  const trimmedPhone = phone.replace(/^0+/, "")
  const phoneLength = trimmedPhone.toString().length

  if (phoneLength !== 10) {
    phoneError.textContent = "Invalid phone number"
    phoneError.style.display = "block"
    phoneContainer.style.border = "1px solid #fb2c36"
    return
  }

  // Validate email
  if (!email) {
    emailError.style.display = "block"
    emailField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate country
  if (!country) {
    countryError.style.display = "block"
    countryField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate city
  if (!city) {
    cityError.style.display = "block"
    cityField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate preferred size
  if (!preferredSize) {
    preferredSizeError.style.display = "block"
    preferredSizeField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate broker
  if (!broker) {
    brokerError.style.display = "block"
    brokerField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate hear about us
  if (!hearAboutUs) {
    hearAboutUsError.style.display = "block"
    hearAboutUsField.style.border = "1px solid #fb2c36"
    return
  }

  // Validate message
  if (!message) {
    messageError.style.display = "block"
    messageField.style.border = "1px solid #fb2c36"
    return
  }

  // form data
  const data = {
    name: `${firstName}${lastName ? " " + lastName.trim() : ""}`,
    country,
    phone: trimmedPhone,
    email,
    city,
    preferredSize,
    broker,
    hearAboutUs,
    message
  }

  try {
    submitBtn.disabled = true
    submitBtnLoader.classList.remove("hidden")
    await new Promise((reslove) => setTimeout(reslove, 1000))

    console.log(data)
    submitBtn.disabled = false
    submitBtnLoader.classList.add("hidden")
  } catch (error) {
    submitBtn.disabled = false
    submitBtnLoader.classList.add("hidden")
    console.log("Something went wrong while submiting form")
  }

  contactForm.reset()
})

// modal form
const modalForm = document.querySelector("#modal-form")

// input fields
const modalFormName = modalForm.querySelector("#modal-form-name")
const modalFormPhoneContainer = modalForm.querySelector(
  "#modal-form-phone-container"
)
const modalFormCountry = modalForm.querySelector("#modal-form-country")
const modalFormPhone = modalForm.querySelector("#modal-form-phone")
const modalFormEmail = modalForm.querySelector("#modal-form-email")
const modalFormCheckbox = modalForm.querySelector("#modal-form-terms-checkbox")
const modalFormSubmitBtn = modalForm.querySelector("#modal-form-submit")
const modalFormSubmitBtnLoader = modalForm.querySelector(
  "#modal-form-submit-loader"
)

// errors
const modalNameError = modalForm.querySelector("#modal-form-name-error")
const modalphoneError = modalForm.querySelector("#modal-form-phone-error")
const modalEmailError = modalForm.querySelector("#modal-form-email-error")
const modalCheckboxError = modalForm.querySelector("#modal-form-checkbox-error")

// get modal form values
const getModalFormValues = () => {
  return {
    name: modalFormName.value?.trim(),
    country: modalFormCountry.value?.trim(),
    phone: modalFormPhone.value?.trim(),
    email: modalFormEmail.value?.trim(),
    checkbox: modalFormCheckbox.checked
  }
}

// clear modal form errors

const clearModalFormError = () => {
  modalNameError.style.display = "none"
  modalphoneError.style.display = "none"
  modalEmailError.style.display = "none"
  modalCheckboxError.style.display = "none"
  modalphoneError.textContent = "Phone is required"

  modalFormName.style.border = ""
  modalFormPhoneContainer.style.border = ""
  modalFormEmail.style.border = ""
}

//  handle modal form submit
modalForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const { name, country, phone, email, checkbox } = getModalFormValues()

  clearModalFormError()
  // Validate first name
  if (!name) {
    modalNameError.style.display = "block"
    modalFormName.style.borderBottom = "1px solid #fb2c36"
    return
  }

  // Validate phone
  if (!phone) {
    modalphoneError.style.display = "block"
    modalFormPhoneContainer.style.borderBottom = "1px solid #fb2c36"
    return
  }

  const trimmedPhone = phone.replace(/^0+/, "")
  const phoneLength = trimmedPhone.toString().length

  if (phoneLength !== 10) {
    modalphoneError.textContent = "Invalid phone number"
    modalphoneError.style.display = "block"
    modalFormPhoneContainer.style.borderBottom = "1px solid #fb2c36"
    return
  }

  // Validate email
  if (!email) {
    modalEmailError.style.display = "block"
    modalFormEmail.style.borderBottom = "1px solid #fb2c36"
    return
  }

  if (!checkbox) {
    modalCheckboxError.style.display = "block"
    return
  }

  const data = { name, country, phone: trimmedPhone, email, checkbox }

  try {
    modalFormSubmitBtn.disabled = true
    modalFormSubmitBtnLoader.classList.remove("hidden")

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)

    modalFormSubmitBtn.disabled = false
    modalFormSubmitBtnLoader.classList.add("hidden")
  } catch (error) {
    console.log("Error submitting form")
    modalFormSubmitBtn.disabled = false
    modalFormSubmitBtnLoader.classList.add("hidden")
  }

  modalForm.reset()
})
