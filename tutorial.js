const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class SomeMathObj {
    constructor() {
        console.log("This is a class")
    }
}
/*module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObj = SomeMathObj;
*/

//we can create an dictionary type so that we don't have to 
// repeatedly type the same line again and again

module.exports = {sum:sum,PI:PI,SomeMathObj: SomeMathObj}