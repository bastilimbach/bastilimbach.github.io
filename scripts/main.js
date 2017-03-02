const ityped = require('ityped')
const tiltjs = require('vanilla-tilt')
const ScrollReveal = require('scrollreveal')

ityped.init('.typed', {
    strings: ['student', 'associate consultant'],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 1000,
    loop: true
})

tiltjs.init(document.querySelectorAll('.postImgContainer'), {
    max: 20,
    scale: 1.15,
    speed: 800
})

const sr = new ScrollReveal({
    reset: true
})
sr.reveal('.post')
