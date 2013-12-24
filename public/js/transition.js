// ------------------Globals----------------- //
var hidden = true,
    beenClicked = false;
// ------------------------------------------ //

function hide() {
    $("#expand").removeClass("coverUp");
    $("#expand").removeClass("fadeOut");
    $('.content').removeClass('push');
    $('#side').removeClass('push');
    $('#menu').removeClass('pushfast');
    $('.content').addClass('pull');
    $('#side').addClass('pull');
    $('#menu').addClass('pullslow');
    hidden = !hidden;
}

function show() {
    $("#expand").addClass("coverUp");
    $("#expand").addClass("fadeOut");
    $('.content').removeClass('pull');
    $('#side').removeClass('pull');
    $('#menu').removeClass('pullslow');
    $('.content').addClass('push');
    $('#side').addClass('push');
    $('#menu').addClass('pushfast');
    hidden = !hidden;
}


$('html').click(function (event) {
    var name = event.target.nodeName;
    var id = event.target.id;
    if (!hidden && /*name != "I" && */ name != "BUTTON" && name != "LI" && name != "UL" && id != "sidehead" && id != "menu" && id != "side" && id != "home") {
        hide();
    }
});

function slide() {
    if (hidden && beenClicked) {
        show();
    } else if (!hidden && beenClicked) {
        hide();
    }
}

$("#expand").one("click", function () {
    $("#expand").addClass("coverUp");
    $("#expand").addClass("fadeOut");
    $('.content').addClass('push');
    $('#side').addClass('push');
    $('#menu').addClass('pushfast');
    hidden = !hidden;
    beenClicked = true;
});

$(document).on('click', '#expand', function () {
    slide();
});