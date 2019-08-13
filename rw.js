const fs = require('fs');
const readStream = fs.createReadStream('./example3.txt', "utf8");
//createWriteStream creates the filename and then write data into the file

const writeStream = fs.createWriteStream('example22.txt');

readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});