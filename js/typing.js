/* jQuery Hover color change */

$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("color", "#F0A500");
    }, function() {
        $(this).css("color", "#082032");
    });
});

/* Typing function */

const texts = ["We do it differently.", "We do it better."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    let typing = document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 150);
}());