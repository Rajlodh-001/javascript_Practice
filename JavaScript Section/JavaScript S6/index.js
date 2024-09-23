

// CH 45,46,47,48,49,50,51,52 ...

/*

// CH 45 :Destructureing

// destructuring = extrct values from srrays and objects ,
//                  then assign them to variable in a convinent way
//                 [] = to perform array destructruing
//                 {} = to perform object destructuring

// 

// ----------- EXAMPLE 1 -----------
// Sqap The Value of two Variable

let a = 1;
let b = 2;

[a, b] = [b, a]     // swaped

// console.log(a);
// console.log(b)


// ----------- EXAMPLE 2 -----------
// Awap 2 elements in an array

const colors1 = ["red","Green ","blue","white","black"];

[colors1[3],colors1[4]]=[colors1[4],colors1[3]];

// console.log(colors1);

// ----------- EXAMPLE 3 -----------
// Awap 2 elements in an array

const colors2 = ["red","Green ","blue","white","black"];


const [firstColors2 , secondcolors2,thirdcolors2, ...extracolor] =colors2


// console.log(firstColors2);
// console.log(secondcolors2);
// console.log(thirdcolors2);
// console.log(extracolor);


// ----------- EXAMPLE 4 -----------
// Extract values from object

const person1 = {
    firstName : "Raj" ,
    lastName : "Lodh" ,
    age : 20 ,
    job : "IT"


}
const person2 = {
    firstName : "saish" ,
    lastName : "desai" ,
    age : 20 ,
    // job : "Accountant"


}



// const {firstName,lastName,age,job} =person1; // comented
const {firstName,lastName,age,job="UnEmployed"} =person2; // if element not found we can set default value

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log();
console.log();

// ----------- EXAMPLE 5 -----------
// Destructurre in function parameter

const person3 = {
    firstName : "Raj" ,
    lastName : "Lodh" ,
    age : 20 ,
    job : "IT"


}
const person4 = {
    firstName : "saish" ,
    lastName : "desai" ,
    age : 20 ,
    


}

function displayperson({firstName,lastName,age,job = "unemployed"}){
console.log(`name : ${firstName} ${lastName}`);
console.log(`age : ${age}`);
console.log(`Age  : ${age}`)
console.log(`Job  : ${job}`)
}

displayperson(person3);
displayperson(person4); // job will Show unemployed

*/
/*

// CH 45 : Nested Object 

// nested object = objects inside of other object
//                 Allows you to represent more complex data structures
//                 Child object is enclosed by a parent Object
//                 
//                 Person { Adderess{}, ContactInfo{} }
//                 Shoppingcart { Keyboard{}, mouse{}, Monitor{} }


// ----------- EXAMPLE 1 -----------
const person1 ={
    fullName: "Raj Lodh",
    age : 20,
    isStudent : false,
    hobbies : ["sportes","photography","electroics"],
    address :{
        street : "Manpada Rd.",
        city : "Mumbai",
        country: "india",
        roomno : 506
    }
}


console.log(person1.fullName);           // ' . ' -> property Accesser
// console.log(person1.age);
console.log(person1.address);
console.log(person1.hobbies[1]);

// console.log(person1.address.country);
// console.log(person1.isStudent);


for(const property in person1.address)
    console.log(person1.address[property]);


// ----------- EXAMPLE 2 -----------

class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}



class Address {
    constructor(street, city, countary) {
        this.street = street;
        this.city = city;
        this.countary = countary;

    }
}



const person2 = new Person("Raj Lodh",21,"Manpada Rd.","Mumbai","India");

const person3 = new Person("Adi Singh",20,"Manpada Rd.","UP","India");


console.log(person2.name);
console.log(person2.age);
console.log(person2.address.countary);

*/
/*


// CH 47 : Array of Object

// Array of Object 

const fruits = [{name: "apple",color : "red",calories: 95},
                {name: "orange",color : "orange",calories: 45},
                {name: "cocnut",color : "White",calories: 55},  
                {name: "Grapes",color : "Green",calories: 55}
            ]



console.log(fruits[2].name)
console.log(fruits[2].calories)

// console.log(fruits);
fruits.pop();
// console.log(fruits);
fruits.push({name: "kiwi",color : "Green",calories: 52})
console.log(fruits)

// fruits.splice(2,3);
console.log(fruits)


// ---------- ForEach () ---------- 

// fruits.forEach(fruit => console.log(fruit.name));

// ---------- Map () ---------- 

const fruitname = fruits.map(fruit => fruit.name);
const fruitcolor = fruits.map(fruit => fruit.color);
console.log(fruitname);
console.log(fruitcolor);


// ---------- Filter () ---------- 
const whiteFruit = fruits.filter(fruit => fruit.color==="white");

console.log(whiteFruit);

const lowcalories = fruits.filter(fruit => fruit.calories<=80);

console.log(lowcalories);



const lowCalFruit = lowcalories.map(fruit => fruit.name);
console.log(lowCalFruit);


// ---------- reduce () ---------- 


const maxfruits = fruits.reduce((max,fruit) => fruit.calories>max.calories ? fruit : max);
//                 accumulator ---|   |-- element 
console.log(maxfruits)



*/

