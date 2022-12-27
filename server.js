const express = require("express");
const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
    const data = await fsPromises.readFile(
        path.join(__dirname, "files", "starter.txt"),
        "utf-8"
    );
    console.log(data);

    // await fsPromises.unlink(path.join(__dirname, "files", "reply.txt"));

    await fsPromises.writeFile(
        path.join(__dirname, "files", "reply.txt"),
        data
    );

    await fsPromises.appendFile(
        path.join(__dirname, "files", "reply.txt"),
        "\n\nNice to meetch ya"
    );

    await fsPromises.rename(
        path.join(__dirname, "files", "reply.txt"),
        path.join(__dirname, "files", "newReply.txt")
    );

    const newData = await fsPromises.readFile(
        path.join(__dirname, "files", "newReply.txt"),
        "utf-8"
    );
    console.log(newData);
};

fileOps();

// fs.readFile(
//     path.join(__dirname, "files", "starter.txt"),
//     "utf-8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// fs.writeFile(
//     path.join(__dirname, "files", "reply.txt"),
//     "Nice to meet you",
//     (err) => {
//         if (err) throw err;

//         console.log("write complete");
//         fs.appendFile(
//             path.join(__dirname, "files", "test.txt"),
//             "testing text\n",
//             (err) => {
//                 if (err) throw err;

//                 console.log("Append complete");

//                 fs.rename(
//                     path.join(__dirname, "files", "test.txt"),
//                     path.join(__dirname, "files", "newTest.txt"),
//                     (err) => {
//                         if (err) throw err;

//                         console.log("Rename complete");
//                     }
//                 );
//             }
//         );
//     }
// );

process.on("uncaughtException", (err) => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});
