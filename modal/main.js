const open = document.getElementById('btn-open')
const close = document.getElementById('btn-close')
const modal = document.getElementById('wrapper-modal')
const overlay = document.getElementById('overlay')

open.addEventListener('click', (e) => {
    modal.classList.add('active')
})

const closeModal = () => {
    modal.classList.remove('active')
}

overlay.addEventListener('click', closeModal)
close.addEventListener('click', closeModal)