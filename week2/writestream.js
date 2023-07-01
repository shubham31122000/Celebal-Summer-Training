const fs=require("fs");
var data="This is a write stream";
var writer=fs.createWriteStream("write.txt");
writer.write(data,"utf-8")
writer.end();  //finish the stream
writer.on("finish", function() {
    console.log("write completed");
})
writer.on("error", function(err) {
    console.log(err);
})