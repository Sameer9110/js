// function addtwonumber(num1,num2) {
//     console.log(num1+num2);
    
// }
function addtwonumber(num1,num2) {
    // let result = num1 + num2
  
    // return result

    return num1+num2
    
     
}
const result =addtwonumber(3,4)
console.log(("result:" , result));


function loginuser(username){
    return `${username} just logged in`
}
function loginuser(username){
    if(username=== undefined){  // or if(!username)  same thing
        console.log("plaease enter the username");
        return
    }
    return `${username} just logged in`
}
loginuser("sameer") // this only returned the value but not printed as we do not told to print hat is not used the console log
// console.log(loginuser("sameer")); // now it will be printed
// console.log(loginuser()); //undefined

function calculatecarprice(val1,val2,...num1){
    return num1
}
console.log(calculatecarprice(200,400,20000,100));

const user ={
    username:"sameer",
    price:200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject({
    username:"sam",
    price: 4000
})
 const mynewarray=[200,300,400,500]

 function returnsecondvalue(getarray){
    return getarray[1]
 }

 console.log(returnsecondvalue(mynewarray));
 console.log(returnsecondvalue([200,300,400,500]));
 