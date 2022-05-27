$(document).ready(function () {
    function resetPlaceholder() {
        $('#name input').attr({"placeholder": "Ваше имя"});
        $('#company_name input').attr({"placeholder": "Название вашей компании"});
        $('#email input').attr({"placeholder": "Ваш E-mail"});
        $('#phone input').attr({"placeholder": "Ваш номер телефона"});
        $('#text textarea').attr({"placeholder": "Расскажите о вашей задаче..."});
        $('.buy-form__about_client-input input[name = "captcha_word"]').attr({"placeholder": "Введите captcha"});

    }

    function checkFormBtn() {
        if ($('#name input').val().length !== 0 &
            $('#company_name input').val().length !== 0 &
            $('#email input').val().length !== 0 &
            $('#phone input').val().length !== 0 &
            $('#text textarea').val().length !== 0 &
            $('.buy-form__about_client-input input[name = "captcha_word"]').val().length !== 0
        ) {
            return true
        } else {
            return false
        }
    }

    if ($('.buy-form').length != 0) {
        resetPlaceholder();

        if ($('#name input').val() !== "" &
            $('#company_name input').val() !== "" &
            $('#email input').val() !== "" &
            $('#phone input').val() !== "" &
            $('#text textarea').val() !== "" &
            $('.buy-form__about_client-input input[name = "captcha_word"]').val() == "") {
            $('.buy-form__about_client-input input[name = "captcha_word"]').css({"border": "3px solid #FF716E"});
            $('.buy-form__about_client-input input[name = "captcha_word"]').parent().append('<p style="color:#FF716E; margin-top: 15px;">Ошибка в заполнение CAPTCHA</p>');
        }

        $('.buy-form__about_client-input input').each(function () {
            $(this).keyup(function () {
                if (checkFormBtn() == true) {
                    $(".buy-form__send-btn").removeClass('not-active');
                    $(".buy-form__send-btn").addClass('active');
                }
            });
        });

        $('#text textarea').each(function () {
            $(this).keyup(function () {
                if (checkFormBtn() == true) {
                    $(".buy-form__send-btn").removeClass('not-active');
                    $(".buy-form__send-btn").addClass('active');
                }
            });
        });
        $(function() {
            $("#phone input").mask("+7 (999) 999-9999");
        });
    }
});