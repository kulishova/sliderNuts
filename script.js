'use strict'

const sliderItem = document.querySelectorAll('.slider-item'),
  sliderImg = document.querySelectorAll('.slider__img'),
  sliderLine = document.querySelectorAll('.line'),
  skiderLineFooter = document.querySelectorAll('.footer__line'),
  arrowLeft = document.querySelector('.arrow-left'),
  arrowRight = document.querySelector('.arrow-right')

let sliderCount = 0,
  sliderWidth

// Элементы клика

arrowLeft.addEventListener('click', prevSlide)
arrowRight.addEventListener('click', nextSlide)

setInterval(() => {
  nextSlide()
}, 4000)

// Задаем нужный размер карточке
function showSlide() {
  sliderWidth = document.querySelector('.slider-track').offsetWidth
  // sliderItem.style.width = sliderWidth * sliderImg.length + 'px'
  // sliderImg.forEach((item) => (item.style.width = sliderWidth + 'px'))
  // Решить проблему с отображением
}

showSlide()

// Слайд вперед
function nextSlide() {
  sliderCount++
  if (sliderCount >= sliderImg.length) sliderCount = 0
  thisSlide(sliderCount)
}

// Слайд назад
function prevSlide() {
  sliderCount--
  if (sliderCount < 0) sliderCount = sliderImg.length - 1
  thisSlide(sliderCount)
}

// Шаг перемещения слайда
function thisSlide(index) {
  sliderLine.forEach((item) => item.classList.remove('line_active'))
  sliderLine[index].classList.add('line_active')
  sliderItem.forEach((item) => item.classList.remove('slider-item_active'))
  sliderItem[index].classList.add('slider-item_active')
}

// Клик на line
sliderLine.forEach((line, index) => {
  line.addEventListener('click', () => {
    sliderCount = index
    thisSlide(sliderCount)
  })
})

// Поведение для экранов < 1200 px

if (document.documentElement.clientWidth <= 1200) {
  document.querySelector('.footer').style.display = 'block'
}
