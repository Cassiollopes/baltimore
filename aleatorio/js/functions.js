 /*
$(function(){
    setTimeout(function(){
        $('.img-img').css('opacity', 1).css('transition', '2s')
    }, 3000)

    $('.container-fts').hover(function(){
        $('.img-img').css('opacity', 1).css('transition', '1s')
    },function(){
        $('.img-img').css('opacity', 0).css('transition', '1s')
    })

    $(window).scroll(function(){
        $('.img-img').css('opacity', 1).css('transition', '1s')
    })
});
*/

$(function(){
    $('.fotos').hover(function(){
        $('.a').css('transform', 'translateX(10%)')
        .css('transition', '1s');
        $('.a i').css('scale', 1.2).css('transition', '1s')
        .css('color', 'white');
        $('.a p').css('color', 'darkorange').css('transition', '1s');
        $('.img-1').css('height', '500px').css('transition', '1s');
    },function(){
        $('.a').css('transform', 'translateX(0%)')
        .css('transition', '1s');
        $('.a i').css('scale', 1).css('transition', '1s')
        .css('color', 'gray');
        $('.a p').css('color', 'gray').css('transition', '1s');
        $('.img-1').css('height', '400px').css('transition', '1s');
    })
});
