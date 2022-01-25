$(document).ready(function(){

    // Характеристики слайдера
    let slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false
    });

    // Настройки клика на кнопку слайдера вперед и назад
    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    }); 
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    }); 

    // Переключение между табами
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // Функция перехода и обратного перехода по ссылке в каталоге
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };
    // Вызов функции
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});