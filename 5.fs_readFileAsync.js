const fs=require("fs");

fs.readFile("./TestAsync/WriteFile.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("ERROR",err);
    }
    console.log(data);
}
);
