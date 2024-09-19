


/*

// CH 22 : Function 

// console.log(` hello`)

// function = A section of reusable code.
//            Declare code once , use wheneven you want
//            call function to execute that code      


function HBday(usename, age) {
    console.log(`happy birthday to you`);
    console.log(`happy birthday to you`);
    console.log(`happy birthday dear ${usename}`);
    console.log(`you are ${age} year old`);

}
// HBday("Raj Lodh", 21);
// HBday("Raj", 221);

function add(x, y) {
    let result = x + y;
    return result
}

function sub(x, y) {
    return x - y;
}


function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y
}

let ans = add(2, 4)
console.log(ans)


console.log(add(34, 66))


function isEven(number){
    number%2==0 ? console.log("Number is Even ") : console.log(" Number is Odd")
}

isEven(54);

function isvalidEmail(email){
    if(email.includes("@")){
        return true
    }else{
        return false;
    }
}

console.log(isvalidEmail("rajlodh@gmail.com"))


*/

/*

// CH 23 : Variable Scope  


// Variable Scope  = where a variable is recognized 
//                   and accessable (local vs gloabl)



let x = 1 ;  // gloable varaible   

function f1(){
let x =2                // if varaible name is same  it uses local variable first
console.log(x)
}

function f2(){
    let x =5;;
    let y =2 ;
    console.log(x)
    }


f1();
f2();




*/

/*

// CH : 25 Array & Array Methods

// array = avariable like structure that can hold 
//          more then one value



let fruits =[ "Apple","Orange","Banana"];

console.log(fruits);
console.log(fruits[0]); // element at 0th index
console.log(fruits[1]);
console.log(fruits[2]);



fruits[0]= "Coconut";   // assigning string at 0th index 
//console.log(fruits[0]);
fruits[1]="Mango"; 

console.log(fruits[1]);

fruits.push("Kiwi");  // Adding Element at last index
//console.log(fruits);
fruits.pop();           // Removing Element from last Index
console.log(fruits); 


fruits.unshift("Grapes")   // Adding Element at the Bigning of Array;
//console.log(fruits);

fruits.shift()   // Removing Element from the Bigning of Array;
//console.log(fruits);

let numoffrunits = fruits.length;
console.log(numoffrunits);


let indexoffrunit1 = fruits.indexOf("Banana");
console.log(indexoffrunit1);

let indexoffrunit2 = fruits.indexOf("Apple");   // if not found return -1
console.log(indexoffrunit2);  


let fruits2 =[ "Apple","Orange","Banana"];
for(let i=0;i<fruits2.length; i++){
    console.log(fruits2[i]);
}

for(let i = fruits2.length-1;i>=0;i--){
    console.log(fruits2[i]);
}

for(let fruit in fruits2 ){
    console.log(fruit)   // in gives index of array 
}
fruits2.sort()           // sort the array by Alphabetical Order
fruits2.reverse()        // Reverse the order in array

fruits2.sort().reverse()    // Sort the array & reverse the sorted array

for(let fruit of fruits2 ){
    console.log(fruit)  // of gives elements of array
}




*/

/*

// CH : 26 Spread Operator = ...allows an iterable such as an 
//                           array or string to be expanded 
//                           into seperate elements
//                           (unpacks the elements)



let numbers =[1,2,3,4,5];

console.log(numbers);           // Array of number
console.log(...numbers);        // transfrom array to a individual integer


let max =Math.max(...numbers)
console.log(max);


let fullname ="Raj Lodh"

console.log(fullname);
console.log(...fullname);

let namemod = [...fullname].join("-");
console.log(namemod);



let fruits3 =[ "Apple","Orange","Banana"];
let vegitable =["Carrots","Potato","Onion"]

let newFruits=[...fruits3] ;
// console.log(fruits3)
console.log(newFruits)


let f2 =[fruits3,vegitable,"milk"];  // show 2 array different & element
console.log(f2);


let foods = [...fruits3,...vegitable,"milk","juice"]; 
// ... operator can be use to combine array & simultenously append elements to array

console.log(foods)


*/

/*

// CH 27 : ...rest Parameter

// rest parameter = (...rest) allow a function work with a variable
//                  number of arguments by building them into an array

//                spread = expand an array in seperate elements 
//                  rest = bundles seperate elements into an array 



function fridge(...foods){
    console.log(foods);
}

function getfoods(...foods){
    return foods;
}

const food1 ="Samosa";
const food2 ="Burger";
const food3 ="sushi";
const food4 ="Pizza";

// fridge(food1,food2,food3,food4);
const foods =getfoods(food1,food2,food3,food4);
console.log(foods)

function sum (...numbers3){

    let result=0;
    for (let number of numbers3){
        result += number;
    }
    return result

}
const total = sum(1,2,3,4,4);
console.log(`Your tota; is ${total}$`)

function combname(...string){
    return string.join(" ")
}


const fullname = combname("Mr.", "Raj" , "Lodh") 
console.log(fullname);




// let para = " the day when moon blooms in full bright to light the sky "

// function modpara(){

//    while (para.trim().indexOf(" ")>=1){
//     para.trim().join("")
//    }
// }

// console.log(para.trim().indexOf(" "))



*/


