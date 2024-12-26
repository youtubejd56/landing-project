const mobileMenu = document.querySelector('#mobile-menu')
const mobileLinks = document.querySelector('#mobile-menu-list')

mobileMenu.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden')
})
