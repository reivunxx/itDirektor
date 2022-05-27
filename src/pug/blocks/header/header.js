$( document ).ready(function () {
    if ($('.header__search').length > 0) {
        $('.header__search input').keyup(function () {
            if ($('.header__search input').val().length > 0) {
                $('.header__search button').addClass('active')
            } else {
                $('.header__search button').removeClass('active')
            }
        })
    }

    let a = $('.header__second-line li:nth-child(6) a').clone()
    let b = $('.header__second-line li:nth-child(7) a').clone()
    let c = $('.header__second-line li:nth-child(8) a').clone()
    $('.header__second-line-show-more-wrap').append(a)
    $('.header__second-line-show-more-wrap').append(b)
    $('.header__second-line-show-more-wrap').append(c)

    $('.header__second-line-show-more').click(function () {
        $('.header__second-line-show-more-wrap').toggleClass('active');
    })


    $('.header__mobile-button').click(function () {
        if($(this).attr("data-check-mob-menu") == "close-mob-menu"){
            $(this).attr("data-check-mob-menu", 'open-mob-menu');
            $(this).addClass('active')
            $('.header__mobile-hidden').addClass('active');
            $('body').addClass('body_overflow-hidden');
        }else{
            $(this).attr("data-check-mob-menu", 'close-mob-menu');
            $(this).removeClass('active')
            $('.header__mobile-hidden').removeClass('active');
            $('body').removeClass('body_overflow-hidden');
        }
    });

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
})

