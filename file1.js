const a=()=>{
setTimeout(()=>{
    console.log("a timeout");
},10000);
setTimeout(()=>{
    console.log("b timeout");
},0);
 Promise.resolve().then(()=>{
    console.log("promise resolved");
});
    b();
console.log("a");    

}
const b=()=>{
    c();
    console.log("b");
}
const c=()=>{
    console.log("c");
}
 a();
// a pushed to stack
//set Timeout callback registered to runtime environment
// b pushed to stack
// c pushed to stack
// c popped from stack and executed
// b popped from stack and executed
// a popped from stack and executed
//event loop checks for callback in task queue and pushes it to stack
// setTimeout callback popped from stack and executedc