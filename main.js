var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10, 
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10, 
        },
        1200: {
        
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

    