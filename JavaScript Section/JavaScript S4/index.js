/*

//  CH 30 : callback()

//  callback = a Function that is passed as an argument
//              to another function

//              used to handle asynchronous Operation : 
//              1. Reading a File
//              2. Network request
//              3. Interactiong with DataBase

//              "Hay, When you're Done , call this next."
// 

//   ------------- P1
  
hello();
goodbye();

function hello(){
     console.log("hello!");
}

function hello(){
    setTimeout(function(){
        console.log("hello !");
    },1000);
}

function goodbye(){
    console.log("Goodbye !");
}



// for EG --XX--
//hello(goodbye());  // if function passed with parenthiies function is called symultenously  
//                   function_name(callback_function_name())  <--- wrong
// for EG --XX--     End


//   ------------- P2
// hello(wait);     //  function_name(callback_function_name)  <--- Right


function hello(callback){
    console.log("hello!");
    callback();
}

function wait(){
    console.log("wait !!")
}

function leave(){
    console.log("Leave !!")
}
function goodbye(){
    console.log("Goodbye !");
}


//  ------------- P3
sum(displaypage,24,76)


function sum(callback,x,y){
    let result =x+y;
    callback(result);  // passing argument to to callback function inthis case displayresult
}


function displyresult(result){
    console.log(result);

}

function displaypage(result){
    document.getElementById("myh1").textContent=result;
}


*/


/*

// CH 31 : ForEach()


// forEach() = Method to iterate over the elements
//             of array and apply a specified function 
//             (callback) to each element

//              array.forEach(callback)


// array_name.forEach(function_name)

// function function_name(element,index,array){
    // array[index]=element*2;
// }


//   ------------- P1
let number = [1,2,3,4,5];




// number.forEach(triple);
// number.forEach(triple);
// number.forEach(squre);
number.forEach(cube);




number.forEach(display);

function double(element,index,array){
    array[index]=element*2;
}

function triple(element,index,array){
    array[index]=element*3;
}

function squre(element,index,array){
    array[index]=Math.pow(element,2);
}

function cube(element,index,array){
    array[index]=Math.pow(element,3);
}

function display(element){
    console.log(element)
}


//   ------------- P2

let fruits = ["mango","apple","coconut","orange","grape"]

fruits.forEach(Captilize);
fruits.forEach(displayfruit);

function upperCase(element,index,array){

    array[index]= element.toUpperCase();

}

function Captilize(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element
    .slice(1);
}


function displayfruit(element){
console.log(element);
}

*/


/*


//  CH 31 : map()

// .map() = accept a callback and applies that function
//          to each elements of an array ,then return a new array


//   ------------- P1

const number = [1,2,3,4,5]

const squares= number.map(square);

console.log(squares)

function square(element){
    return Math.pow(element,2)
}


const cubes = number.map(cube);

console.log(cubes)

function cube(element){
    return Math.pow(element,3)
}

const student = ["raj","vinay","yesh","vicky","adi"];
const studentUC = student.map(upperCase)


console.log(studentUC)

function upperCase(element){
    return element.toUpperCase();
}

//   ------------- P2

const dates =["2024-1-10","2025-2-20","2026-3-30"];

const formatedDates =dates.map(formatdate)

console.log(formatedDates)




function formatdate(element){
const parts=element.split("-");
return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


*/
/*

//  CH 33 : filter()

// .filter = create a new array by filtering 
//           out elements

//   ------------- P1


let number =[1,2,3,4,5,6,7,8,9,10]


let evenNums =number.filter(isEven);
console.log(evenNums)

function isEven(element){
    return element %2 === 0 ;
}

//   ------------- P2

const ages =[12,17,15,78,19,23,26,17,14,16];

const agefilt =ages.filter(isAdult);

console.log(agefilt);

function isAdult (element){

    return element<17
}



const agechild =ages.filter(isChild);

console.log(agechild);

function isChild (element){

    return element<15
}

//   ------------- P3

const WORDS =["APPLE","oRANGE","BANANA", "KIWI","coconut"];

filshortword = WORDS.filter(getSWord)
console.log(filshortword)
function getSWord(element){
    return element.length <6;
}



*/
/*

//  CH 33 : filter()

// .reduce = reduce the element of an array 
//           to a single vlaue

//   ------------- P1

const price = [12,4,32,53,12,78,19,62,31];

const total = price.reduce(sum);

console.log(`your total is ${total.toFixed(2)}$`);

function sum(accumulator,element){
    return accumulator+element
}

//   ------------- P2

const grades =[78,97,56,87,87,34];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);


console.log(maximum)
console.log(minimum)

function getMax(acc,element){
    return Math.max(acc,element)
}

function getMin(acc,element){
    return Math.min(acc,element)
}

*/
/*

//  CH 34 : function Exression

// function declaration = define a resuable block of code
//                        that perform a specific task  

//  function expression = a way to define function as 
//                        values or variable

//      UseCases 
//  1.Callbacks in asynchronous Operation 
//  2.Higher-order Function
//  3.Closure
//  4.Event Listners



//   ------------- P1

const hello=function(){
    console.log("Hello")
}

hello()

// setTimeout(callback,3000)  example of function expression 

// setTimeout(hello,3000)   // version 1

// setTimeout(function(){console.log("time interval") },3000)

//   ------------- P2

const number=[1,2,3,4,5,6,7];



sqnumV1 = number.map(square);
function square(element){
    return Math.pow(element,2)
}
console.log(sqnumV1);


// same as above function
const sqnumV2 = number.map(function(element){
    return Math.pow(element,2)
});


console.log(sqnumV2);



const cube =number.map(function(element){
    return Math.pow(element,3)
})
console.log(cube)



//   ------------- P3

const evenNums = number.filter(function(element){return element % 2 == 0})
console.log(evenNums)

const oddNums = number.filter(function(element){return element % 2 !== 0})
console.log(oddNums)


//   ------------- P4


const total = number.reduce(function(accumulator,element){return accumulator+element})
console.log(total)


*/



//  CH 35 : Arrow Function 

// Arrow Function = a consise way to write function expressions
//                  good for simple function that you use only once
//                  (parameter) => Some Code

// Syntax for single Statement
// (Arguments) => Statement 

// Syntax for Multiple Statements
// (Arguments) => {Statements Statements} 

//   ------------- P1

function hellov1(){
    console.log("hello as a Normal function");
}
hellov1();

const hellov2 = function(){
   console.log("hello as Function Expression");
}
hellov2();


const hellov3 = () => console.log("hello as Arrow Function")
hellov3();


const greet = (name) => console.log(`Hello ${name}`);

greet("Raj Lodh")


//   ------------- P2

const studentinfo = (studentname,studentrollno) => { console.log(`Student Name : ${studentname}`)
    console.log(`Student RollNo : ${studentrollno}`)
}

studentinfo("Raj Lodh",620);

// Arrow Function for setTimeout()

// setTimeout(()=> console.log("This is Arrow Function"),2000)


//   ------------- P2

// Arrow Function with .map()  .filter() .reduce()


const number =[1,2,3,4,5,6,7,8,9,10];

const squre =number.map((element)=> Math.pow(element,2));
console.log(squre)

const isEven =number.filter((element) => element>5)
console.log(isEven)

const total = number.reduce((accumulator,element)=>  accumulator+element)
console.log(total);














