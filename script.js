'use strict'

const sliderItem = document.querySelectorAll('.slider-item'),
  sliderImg = document.querySelectorAll('.slider__img'),
  sliderLine = document.querySelectorAll('.line'),
  sliderLineFooter = document.querySelectorAll('.footer__line'),
  skiderLineFooter = document.querySelectorAll('.footer__line'),
  arrowLeft = document.querySelector('.arrow-left'),
  arrowRight = document.querySelector('.arrow-right'),
  arrowLeftFooter = document.querySelector('.footer__arrow-left'),
  arrowRightFooter = document.querySelector('.footer__arrow-right')

let sliderCount = 0,
  sliderWidth

if (document.documentElement.clientWidth > 1200) {
  // Элементы клика

  arrowLeft.addEventListener('click', prevSlide)
  arrowRight.addEventListener('click', nextSlide)

  setInterval(() => {
    nextSlide()
  }, 4000)

  // Задаем нужный размер карточке

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
  sliderLineFooter.forEach((line, index) => {
    line.addEventListener('click', () => {
      sliderCount = index
      thisSlide(sliderCount)
    })
  })
}
// Поведение для экранов < 1200 px

if (document.documentElement.clientWidth <= 1200) {
  arrowLeftFooter.addEventListener('click', prevSlideMobile)
  arrowRightFooter.addEventListener('click', nextSlideMobile)

  // Слайд вперед
  function nextSlideMobile() {
    sliderCount++
    if (sliderCount >= sliderImg.length) sliderCount = 0
    thisSlideMobile(sliderCount)
  }

  // Слайд назад
  function prevSlideMobile() {
    sliderCount--
    if (sliderCount < 0) sliderCount = sliderImg.length - 1
    thisSlideMobile(sliderCount)
  }

  // Шаг перемещения слайда
  function thisSlideMobile(index) {
    sliderLineFooter.forEach((item) =>
      item.classList.remove('footer__line_active')
    )
    sliderLineFooter[index].classList.add('footer__line_active')
    sliderItem.forEach((item) => item.classList.remove('slider-item_active'))
    sliderItem.forEach((item) => item.classList.remove('showing'))
    sliderItem[index].classList.add('slider-item_active')
    sliderItem[index].classList.add('showing')
  }
}
