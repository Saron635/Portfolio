$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

// i don't know what to do with this one
    // $(window).on('scroll load',functon()
    // {
    //     $('#menu').removeClass('fa-times'),
    //     $(header).removeClass('toggle'),
    // });




    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });
});

