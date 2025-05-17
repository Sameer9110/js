//  const mySym = Symbol("key1") 


// const jsuser={
//     name: "sameer",
//     age:19,
//     location: "gaya",
//     //  there is two way to access name that is using jsuser.name or jsuser["name"]
//     [mySym]: "mykey1" 


// }
// console.log(jsuser[mySym]);
// // Object.freeze(jsuser)  it will not let me change any value of the object
// jsuser.greeting=function(){
//     console.log("hi sameer");   
// }
// jsuser.greeting2=function(){
//     console.log(`hello js user,${this.name}`);   
// }

// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());

// // ********************part2***********************

// // const tinderuser= new object()  singelton object
const tinderuser2= {} 
//  non singelton object

tinderuser2.id= "123gg"
tinderuser2.name="sameer"
tinderuser2.isloggedin= false

// console.log(tinderuser2);

const regularuser={
    email:"someone",
    fullname: {
        userfullname:{
                firstname:"sameer",
                lastname:"ranjan"
    }

    }
}
console.log(regularuser.fullname.userfullname.firstname);
const obj1={1: "a" , 2: "b"}
const obj2={3: "a" , 4: "b"}
const obj3={5: "a" , 6: "b"}

const obj4={ obj1,obj2,obj3}
const obj5=Object.assign({}, obj1,obj2,obj3)

const obj6= { ...obj1,...obj2,...obj3}  // best one to use
console.log(obj4);
console.log(obj5);
console.log(obj6);

console.log(Object.keys(tinderuser2));
console.log(Object.values(tinderuser2));
console.log(Object.entries(tinderuser2));
console.log(tinderuser2.hasOwnProperty('isloggedin'));





