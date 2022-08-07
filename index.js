//var vs let vs const
//Scope

//A scope is a certain region of program where a defined variable exists and can be recognised.
//Global scope, block scope, functional scope

//Global scope
// var a = 5;  //Var - is functional scope and let and const - are block scope.

// console.log(a);

//-------------------------------------------//

// Q-Variable Shadowing

function test() {
    let a = "Hello"

    if(true) {
        let a = "Hi" //This 'a' will shadow the a = "Hello"
        console.log(a)
    }
    console.log(a)
} 
test()

//Declaration and Initialization

//Var can be re-declared in the same scope.
//let and const cannot be redeclared in the same scope.

//Const cannot be declared without initialization.
//var and let can be updated but const cannt be updated. if done will give (Assignnment to constant variable) error.



// function Hoisting() {

//     console.log(a,b,c)

//     const c = 30;
//     let b = 20;   //It is hoisted but not like const. It will be hosted in temporal dead zone.Will give error. (Cannot access b before initialization)
//     var a = 10;    //
// }

// Hoisting();


//Hoisting - During the creating phase javascript egine moves your variables and function declarations to the top of your code.
//Temporal dead zone - is the term to describe the state where variables are in the scope but are not yet declared.