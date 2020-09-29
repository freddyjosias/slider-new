$(function() {
    'use strict';

    $('.contenido').hide();
    $('.contenido').css('opacity','0');

    var numAMostrar = 4;
    var bloques = 0;
    var maxBloques = Math.ceil($('.contenido').length /numAMostrar);

    console.log($('.contenido').length);

    for (let index = 0; index < numAMostrar; index++) {
        $('.contenido:nth(' + index + ')').show().animate({opacity:'1'});
    }
    
    bloques = 1;
    $('.next').click(function() {
        $('.contenido').animate({opacity:'0'}, 300);
        $('.contenido').hide();
        if (bloques == maxBloques) {
            bloques = 1;
        } else {
            bloques++;
        }
        
        for (let index = (bloques - 1) * numAMostrar; index < numAMostrar * bloques; index++) {
            $('.contenido:nth(' + index + ')').show().animate({opacity:'1'}, 300);
        }
    })

    $('.prev').click(function() {
        $('.contenido').animate({opacity:'0'}, 300);
        $('.contenido').hide();
        if (bloques == 1) {
            bloques = maxBloques;
        } else {
            bloques--;
        }
        for (let index = (bloques * numAMostrar) - 1; index > ((bloques - 1) * numAMostrar) - 1; index--) {
            $('.contenido:nth(' + index + ')').show().animate({opacity:'1'}, 300);
        }
    })

});