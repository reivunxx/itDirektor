$(document).ready(function () {
    $('.scrollSection').each(function () {
        const section = $(this)
        const icon = section.find('.scrollSection__icon')
        const content = section.find('.scrollSection__content')

        const triggerOpt = {
            trigger: section,
            start: "top center"
        }

        //icons
        gsap.from(icon, {
            x: 15,
            opacity: 0,
            scrollTrigger: triggerOpt
        })

        if (section.has('.sc1').length != 0) {
            gsap.from(section.find('.scrollLine'), {
                height: '10px',
                scrollTrigger: triggerOpt,
                duration: 1.5
            })
        }


        if (section.has('.scrollSection__titleBig').length != 0) {
            gsap.from(section.find('.scrollSection__titleBig'), {
                y: "100%",
                opacity: 0,
                scrollTrigger: triggerOpt
            })
        }

        if (section.has('.scrollSection__boldText').length != 0) {
            gsap.from(section.find('.scrollSection__boldText'), {
                y: "100%",
                opacity: 0,
                scrollTrigger: triggerOpt
            })
        }

        if (section.has('.scrollSection__caption').length != 0) {
            gsap.from(section.find('.scrollSection__caption'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .5
            })
        }

        if (section.has('.img1').length != 0) {
            gsap.from(section.find('.img1'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
            })
        }

        if (section.has('.img2').length != 0) {
            gsap.timeline()
                .from(section.find('.img2'), {
                    opacity: 0,
                    scrollTrigger: triggerOpt,
                    delay: .1
                })

        }

        if (section.has('.sc6').length != 0) {
            gsap.from(section.find('.sc6__title'), {
                y: "100%",
                opacity: 0,
                scrollTrigger: triggerOpt,
            })

            gsap.from(section.find('.sc6__buttons'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .3
            })

            gsap.from(section.find('.card1'), {
                opacity: 0,
                x: -25,
                scrollTrigger: triggerOpt,
                delay: .2
            })

            gsap.from(section.find('.card2'), {
                opacity: 0,
                x: -25,
                scrollTrigger: triggerOpt,
                delay: .4
            })

            gsap.from(section.find('.card3'), {
                opacity: 0,
                x: 25,
                scrollTrigger: triggerOpt,
                delay: .6
            })

            gsap.from(section.find('.card4'), {
                opacity: 0,
                x: 25,
                scrollTrigger: triggerOpt,
                delay: .8
            })
        }

        if (section.has('.scrollSection__marquee').length != 0) {
            gsap.from(section.find('.scrollSection__marquee'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
            })
        }

        if (section.has('.scrollSection__team').length != 0) {
            gsap.from(section.find('.scrollSection__team'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
            })
        }

        if (section.has('.sc9').length != 0) {
            gsap.from(section.find('.sc9__buttons'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .3
            })

            gsap.from(section.find('.sc9__slider'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .5
            })

            gsap.from(section.find('.sc9swiper-scrollbar'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .5
            })
        }

        if (section.has('.sc10').length != 0) {
            gsap.from(section.find('.sc10__slider'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .5
            })

            gsap.from(section.find('.sc10swiper-scrollbar'), {
                opacity: 0,
                scrollTrigger: triggerOpt,
                delay: .5
            })
        }
    })

    $(document).mousemove(function (event) {
        if (window.outerWidth > 768) {
            $(".img1").each(function (index, element) {
                var xPos = (event.clientX / $(window).width()) - 0.5,
                    yPos = (event.clientY / $(window).height()) - 0.5,
                    box = element;

                gsap.to(box, {
                    x: xPos * 100,
                    y: yPos * 100,
                    ease: Power1.easeOut,
                });
            })

            $(".img2").each(function (index, element) {
                var xPos = (event.clientX / $(window).width()) - 0.5,
                    yPos = (event.clientY / $(window).height()) - 0.5,
                    box = element;

                gsap.to(box, {
                    x: -xPos * 100,
                    y: -yPos * 100,
                    ease: Power1.easeOut,
                });
            })
        }
    });

    const header = $('.header')
    const hero = $('.hero')
    const service = $('#service')
    const btn = $('.header__mobileBtn')
    const btnIcon = btn.find('.mb__wrap')
    const mm = $('.header__mobile')
    const mmNavs = $('.header__mobile .mm__nav')

    btn.click(function () {
        btnIcon.toggleClass('active')
        mm.toggleClass('active')
        checkPos()
    })

    mmNavs.click(function () {
        btnIcon.removeClass('active')
        mm.removeClass('active')
        checkPos()
    })


    const checkPos = () => {
        if (
            (hero.offset().top <= header.offset().top
                && header.offset().top < hero.outerHeight() + hero.offset().top)
            || (service.offset().top <= header.offset().top
                && header.offset().top < service.outerHeight() + service.offset().top)
            || (btnIcon.hasClass('active'))
        ) {
            header.addClass('white')
        } else {
            header.removeClass('white')
        }
    }

    checkPos()
    $(document).on('scroll', function () {
        checkPos()
    })

    gsap.from($('.hero__bg img'), {
        opacity: 0,
        delay: .2
    })

    gsap.from($('.hero__title'), {
        opacity: 0,
        x: 15,
        delay: .5
    })

    gsap.from($('.hero__caption'), {
        opacity: 0,
        delay: .9
    })

    gsap.from($('.hero__content a'), {
        opacity: 0,
        y: 15,
        delay: 1
    })


})
