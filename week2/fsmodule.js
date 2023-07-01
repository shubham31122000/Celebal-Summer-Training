const fs=require("fs");
const prompt = require("prompt-sync")();
var student=new Object();
student.name=prompt("Enter name of student: ")
student.age=Number(prompt("Enter the age:"))
student.gender=prompt("Enter your gender:")
const data=JSON.stringify(student,null,2);
fs.appendFile('student.json',data,(err) => {
    if(err) {
        throw err;
    }
    console.log("Data written to file")
})