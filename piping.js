const fs = require('fs');
const zlib = require('zlib');

// gzip compresses the file
//const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example22.txt.gzip');
const writeStream = fs.createWriteStream('uncompressed.txt');

//the pipe method will read the data from redstream and write into 
//the writestram created folder
//readStream.pipe(writeStream);

//readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);