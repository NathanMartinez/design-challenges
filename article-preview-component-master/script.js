// Lets get access to the share button 
const shareButton = document.querySelectorAll('.share-div')
// Now lets get access to the active-share-wrapper
const activeShareWrapper = document.querySelector('.active-share-div')

shareButton.forEach(button => button.addEventListener('click', e => {
  activeShareWrapper.classList.toggle('active')
}))