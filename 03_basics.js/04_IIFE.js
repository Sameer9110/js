 // immediately invoked function expression (iife)

 (function chai(){
    console.log(`DB CONNECTED`);
    
 } )();  // here a semicolon is used to end the function otherwise an error will occur


 (function chaicode(){
    console.log(`DB CONNECTED 2`);
    
 } )();

 ( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
 } )("sameer")

//   ()() // one paranthesis for the function and the other one is for the execution
