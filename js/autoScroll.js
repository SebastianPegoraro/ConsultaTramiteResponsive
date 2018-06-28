$("#numero").click(function() {
    $('html,body').animate({
        scrollTop: $("#contenidoNumero").offset().top},
        'slow');
});

$("#identificacion").click(function() {
    $('html,body').animate({
        scrollTop: $("#contenidoIdentificacion").offset().top},
        'slow');
});

$("#dni").click(function() {
    $('html,body').animate({
        scrollTop: $("#contenidoDni").offset().top},
        'slow');
});
