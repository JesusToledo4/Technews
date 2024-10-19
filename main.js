document.querySelector('.menu__btn').addEventListener('click', () => {
    document.querySelector('.nav__menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news__cards', { delay: 500});
ScrollReveal().reveal('.cards__banner-one', { delay: 500});
ScrollReveal().reveal('.cards__banner-two', { delay: 500});