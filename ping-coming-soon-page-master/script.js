// Lets get access to the email input
const emailInput = document.getElementById('email')
// Lets get access to the submit button
const button = document.getElementById('notify')
// Lets get access to the error message
const errorMessage = document.getElementById('error')

// Lets add an event listener to the button
button.addEventListener('click', validateEmail)
window.addEventListener('keypress', e => e.code === 'Enter' && validateEmail())

function validateEmail() {
  const email = emailInput.value
  if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)) {
    emailInput.classList.remove('error')
    errorMessage.classList.add('hide')
    alert(`Thank you! Email notifications will be sent to ${email}`)
  } else {
    emailInput.classList.add('error')
    errorMessage.classList.remove('hide')
  }
}