const fs=require("fs");

fs.unlink("./TestAsync/writeFile.txt",(err)=>{
    if(err) throw err;
});

