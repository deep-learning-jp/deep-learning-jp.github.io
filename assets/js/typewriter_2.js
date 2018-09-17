
var app = document.getElementById('app_typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});




typewriter.typeString( '\xa0\xa0' +'Alex Lamb')
    // .cursor('')
    .pauseFor(2500)
    .deleteAll()
    .typeString('\xa0\xa0' + 'Researcher')
    .pauseFor(2500)
    .deleteAll()
    .typeString ('\xa0\xa0' +'University of Montreal')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();