const fs=require("fs");

try {
    const data=fs.readFileSync("./TestSync/WriteFileSync.txt",{encoding:"utf-8"});
    console.log(data);
} catch (error) {
    console.log(error);
}