/*

// CH 48 : sort

// sort() = method used to sort elements of an array in place.
//          sorts elements as strings in lecicogoraphic order , alphabeticaly
//          lexicographic = (alphabate + number + symbols) as a Strings;

let fruits2 = ["pineapple","coconut" , "kiwi" , "apple" ,"orange" ]
fruits2.sort()
console.log(fruits2);


let number = [4,8,2,3,7,6,1,10,5,9]
number.sort()
console.log(number);


let number1 = [4,8,2,3,7,6,1,10,5,9]
number1.sort((a,b) => a-b); //compare and sort -ve if a < b : +ve if a < b //asscend
console.log(number1);



let number2 = [4,8,2,3,7,6,1,10,5,9]
number2.sort((a,b) => b-a); // reverse the order || Decend
console.log(number2);


const people1 =[{name : "raj",age : 21 ,gpa: 8},
                {name : "adi",age : 20 ,gpa: 8},
                {name : "yesh",age : 24 ,gpa: 6},
                {name : "vinay",age : 21 ,gpa: 9}]


                // sorting using integer
// people1.sort((a,b) => a.age-b.age) //age in accend.orde

people1.sort((a,b) => b.age-a.age)  //age in decend.order

people1.sort((a,b) => a.gpa-b.gpa)   // gpa in accend order


// this is simple array 
// this can be sorted using simple sort function
const people2 = ["raj","adi","yesh","vinsy"] 
people2.sort() 
console.log(people2);


// this array of objects require 
// sort name using localeCompare() method list in asscend order
people1.sort((a,b) => a.name.localeCompare(b.name)) 



console.log(people1)

*/
/*
// CH 49 : random swap array Fisher-yetes algorithm

const cards1 = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log(cards1)

cards1.sort(()=> Math.random() -  0.5); //not efficient for large array
console.log(cards1)



const cards2 = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// Randomsuffling function using Fisher-yetes algorithm
function suffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];

    }
}
suffle(cards2);
console.log(cards2)


*/

// CH 50 : Dates 

// Date Objects = objects that contains value that represent date and time  
//                These date object can be changed and formatted 

//  Date(year. month, day, hour, mminutes, seconds, miliSeconds )


// const date =new Date(2024,0,2,2,3,4,5);

// const date =new Date("2024-01-02T12:00:00Z");


// const date =new Date(1700000000000);

// const date =new Date();


// const year = date.getFullYear();
// const month = date.getMonth();
// const weakdaynum = date.getDay();  // number of day
// const day = date.getDate();  // number of day

// const hour = date.getFullYear();
// const minutes = date.getMonth();
// const seconds = date.getFullYear();
// const miliSeconds = date.getMonth();

// console.log(date);
// console.log(year)
// console.log(month)
// console.log(weakdaynum)
// console.log(day)

// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(miliSeconds);







// const date =new Date();
// date.setFullYear(2025)
// date.setMonth(0);
// date.setDate(3);
// date.setHours(12)

// console.log(date);
// console.log();


// const date1 =new Date("2023-12-31");
// const date2 =new Date("2024-01-01");


// if (date2>date1){
//     console.log("happy New Year")
// }else{
//     console.log("Not a New Year");
// }

/*

// closure = A function defined inside another function ,
//           the inner function has access to the variables
//           and scope of the outer function .
//           Allows for private variable and state maintenence 
//           Used frequently in JS FrameWork: React, Vue, Angular



function outer() {
    let message = "Hello";
    function inner() {
        console.log(message)
    }
    inner();
}

// message ="goodbye"; // cannot modify the variable as it is outside the scope

outer();

function createcounter() {
    let count = 0; // initalise when created
    function increment() {  // return this function as a count 
        
        count++;
        console.log(`current count is : ${count}`)
    }
    function getcount(){
        return count;
    }

    return{increment,getcount} ;// return the count 
}

const counter = createcounter(); // creating counter object

counter.increment(); // count 1
counter.increment(); // count 2
counter.increment(); // count 3


// console.log(counter.count); // undefined as not accessable

console.log(counter.getcount()); // get method



// ----------- EXAMPLE 2 -----------
// Problem anyone can set the score 

let score =0;

function increaseScore(points){
    score +=points;
    console.log(`+${points}pts`)
    console.log(`current Score: ${score}pts`)
}

function decreaseScore(points){
    score -=points;
    console.log(`-${points}pts`)
    console.log(`current Score: ${score}pts`)
}

function getScore(points){   
    console.log()
    return score;
}

// increaseScore(5);
// increaseScore(10);
// decreaseScore(5);


// console.log(`The Final Score is ${score}`)


// ----------- EXAMPLE 2 -----------
// same program with closure

function createGame(){
    let score =0;

    function increaseScore(points){
        score +=points;
        console.log(`+${points}pts`)
        console.log(`current Score: ${score}pts`)
    }
    
    function decreaseScore(points){
        score -=points;
        console.log(`-${points}pts`)
        console.log(`current Score: ${score}pts`)
    }
    
    function getScore(points){   
        console.log()
        return score;
    }  

    return{increaseScore,decreaseScore,getScore}; // returning an object 
}

const game =createGame();

game.increaseScore(15)
game.increaseScore(5);
game.increaseScore(10);
game.decreaseScore(15);



console.log(`The Final Score is : ${game.getScore()} pts`);

*/

// CH 52 : setTimeout()

// setTimeout() = function in javaScript that allow you to schedule 
//               the execution of a function after an amount of time (milliseconds)
//               Times are approximate(varies based on the workload of the JS runtime env.) 

//       setTimeOut(callback,delay);



function sayHello(){
    console.log("hello")
}

setTimeout(sayHello,1500);


setTimeout(function sayHello(){console.log("function withing setTimeout")},2000);

// setTimeout(() => console.log("Arrow function"),2200);


const timeoutId1 = setTimeout(() => console.log("const Arrow function"),2500);


// clearTimeout(timeoutId1);


let timeoutId2 ;


function startTimer(){
    timeoutId2 =  setTimeout(() => console.log("Started"),2200)
}

function clearTimer(){
    clearTimeout(timeoutId2);
    console.log("Cleared")
}



















































