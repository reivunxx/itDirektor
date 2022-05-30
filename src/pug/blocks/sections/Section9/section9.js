$(document).ready(function () {
    const swiper = new Swiper('.sc9__slider',{
        slidesPerView: 1,
        spaceBetween: 0,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
        autoHeight: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }
    });
});