// Характеристики слайдера
let slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    responsive: {
        768: {
            autoplay: false
        }
    }
});

// Настройки клика на кнопку вперед и назад
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
}); 
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}); 