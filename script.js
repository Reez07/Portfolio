$(document).ready(function(){
    

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });
});