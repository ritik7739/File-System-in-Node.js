const fs=require("fs");
try {
    fs.mkdirSync("./TestSync");
} catch (error) {
    console.log("ERROR",error);
}
