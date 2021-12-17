/* jQuery Hover color change */

$(document).ready(function() {
    $("i").hover(function() {
        $(this).css("color", "#F0A500");
    }, function() {
        $(this).css("color", "#082032");
    });
});

/* Email Form Validation */

let myform = document.getElementById("myform");
myform.addEventListener("submit", function(event) {
    let getemail = document.getElementById("getemail").value,
        tomatch = /\S+@\S+\.\S+/;
    event.preventDefault();
    if (!tomatch.test(getemail)) {
        alert("Invalid email format, please submit a correct email.");
    } else {
        alert("Thank you! We will keep you updated.");
    }
}, false);