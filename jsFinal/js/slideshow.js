/* jQuery Hover color change */

$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("color", "#F0A500");
    }, function() {
        $(this).css("color", "#082032");
    });
});

/* Slideshow */

function slideshow() {
    let reviews = ["Quantum was there to help my company grow.", "They were there to set up one on one meetings.", "Their professionals helped our company succeed."],
        images = ["images/review1.jpg", "images/review2.jpg", "images/review3.jpg"],
        client = ["- Jitter's Cafe", "- Yarn Melody", "- Clements Legal"],
        showimage = document.getElementById("slide-image"),
        showreview = document.getElementById("slide-review"),
        showclient = document.getElementById("clients");
    let rand_int = Math.floor(Math.random() * 3);
    showimage.src = images[rand_int];
    showreview.innerHTML = reviews[rand_int];
    showclient.innerHTML = client[rand_int];
}
setInterval(slideshow, 3500);