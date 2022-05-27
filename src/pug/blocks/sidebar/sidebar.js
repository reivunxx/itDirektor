$(document).ready(function () {
    if($('.sidebar__filter-block').length != 0){
        $('.sidebar__filter-block').each(function () {
            let filter = $(this);
            let toggler = filter.find(".sidebar__filter-title")
            let slide = filter.find(".sidebar__filter-options")

            if(!toggler.hasClass('active')){
                slide.toggle()
            }

            toggler.click(function () {
                slide.slideToggle();
                toggler.toggleClass("active")
            })
        })
    }
    if($('.sidebar__filter-options').find("input:checkbox:checked").length != 0){
        $('.sin-cat-cont__list-item-filter-title').css({"display" : "block"});
    }

    if($('.sin-cat-cont__filter-body-form').length != 0){
        let $arrayFilterOptionList = $('.sidebar__filter-options');
        for(let checkedInput = 0; checkedInput < $arrayFilterOptionList.length; checkedInput++){
            if($($arrayFilterOptionList[checkedInput]).find("input:checkbox:checked").length != 0){
                $($arrayFilterOptionList[checkedInput]).parent().find('.sidebar__filter-title').click();
                let $arrayCheckedTitle = $($arrayFilterOptionList[checkedInput]).find("input:checkbox:checked");
                for(let checkedTitle = 0; checkedTitle < $arrayCheckedTitle.length; checkedTitle++){
                    let title = $($arrayCheckedTitle[checkedTitle]).parent().find('.sidebar__filter-option-title span:first-child').html()
                    $('.sin-cat-cont__list-item-filter').append("<div class=\"sin-cat-cont__list-item-filter-name\"><p>"+title+"</p></div>");
                }
            }
        }
        if($('.sidebar__filter-options').find("input:checkbox:checked").length != 0){
            $('.sin-cat-cont__list-item-filter').append('<div class="sin-cat-cont__list-item-filter-close" id="resetFilterCatalog"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="close"><path d="M10.97 8.85l5.303-5.304a1.5 1.5 0 10-2.12-2.121L8.847 6.728 3.546 1.425a1.5 1.5 0 10-2.121 2.121l5.302 5.303-5.302 5.303a1.5 1.5 0 102.12 2.121l5.303-5.302 5.304 5.302a1.501 1.501 0 002.58-1.055 1.5 1.5 0 00-.459-1.066L10.971 8.85v.001z"></path></svg><p>Сбросить фильтр</p></div>');
        }
    }

    if ($("#resetFilterCatalog").length != 0) {
        $("#resetFilterCatalog").on("click", function () {
            $(".real-reset-catalog-filter-btn").click();
        });
    }
})
