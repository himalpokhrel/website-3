$(document).ready(function(){

    $('#menu').click(function(){
$(this).toggleClass('fa-times');
  $('header').toggleClass('toggle');
    });

    $(window).on('scrool load',function(){

        $(menu).removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html,body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'

    );

    });
    
});


/*--typedjs--*/
var typed = new Typed(".multiple", {
    strings: [ "Himal Pokhrel","Himal Pokhrel"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});


var typed = new Typed(".post", {
    strings: [ "Web Developer", "YouTuber", "Graphic Designer", "Gamer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

