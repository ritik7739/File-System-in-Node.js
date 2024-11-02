const fs=require("fs");
const text="Hello World";

//create a new writeFile.txt inside TestAsync dir
fs.writeFile("./TestAsync/writeFile.txt",text,(err)=>{
    if(err) throw err;
});
