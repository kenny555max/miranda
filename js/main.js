$(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg')
        $(this).css(
            'background-image', 'url(' + bg + ')'
        )   
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        smartspeed: 1200,
        dots: false,
        nav: true,
    });

    $('.panel-button').click(function(){
        let panelId = $(this).data('panelid');
        $('#'+ panelId).slideToggle()
    });

    $('.go-to').click(function(){
        $('.sidebar').fadeOut(400);
        $('.content').fadeIn(400)
    });

    $('.go-back').click(function(){
        $('.sidebar').slideToggle(400);
        $('.content').fadeOut(400);
    });
})