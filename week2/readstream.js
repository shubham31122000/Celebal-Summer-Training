const fs=require("fs");
var info='';
const reader=fs.createReadStream("read.txt");
reader.setEncoding("utf-8");
reader.on('data', function(chunk) {
    info=chunk;
})
reader.on('end',function() {
    console.log(info);
})
reader.on('error',function(err) {
    console.log(err);
})