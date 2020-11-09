// Lets get all of the faq boxes and add event listeners to check for clicks
const faqs = document.querySelectorAll('img')

document.addEventListener('click', e => {
  const {
    classList
  } = e.target
  if (classList[0] === 'faq') {
    e.target.classList.toggle('open')
  }
})