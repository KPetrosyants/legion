const menuButton = document.querySelector('.header .menu-btn')
const navbarMenu = document.querySelector('.navbar__menu')
const menuOverlay = document.querySelector('.header__menu-overlay')

function toggleMenuOverlay () {
  if (menuButton.checked) {
    menuOverlay.classList.add('active')
    document.body.classList.add('overflow-hidden', 'h-screen')
  } else {
    menuOverlay.classList.remove('active')
    document.body.classList.remove('overflow-hidden', 'h-screen')
  }
}

menuButton.addEventListener('change', toggleMenuOverlay)

menuOverlay.addEventListener('click', () => {
  menuButton.checked = false
  toggleMenuOverlay()
})
const dropMenuButton = document.querySelector('.drop_menu')
const menu = document.querySelector('.header__item-dropMenu')

dropMenuButton.addEventListener('click', function (event) {
  event.stopPropagation()
  dropMenuButton.classList.toggle('open')
  menu.classList.toggle('open')
})
document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !dropMenuButton.contains(event.target)) {
    dropMenuButton.classList.remove('open')
    menu.classList.remove('open')
  }
})

const nav_faq = document.querySelector('.nav_faq')
const navbar__faq_menu = document.querySelector('.navbar__faq-menu')
const rotateButton = document.querySelector('.navbar__menu-catalog-rotate-btn')

nav_faq.addEventListener('click', function (event) {
  event.stopPropagation()
  navbar__faq_menu.classList.toggle('active')

  rotateButton.classList.toggle('rotate-180')
})

document.addEventListener('click', function (event) {
  if (
    !navbar__faq_menu.contains(event.target) &&
    !nav_faq.contains(event.target)
  ) {
    navbar__faq_menu.classList.remove('active')

    rotateButton.classList.remove('rotate-180')
  }
})

const buttonContainers = document.querySelectorAll(
  '.category_card-type_btnContainer'
)

buttonContainers.forEach(container => {
  container.addEventListener('click', event => {
    if (event.target.classList.contains('category_card-type_btn')) {
      container.querySelectorAll('.category_card-type_btn').forEach(button => {
        button.classList.remove('active')
      })
      event.target.classList.add('active')
    }
  })
})
