const fs=require("fs");
const server=require("http");
const httpserver=server.createServer((req,res)=> {
    res.write("hello\n");
    // res.end("hello server");     //after calling of one end method it will be over
    fs.readFile("read.txt","utf-8",(err,data)=> {
        if(err) {
            throw err;
        }
        res.end(data);
    });
})
httpserver.listen(7000,()=> {
    console.log("Server connected successfully...");
})