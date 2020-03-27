$(document).ready(function(){
    $('.content-slider').slick({
        arrows: false,
        fade: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        asNavFor: '.links',
        speed: 500
    });
    $('.links').slick({
        slidesToShow: 4,
        asNavFor: '.content-slider',
        focusOnSelect: true
    })
});