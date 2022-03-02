const btnPrev = document.getElementById('btn-prev'),
    btnNext = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot')
let index = 0
let autoplayInterval = null

function startAutoplay() {
    if (!autoplayInterval) {
        autoplayInterval = setInterval(nextSlide, 2000);
    }
}

const activeSlide = (idx) => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[idx].classList.add('active')
}
const activeDot = (idx) => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[idx].classList.add('active')
}
const prepareCurrentSlide = (idx) => {
    activeDot(idx)
    activeSlide(idx)
}
const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}
startAutoplay()
btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevSlide)
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx
        prepareCurrentSlide(index)
    })
})
