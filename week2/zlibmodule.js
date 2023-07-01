// zlibmodule

const zlib=require("zlib");

//input declaration
var input="This is a nodejs class";

//Calling gzip method to compress data
zlib.gzip(input,(err,buffer) => {
    console.log("compressed data: ",buffer.toString());
})