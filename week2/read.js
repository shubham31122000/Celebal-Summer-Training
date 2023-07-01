const fs=require("fs");
fs.readFile("student.json","utf-8",function(err, data) {
    if(err) {
        throw err
    }
    console.log(data);
})
