/*
ch 1 Introduction to print statements

console.log(`Hello`)
console.log(`i like Pizaa`)
window.alert(`This Is an Alert`)

document.getElementById("myh1").textContent=`Hello`;

document.getElementById("myp").textContent=`i like JavaScript`;


ch 1 Introduction to print statements Ends
-----------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---------------------
*/

/*
ch 2 Variables Datatypes 

// variable = acontainer that store value.
// 1. let a ; declaration 
// 2. a=100;   Assignment
// 3. x=100;  declaration & Assignment


let x;
x=200;

let age =21;
let price = 25000;
let cgpa = 8;
let email="rajlodh123@gmail.com"
let online= true;


console.log(x);
console.log(age);
console.log(cgpa);
console.log(`you Are ${age} years old `);
console.log(`The price of the product is ${price}`)
console.log(`youe email is ${email}`)

ch 2 Variables Datatypes Ends
----------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----------------------
*/


/*
Ch3 Arithematic Operator

// arithematic operator = operands (value,variable,etc)
// operator (+ - * % / )
// ex leat a = 5+8



let student = 30;
student=student+1;
student=student*2;
student=student-3;
student=student/2;
student=student**2;


// augmented assignmetn operator
student*=2;
student-=3;
student/=2;

// increment decrement operator
student++;
student--;



console.log(student)



// operator Precedence
// 1.parenthtsis ()
// 2.exponents
// 3.multiplication Devision & modulo  -->  from left to righ  
// 4.addition substraction




let Eq1 = 1 +2*3+4**2;

console.log(Eq1)
// solving steps
// 

// S1. 4**2=16
// S2. 2*3=6
// S3. 1+6=7
// S4. 7+16=23
// Eval    Eq1 =23

// 

let Eq2=6/2**(2+5);

// 
// S1. (2+5) =7
// S2. 2**7 = 128
// S3. 6/128 =0.046875
// S4.

// 
console.log(Eq2)

Ch3 Arithematic Operator End
-------------------XXXXXXXXXXXXXXXXXXXXXXXXX--------------------------

*/

// Ch 4 Accepting User  Input

/*
// Using window Prompt Method

// let useraname1 ;
// useraname1 = window.prompt("UserName : ");
// console.log(useraname1);

// Using Form Method
let username;
document.getElementById("mysubmit").onclick = function(){
    username=document.getElementById("mytext").value;
    
    document.getElementById("myh1").textContent=`Hello ${username}`;
    console.log(username);
}

*/

// CH5 : TypeCasting

// type Conversion = change the datatype of vlaue to another
//                    ( String , number , boolean)



// let age =window.prompt("How old are you?")

// console.log("Input Vlaue");
// console.log(age);
// age+=1;
// console.log("Before Type Conversion");
// console.log(age,typeof age);
// age=Number(age);
// age+=1;
// console.log("After Type Conversion")
// console.log(age);
// console.log(age,typeof age);




// let x ="Pizza";
// let y ="Pizza";
// let z ="Pizza";

// let x ="0";
// let y ="0";
// let z ="0";

// let x ="";
// let y ="";
// let z ="";

// let x ;
// let y ;
// let z ;


// x=Number(x);
// console.log(x,typeof x);

// y=String(y);
// console.log(y,typeof y);

// z=Boolean(z);
// console.log(z,typeof z);


// let pi =3.14159;
// pi=420.23;



const  pi =3.14159;
let radius ;
let circumference ;

435

// radius = window.prompt("Enter Radius :");
document.getElementById("submit").onclick=function(){
    radius=document.getElementById("in").value;
    radius=Number(radius);
    circumference = 2*pi*radius;
    console.log(circumference);
    document.getElementById("h1m").textContent=("The circumference of circle is : " +circumference)
}





// This is an comment

/**
 This 
 is
 a 
 multi line 
 comment 
 */