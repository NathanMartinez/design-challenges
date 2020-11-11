const firstName = document.getElementsByName('first-name')[0]
const lastName = document.getElementsByName('last-name')[0]
const email = document.getElementsByName('email')[0]
const password = document.getElementsByName('password')[0]
const submitButton = document.getElementsByTagName('button')[0]

submitButton.addEventListener('click', handleSubmit)



function handleSubmit(e) {
  e.preventDefault()
  validateNames()
  validateEmail()
  validatePassword()
  if (validateNames() && validateEmail() && validatePassword()) {
    alert(`Welcome ${firstName.value}`)
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
    submitButton.value = ''
  }
}

function validateNames() {
  let firstNameValue = firstName.value
  let lastNameValue = lastName.value
  if (firstNameValue === '') {
    let parent = firstName.parentElement
    addError(parent, 'First Name cannot be empty')
  } else {
    firstName.parentElement.classList.remove('error')
    return true
  }
  if (lastNameValue === '') {
    let parent = lastName.parentElement
    addError(parent, 'Last Name cannot be empty')
  } else {
    lastName.parentElement.classList.remove('error')
    return true
  }
}

function validateEmail() {
  let emailValue = email.value
  if (emailValue === '') {
    let parent = email.parentElement
    addError(parent, 'Email cannot be empty')
  } else if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(emailValue)) {
    let parent = email.parentElement
    addError(parent, 'Looks like this is not an email')
  } else {
    email.parentElement.classList.remove('error')
    return true
  }
}

function validatePassword() {
  let passwordValue = password.value
  if (passwordValue === '') {
    let parent = password.parentElement
    addError(parent, 'Password cannot be empty')
  } else if (passwordValue.length < 6) {
    let parent = password.parentElement
    addError(parent, 'Password must be at least 6 characters')
  } else {
    password.parentElement.classList.remove('error')
    return true
  }
}

function addError(element, errorMessage) {
  element.children[1].innerText = errorMessage
  element.classList.add('error')
}