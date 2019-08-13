const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('Gyan', (num1, num2) => {
    console.log(num1 + num2);

});

eventEmitter.emit("Gyan", 1,2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;

    }
    get name() {
        return this._name;
    }
}

let gyan = new Person('Gyan');
let merry = new Person('Merry');
merry.on('name', () => {
    console.log("my name is " + merry.name);
})
gyan.on('name', () => {
    console.log('my name is ' + gyan.name);
})

gyan.emit('name');
merry.emit("name");