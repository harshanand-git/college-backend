// // // // // console.log("start");
// // // // // // setTimeout(() => console.log("mid"),5000);
// // // // // for(let i=0;i<1e9;i++){}
// // // // // console.log("end");
// // // // console.log("1");
// // // // const getConsole=()=>{
// // // //     console.log("2");
// // // //     setTimeout(()=>{
// // // //         console.log("3");
// // // //     },2000
// // // //     );
// // // // };
// // // // getConsole();
// // // // for(let i=0;i<5e9;i++){}
// // // // console.log("4");
// // // // console.log("5");
// // // import {add} from './utils.js';

// // // const result=add(5,10);
// // // console.log(`The sum is: ${result}`);
// // // import Multi from './utils.js';

// // // const product=Multi(5,10);
// // // console.log(`The product is: ${product}`);
// // // import {divide} from './functions/function.js';

// // // const quotient=divide(10,5);
// // // console.log(`The quotient is: ${quotient}`);
// // // import fs from "fs";

// // // fs.readFile('sample.txt','utf8',(err,data)=>{
// // //     if(err){
// // //         console.error("Error reading file:",err);
// // //         return;
// // //     }
// // //     console.log("File content:",data);
// // // }); 
// // import {error}from "console"
// // import fs from "fs"
// // import path from "path"
// // const filepath="Asus";

// // fs.readFile("file.txt","utf8",(err,data) => {
// //     console.log(data);
// //     const absolutePath=path.resolve("file.txt");
// //     console.log(absolutePath);
// //     const dirName=path.dirname("/functions/function.js");
// // })
// import os from "os";

// const totalMemory=os.totalmem();
// const freeMemory=os.freemem();  
// console.log(`Total Memory: ${totalMemory} bytes`);
// console.log(`Free Memory: ${freeMemory} bytes`);
const add=require('./utils.js');
const result=add.add(5,10);
console.log(`The sum is: ${result}`);
const product=add.Multi(5,10);
console.log(`The product is: ${product}`);