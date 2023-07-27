const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = document.querySelector('.search-close-switch')

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})