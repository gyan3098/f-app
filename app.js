/*function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Gyan")

console.log(window)

var name = " ";
window.name
*/
//in node every file is a module and fuctions defined
// in the file are scoped to that file only

//var logger = require("./logger");
// the below will show the name of the function 
//defined in that module
//console.log(logger)

//logger = 1
//logger.log("message")

const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj)