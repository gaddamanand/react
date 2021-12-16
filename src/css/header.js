import $ from "jquery";

if ($("#main_slider_wrap").length) {
    $('#main_slider_wrap').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        pauseOnHover: false,
        touchMove: true,
        draggable: true,
        autoplay: true,
        // pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 8000,
        prevArrow: $('.main_slider .arrow.prev'),
        nextArrow: $('.main_slider .arrow.next, .next_title')
    });
}