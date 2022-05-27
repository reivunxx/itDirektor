$(document).ready(function () {
    if ($('.category-slider').length != 0) {
        if ($(window).width() > 767) {
            $('.cat-slider__slides').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                prevArrow: $('.cat-slider__slides-prev-button'),
                nextArrow: $('.cat-slider__slides-next-button'),
                responsive: [
                    {
                        breakpoint: 1320,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                ]
            })
        }
    }
    ;

    if ($('.category-grid-list').length != 0) {
        $(".category-grid__btn").on('click', function () {
            if ($(this).attr("data-check") == "category-grid__open") {
                $('.sights-btn__list').addClass('catSelectBtnOff');
                $(this).attr("data-check", 'category-grid__close');
                $(this).addClass('category-grid__btn_close');
                $(this).removeClass('category-grid__btn_open');
                $(this).find("p").html('Закрыть все категории')
                if ($('.cat-slider__slides-item').length > 6) {
                    $('.category-slider').find('.cat-slider__slides-prev-button').addClass('catPrevNextBtnOff');
                    $('.category-slider').find('.cat-slider__slides-next-button').addClass('catPrevNextBtnOff');
                }
                $(".category-slider").slideUp(600);
                $(".category-grid-container").slideDown(600);
            } else {
                $('.sights-btn__list').removeClass('catSelectBtnOff');
                $(this).attr("data-check", 'category-grid__open');
                $(this).addClass('category-grid__btn_open');
                $(this).removeClass('category-grid__btn_close');
                $(this).find("p").html('Показать все категории')
                $(".category-slider").slideDown(600, function () {
                    if ($('.cat-slider__slides-item').length > 6) {
                        $('.category-slider').find('.cat-slider__slides-prev-button').removeClass('catPrevNextBtnOff');
                        $('.category-slider').find('.cat-slider__slides-next-button').removeClass('catPrevNextBtnOff');
                    }
                });
                $(".category-grid-container").slideUp(600);
            }
        })
    }

    if ($('.faq-container').length != 0) {
        $(".faq-content__list-item-title").on('click', function () {
            if ($(this).attr("data-check") == "close_question") {
                $(this).attr("data-check", 'open_question');
                $(this).find(".faq-content__list-item-title-icon-body").css({
                    "transform": "rotate(180deg)"
                })
                $(this).parent().find('.faq-content__list-item-text').slideDown(300);
            } else {
                $(this).attr("data-check", 'close_question');
                $(this).find(".faq-content__list-item-title-icon-body").css({
                    "transform": "rotate(0)"
                })
                $(this).parent().find('.faq-content__list-item-text').slideUp(300);
            }
        })
    }
    if ($('.sights-btn__list').length != 0) {
        let businessItem = ".catalog-category__item[data-cat-role='business_category']";
        let tourismItem = ".catalog-category__item[data-cat-role='tourist_category']"
        $("#sights-btn__all").on("click", function () {
            if ($(this).hasClass('sights-btn__list-btn_active') == false) {
                $("#sights-btn__business").removeClass("sights-btn__list-btn_active");
                $("#sights-btn__tourism").removeClass("sights-btn__list-btn_active");
                $(this).addClass('sights-btn__list-btn_active');
            }
            if ($(window).width() > 767) {
                $('.cat-slider__slides').slick('slickUnfilter', $('.cat-slider__slides').find(tourismItem));
                $('.cat-slider__slides').slick('slickUnfilter', $('.cat-slider__slides').find(businessItem));
            }
            else {
                $(businessItem).show()
                $(tourismItem).show()
            }
        })
        $("#sights-btn__tourism").on("click", function () {
            if ($(this).hasClass('sights-btn__list-btn_active') == false) {
                $("#sights-btn__business").removeClass("sights-btn__list-btn_active");
                $("#sights-btn__all").removeClass("sights-btn__list-btn_active");
                $("#sights-btn__tourism").addClass('sights-btn__list-btn_active');
            }
            if ($(window).width() > 767) {
                $('.cat-slider__slides').slick('slickUnfilter', $('.cat-slider__slides').find(businessItem));
                $('.cat-slider__slides').slick('slickFilter', $('.cat-slider__slides').find(tourismItem));
            }
            else {
                $(businessItem).hide()
                $(tourismItem).show()
            }
        })
        $("#sights-btn__business").on("click", function () {
            if ($(this).hasClass('sights-btn__list-btn_active') == false) {
                $("#sights-btn__all").removeClass("sights-btn__list-btn_active");
                $("#sights-btn__tourism").removeClass("sights-btn__list-btn_active");
                $("#sights-btn__business").addClass('sights-btn__list-btn_active');
            }
            if ($(window).width() > 767) {
                $('.cat-slider__slides').slick('slickUnfilter', $('.cat-slider__slides').find(tourismItem));
                $('.cat-slider__slides').slick('slickFilter', $('.cat-slider__slides').find(businessItem));
            }
            else {
                $(businessItem).show()
                $(tourismItem).hide()
            }
        })
    }
});
