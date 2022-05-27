$(document).ready(function () {
    $('.city-image__link').fancybox({
        loop: true,
        helpers: {
            title : {
                type : 'float'
            }
        }
    });

    function setHeightBlogImage() {
        if ($(window).width() > 1024) {
            if ($(".city-blog__content-second").length > 0) {
                $('.city-blog__content-main-img').each(function () {
                    $(this).css('height', $(this).width())
                })
                let lastNewsHeight = $(".content-link-second").last().height();
                let lastNewsImageHeight = $(".content-link-second").last().find("img").height();
                let heightMainImage = ($(".city-blog__content-second").height() - lastNewsHeight) + lastNewsImageHeight;
                $(".city-blog__content-main").find('img').css({
                    "height": heightMainImage
                });
            };
        }
    }

    setHeightBlogImage();

    $('.show-all-city-image').on("click", function () {
        $('.city-gallery__main').find('a').click();
    })

    $(window).on("resize", function () {
        setHeightBlogImage();
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 500){
            $('.goToTop').css({"display":"block"});
        }
        if($(window).scrollTop() < 500){
            $('.goToTop').css({"display":"none"});
        }
    });

    $(".goToTop").on("click", function (){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    new WOW().init();
});
