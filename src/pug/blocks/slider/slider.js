$(document).ready(function () {
    class Job {
        constructor(maxNumber) {
            this.maxNumber = maxNumber;
        };

        getRandomInt() {
            return Math.floor(Math.random() * Math.floor(this.maxNumber));
        };
    };

    $(".slider__slides").each(function () {
        if ($(window).width() > 767) {
            $(this).slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $(this).next().find('.slider__prev-button'),
                nextArrow: $(this).next().find('.slider__next-button'),
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                ]
            })
        }
    })

    $('.post-hover').mouseenter(function () {
        let getColorNumber = new Job(3);
        let colorArray = ['#4D92EA', '#FF716E', '#EED682', '#82B2BD'];
        $(this).find("img").css({
            "transform": "translate(-10px,-10px)",
            "box-shadow": "10px 10px 0px" + colorArray[getColorNumber.getRandomInt()]
        });
        if ($(this).find('.content-tag').length > 0) {
            $(this).find('.content-tag').css({
                "transform": "translate(-10px,-10px)"
            });
        }
        ;
    });

    $('.post-hover').mouseleave(function () {
        $(this).find("img").css({
            "transform": "translate(0,0)",
            "box-shadow": "none"
        });
        if ($(this).find('.content-tag').length > 0) {
            $(this).find('.content-tag').css({
                "transform": "translate(0,0)"
            });
        }
        ;
    });

    $('.category-btn-hover').mouseenter(function () {
        let getColorNumber = new Job(3);
        let colorArray = ['#4D92EA', '#FF716E', '#EED682', '#82B2BD'];
        $(this).find(".cat-slider__slides-item-img").css({
            "transform": "translate(-10px,-10px)",
            "box-shadow": "10px 10px 0px" + colorArray[getColorNumber.getRandomInt()]
        });
    });

    $('.category-btn-hover').mouseleave(function () {
        $(this).find(".cat-slider__slides-item-img").css({
            "transform": "translate(0,0)",
            "box-shadow": "0px 0px 22px rgba(77, 146, 234, 0.15)"
        });
    });
});