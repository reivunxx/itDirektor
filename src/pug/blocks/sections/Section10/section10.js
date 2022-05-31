$(document).ready(function () {
    const swiper = new Swiper('.sc10__slider',{
        slidesPerView: 1,
        spaceBetween: 20,
        scrollbar: {
            el: '.sc10swiper-scrollbar',
            draggable: true
        },
        autoHeight: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        }
    });

});