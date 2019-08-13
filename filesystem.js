const fs = require('fs');
 //create a file
//fs.writeFile('./tutorial/example3.txt', "this is an example", (err) => {
//    if (err)
//        console.log(err);
//    else {
//        console.log('File successfully created');
//        fs.readFile('example3.txt',"utf8", (err, file) => {
//            if (err)
//                console.log(err)
//            else
//                console.log(file);
//        });
//    }
        
//});

//fs.rename("example.txt", "example2.txt", (err) => {
//    if (err)
//        console.log(err);
//    else
//        console.log("successfully renamed the file");
//});


//fs.appendFile('example2.txt', "\nSome data being appended", (err) => {
//    if (err)
//        console.log(err);
//    else
//        console.log('successfully data appended to the file')
//})

//fs.unlink("example2.txt", (err) => {
//    if (err)
//        console.log(err);
//    else
//        console.log('Successfully deleted the file');

//});

fs.writeFile('example3.txt', "this is an example", (err) => {
    if (err)
        console.log(err);
    else {
        console.log('File successfully created');
        
    }

});