const fs=require("fs");
const server=require("http");
const httpserver=server.createServer((req,res)=> {
    res.write("hello\n");
    // res.end("hello server");     //after calling of one end method it will be over
    fs.writeFile("write1.txt","This is to write in a file with http server",(err,data)=> {
        if(err) {
            throw err;
        }
        console.log("writing completed successfully..")
    });
})
httpserver.listen(5000,()=> {
    console.log("Server connected successfully...");
})