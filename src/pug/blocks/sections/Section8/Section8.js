$(document).ready(function () {
    $('.team__wrap').click(function () {
        $('.team__wrap').removeClass('active')
        console.log($(this))
        $(this).addClass('active')
    })

});