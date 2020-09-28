$(function() {
    'use strict';

    $('.contenido').hide();

    var numAMostrar = 4;
    var bloques = 0;
    var maxBloques = Math.ceil($('.contenido').length /numAMostrar);

    console.log($('.contenido').length);

    for (let index = 0; index < numAMostrar; index++) {
        $('.contenido:nth(' + index + ')').show();
    }
    
    bloques = 1;
    $('.next').click(function() {
        $('.contenido').fadeOut(500);
        if (bloques == maxBloques) {
            bloques = 1;
        } else {
            bloques++;
        }
        for (let index = (bloques - 1) * numAMostrar; index < numAMostrar * bloques; index++) {
            $('.contenido:nth(' + index + ')').fadeIn(500);
        }
    })

    $('.prev').click(function() {
        $('.contenido').fadeOut(500);
        if (bloques == 1) {
            bloques = maxBloques;
        } else {
            bloques--;
        }
        for (let index = (bloques * numAMostrar) - 1; index > ((bloques - 1) * numAMostrar) - 1; index--) {
            $('.contenido:nth(' + index + ')').fadeIn(500);
        }
    })

});