// // console.log("start");
// // // setTimeout(() => console.log("mid"),5000);
// // for(let i=0;i<1e9;i++){}
// // console.log("end");
// console.log("1");
// const getConsole=()=>{
//     console.log("2");
//     setTimeout(()=>{
//         console.log("3");
//     },2000
//     );
// };
// getConsole();
// for(let i=0;i<5e9;i++){}
// console.log("4");
// console.log("5");
import {add} from './utils.js';

const result=add(5,10);
console.log(`The sum is: ${result}`);
import Multi from './utils.js';

const product=Multi(5,10);
console.log(`The product is: ${product}`);
import {divide} from './functions/function.js';

const quotient=divide(10,5);
console.log(`The quotient is: ${quotient}`);