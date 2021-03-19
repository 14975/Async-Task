let fs=require("fs");
console.log("before");
fs.readFile("../f1.txt",cb);
fs.readFile("../f2.txt",cb);
fs.readFile("../f3.txt",cb);
fs.readFile("../f4.txt",cb);
function cb(err,content)
{
    if(err)
    console.log("error");
    else 
    console.log("content->"+content);
}
console.log("after");