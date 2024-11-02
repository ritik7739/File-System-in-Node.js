const fs=require("fs");

try {
    fs.unlink("./TestSync/WriteFileSync.txt");
} catch (error) {
    console.log(error);
}