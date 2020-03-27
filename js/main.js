$(document).ready(function(){
    $('.content-slider').slick({
        arrows: false,
        fade: true,
        waitForAnimate: false,
        initialSlide: 1,
        slidesToShow: 1, 
        slidesToScroll: 1,
        asNavFor: '.links',
        speed: 500
    });
    $('.links').slick({
        variableWidth: true,
        initialSlide: 1,
        slidesToShow: 4,
        asNavFor: '.content-slider',
        focusOnSelect: true
    })
});