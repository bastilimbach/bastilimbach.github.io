var ityped = require("ityped");
var tiltjs = require("vanilla-tilt");
var ScrollReveal = require("scrollreveal");
var cookieNotice = require("cookieconsent");

ityped.init('.typed', {
    strings: ["student", "associate consultant"],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 1000,
    loop: true,
});

// console.log(tiltjs.default.init);

tiltjs.default.init(document.querySelectorAll(".postImgContainer"), {
    max: 20,
    scale: 1.15,
	speed: 800
});

var sr = new ScrollReveal({
    reset: true
});
sr.reveal('.post');
