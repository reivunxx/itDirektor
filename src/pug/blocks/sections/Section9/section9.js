$(document).ready(function () {
    const swiper = new Swiper('.sc9__slider',{
        slidesPerView: 1,
        spaceBetween: 0,
        scrollbar: {
            el: '.sc9swiper-scrollbar',
            draggable: true
        },
        autoHeight: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }
    });
});