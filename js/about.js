/* jQuery Hover color change */

$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("color", "#F0A500");
    }, function() {
        $(this).css("color", "#082032");
    });
});

/* Image Hover Opacity */

function imageNormal(image) {
    image.style.opacity = "1";
}

function imageHover(image) {
    image.style.opacity = "0.5";
}