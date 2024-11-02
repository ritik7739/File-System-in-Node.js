const fs=require("fs");
const text="Hi I'm Sync file";
try {
    fs.writeFileSync("./TestSync/WriteFileSync.txt",text);
} catch (error) {
    console.log("ERROR",error);
}