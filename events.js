const EvenEmitter = require("events");
const emitter = new EvenEmitter();

// register a listener
emitter.on('messageLogged', function (arg) {
    console.log('Listener called',arg);
})

// Raise an event 
emitter.emit('messageLogged', {id: 1,url: 'https://'});