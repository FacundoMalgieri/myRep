
$(function() {
    $('.top').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 71)
            }, 1500);
            return false;
        }
    });
});

$(function() {
    $('#portada').fadeIn(1000);
});

$(function() {
    $('#nav').fadeIn(2000);
});

$(function() {
    $('#footer').fadeIn(2000);
});

/* VER
$(function() {
    $("#pagar").click(function() {
        window.location.href='http://localhost/Proyecto/cuenta/listarCuenta';
    })
});
*/

$(function() {
    var $btn   = $("#fixbtn"), 
        $window    = $(window),
        offset     = $btn.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $btn.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $btn.stop().animate({
                marginTop: 0
            });
        }
    });
    
});
