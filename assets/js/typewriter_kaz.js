
var app = document.getElementById('app_typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: ""
});




typewriter.typeString( '\xa0\xa0' +'Kaz Sato '+ '\xa0')
    // .cursor('')
    .pauseFor(1500)
    .deleteAll()
    .typeString('\xa0\xa0' + 'Staff Developer Advocate' + '\xa0')
    .pauseFor(1500)
    .deleteAll()
    .typeString ('\xa0\xa0' +'Google, Tokyo'+ '\xa0')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(1500)
    .start();