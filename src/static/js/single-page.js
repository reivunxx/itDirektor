$(document).ready(function () {
    if ($('.single-place__desc-block_expand').length != 0) {
        let block = $('.single-place__desc-block_expand');
        let button = block.find('.single-place__show-more');
        let textWrapper = block.find('.single-place__desc-text-wrapper');
        let text = block.find('p');

        if(text.height() > 154 ){
            button.click(function () {
                if (textWrapper.hasClass('active')) {
                    textWrapper.removeClass('active');
                    button.find('span').html('Подробнее');
                    textWrapper.height('154px');
                } else {
                    textWrapper.addClass('active');
                    button.find('span').html('Свернуть');
                    textWrapper.height(text.height());
                }
            })
        }
        else {
            button.remove()
        }


    }

    if ($('.single-place__share').length > 0) {
        $('.single-place__share').click(function () {
            $('.single-place__share-popup').toggleClass('active')
        })
    }

    if ($('.single-place__leave-review').length != 0) {
        let form = $('.single-place__leave-review .form')
        let button = $('.single-place__leave-review .single-place__review-submit')
        let buttonText = button.find('span')
        form.hide();

        button.click(function () {
            if (button.hasClass('active')) {
                button.removeClass('active')
                buttonText.html('Написать отзыв')
                form.slideToggle()
            } else {
                button.addClass('active')
                buttonText.html('Закрыть форму')
                form.slideToggle()
            }
        })
    }

    if ($('.sin-cat-cont__filter').length != 0) {
        $("#btnMobileFilter").on('click', function () {
            if ($(this).attr("check-mobile-filter") == "close") {
                $(this).attr("check-mobile-filter", 'open');
                $(".sin-cat-cont__filter-body").slideDown(600);
            } else {
                $(this).attr("check-mobile-filter", 'close');
                $(".sin-cat-cont__filter-body").slideUp(600);
            }
        })
    }
    if ($('.blog-category-filter').length != 0) {
        $("#btnMobileFilter").on('click', function () {
            if ($(this).attr("check-mobile-filter") == "close") {
                $(this).attr("check-mobile-filter", 'open');
                $(".blog-category__filter-body").slideDown(600);
            } else {
                $(this).attr("check-mobile-filter", 'close');
                $(".blog-category__filter-body").slideUp(600);
            }
        })
    }

    $('.single-place__show-tour').click(function () {
        if ($('.single-place__show-tour').hasClass('active')) {
            $('.single-place__tour').slideToggle()
            $('.single-place__show-tour').removeClass('active')
            $('.single-place__show-tour').html('Показать 3D тур')
        } else {
            $('.single-place__tour').slideToggle()
            $('.single-place__show-tour').addClass('active')
            $('.single-place__show-tour').html('Закрыть 3D тур')
        }
    })

    $('.clickFirstImgBtn').on("click", function () {
        $(".clickFirstImg").click();
    });

    if ($('#single-map').length > 0) {
        let map = L.map('single-map', {
            gestureHandling: true
        }).setView([48.6162737, 43.7810891], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
        let coords = mapData.split(',');
        let thisMarker = L.marker(coords);
        map.addLayer(thisMarker)
        map.setView(coords, 16)
    }

    if ($(".single-place__info").length != 0) {
        const anchors = document.querySelectorAll('a[href*="#"]')
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }
    if ($(".single-place__info").length != 0) {
        $(".__icon-info-button").mouseover(function () {
            $(".single-place__price-info-cont").css({"display": "block"});
        });
        $(".__icon-info-button").mouseleave(function () {
            $(".single-place__price-info-cont").css({"display": "none"});
        });
    }
})
