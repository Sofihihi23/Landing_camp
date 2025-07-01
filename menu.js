document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.navbar__list');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }
});