
var app = document.getElementById('app_typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: ""
});




typewriter.typeString( '\xa0\xa0' +'Kaz Sato'+ '\xa0')
    // .cursor('')
    .pauseFor(2500)
    .deleteAll()
    .typeString('\xa0\xa0' + 'HIGHLY ACCOMPLISHED DEEP LEARNING RESEARCHER' + '\xa0')
    .pauseFor(2500)
    .deleteAll()
    .typeString ('\xa0\xa0' +'University of Montreal'+ '\xa0')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();