
var app = document.getElementById('app_typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: ""
});




typewriter.typeString( '\xa0\xa0' +'Alex Lamb'+ '\xa0')
    // .cursor('')
    .pauseFor(2500)
    .deleteAll()
    .typeString('\xa0\xa0' + 'Eminent Deep Learning Researcher' + '\xa0')
    .pauseFor(2500)
    .deleteAll()
    .typeString ('\xa0\xa0' +'University of Montreal'+ '\xa0')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();