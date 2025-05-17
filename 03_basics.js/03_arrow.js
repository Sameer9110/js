//  const user={
//     username:"sameer",
//     price: 1000,

//     welcomemessage: function(){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this); //it prints the whole thing like the whole function for the two times first with the username as sameer then with the username sammy

        
//     }
//  }

//  user.welcomemessage()
//  user.username="sammy"
//  user.welcomemessage()
//   console.log(this); // gives {} as it is runnibng in the node environment

// function chai(){
//     console.log(this);
    
// }
// chai()


// const chai =function(){
//     let username ="sameer"
//     console.log(this.username);
    
// }
// const chai =function(){
//     let username ="sameer"
//     console.log(this.username); // will give undefined as when pnly this is used inh place of this.username , then{} will come

    
// }
// chai() // give output as undefined

//******************arrow */**************** */

// const addtwo=(num1, num2) => {
//     return num1+num2
// }
// const addtwo=(num1, num2) =>   num1+num2 // or like(num1 + num2)
//  when curly baraises are usedn then use return keywiord bu \t when noarmal parentheasis is used you do not need to use the return keyword
const addtwo=(num1, num2) =>  ({username:"sameer"})
console.log(addtwo(3,4));


