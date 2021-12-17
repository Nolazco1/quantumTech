/* jQuery Hover color change */

$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("color", "#F0A500");
    }, function() {
        $(this).css("color", "#082032");
    });
});

/* Service Image Magnify */

function imageNormal(image) {
    image.style.transform = "scale(1)";
    image.style.opacity = "1";
}

function imageHover(image) {
    image.style.transition = "transform 2s";
    image.style.transform = "scale(1.3)";
    image.style.opacity = "0.7";
}