const fs = require('fs');
//fs.mkdir("tutorial", (err) => {
//    if (err)
//        console.log(err);
//    else {
//        console.log('folder successfully created');
//        fs.writeFile("./tutorial/example.txt", "123", (err) => {
//            if (err)
//                console.log(err);
//            else
//                console.log('successfully created file');
//        })
//    }
//});

//fs.mkdir("tutorial", (err) => {
//    if (err)
//        console.log(err);
//    else {
//        fs.rmdir("tutorial", (err) => {
//            if (err)
//                console.log(err)
//            else
//                console.log("Successfully deleted")
//        })
//    }
//})


//fs.unlink("./tutorial/example.txt", (err) => {
//    if (err)
//        console.log(err)
//    else {
//        fs.rmdir("tutorial", (err) => {
//            if (err)
//                console.log(err)
//            else
//                console.log("Successfully deleted")
//        });
//    }
//})

fs.readdir('tutorial', (err, files) => {
    if (err)
        console.log(err);
    else {
        for (let file of files) {
            fs.unlink("./tutorial/" + file, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("successfully deleted");
                }
            });
        }
        //console.log(files);
    }
})