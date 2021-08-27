$(document).ready(function(){
    

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });
    
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    }); 
});
