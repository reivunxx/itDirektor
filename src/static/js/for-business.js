$(document).ready(function () {
    if ($(window).width() > 767){
        if($('.for-business__slider').length != 0){
            $('.for-business__slides').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                prevArrow: $('.for-business__slider-prev-button'),
                nextArrow: $('.for-business__slider-next-button'),
            })
        }
    }
})