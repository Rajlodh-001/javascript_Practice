
/*
// CH 8: Math Finction 


console.log(Math.PI)
console.log(Math.E)


let xr=3.21;
let xf=3.99;
let xc=3.21;
let xt =2.2345;
let xrt =9;
let xlog=10;
let xsin=45;
let xabs=-435;
let xsign= -3.2;

let x =3;
let y = 2;
let z =6;

let ans;

ans= Math.round(xr)
ans= Math.floor(xf)  // round down 3.99 -> 3
ans= Math.ceil(xc)   // Round up    3.21 -> 4
ans= Math.trunc(xt)  // Eliminate Decimale 2.3  -> 2 
ans = Math.pow(x,y)  // 3^2 = 9
ans = Math.pow(y,x)  // 2^3 = 8
ans =Math.sqrt(xrt) 
ans = Math.log(xlog);
ans = Math.sin(xsin)    // radians in 0-360
ans = Math.cos(xsin)    // radians in 0-360
ans = Math.tan(xsin)    // radians in 0-360
ans = Math.abs(xabs)    // absolute Value   
ans = Math.sign(xsign)
// console.log(ans);

let max = Math.max(x,y,z)    // Max Value
let min = Math.min(x,y,z)    // Min Value


console.log(max);
console.log(min);


*/

// CH 10 IF Statements

// IF Statements = if a condition is true , execute some Code
//                  if not ,do Something else

/*
let age =101;

if(age>=18){  console.log(`You are  old enough your age : ${age}`)} else{ console.log(`you must be 18 currently your age is : ${age}`)}


let time=9

if(time<12){
    console.log("good Morning")
}else{console.log("good afterNoon")}

 
let isStudent =false;

if (isStudent){
    console.log("is student")
}else{
    console.log("not a Student")
}

let lage =25    ;
let haslicence =true;

if(lage>=16){
    console.log("Youare old enough to drive");
    if(haslicence){
        console.log("You have your a  Licence ")
    }else{
        console.log("You don't have a licence ")
    }
}else{
    console.log("You must be 16 + to have a Licence ");
}



*/


/*


// Ch 10:
const text= document.getElementById("input");
const btns= document.getElementById("btns");

const result= document.getElementById("result");
let age;

btns.onclick=function(){

    age=input.value;
    age=Number(age)


 if(age>=100){
    console.log("youare to old to vote")
    result.textContent=`youare to old to vote`
}
else if(age == 0){
    console.log("You cannot vote you are jus born")
    result.textContent=`You cannot vote you are jus born`
}
else if(age>=18){
    console.log("you old enough to vote")
    result.textContent=`you old enough to vote`
}
else if(age< 0){
    console.log(" Invalid Age age below 0 ")
    result.textContent=`Invalid Age age below 0 `
}

else{
    console.log("you must be 18+ to vote ")
    result.textContent=`you must be 18+ to vote `
}
}




*/

/*

// CH 11: Checked Property

// .checked =property that determines the checked stateof an HTML checkbox or radio Button


const mycheckbox =document.getElementById("mycheckbox");
const visabtn =document.getElementById("visabtn");
const mastercardbtn =document.getElementById("mastercardbtn");
const payPalbtn =document.getElementById("payPalbtn");
const mysubmit =document.getElementById("mysubmit");
const subresult =document.getElementById("subresult");
const paymentresult =document.getElementById("paymentresult");


mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`you are Suscribe `;
    }else{
        subresult.textContent=`you are Suscribe `;
    }
    if(visabtn.checked){
        paymentresult.textContent(`you are Payin vith Visa`)
    }else if(mastercardbtn.checked){
        paymentresult.textContent(`you are Payin vith MasteCard`)
    }

    else if(payPalbtn.checked){
        paymentresult.textContent(`you are Payin vith payPal`)
    }else{
        paymentresult.textContent(` No Payment Mode is selected`)
    }
}


*/


/*

// CH 12 : Ternery Operator

// ternary operator = ashortcut ot if{} and else {} statements
//                    helps to asign a variable based on a condition
//                   contition ? code_if_true  :  code_if_false



let age = 21;
let message1 = age>=18 ? "You are Adult ": "You are a not old enough "; 

console.log(message1);



let time = 16;
let greet = time < 12 ? "Good Morning" : "Good After Noon"
console.log(greet);

let isStudent = true;

let message2 = isStudent ? "you are Student " : " you are not a Student"
console.log(message2);

let purchaseAmount =125;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`Your total is ${purchaseAmount-purchaseAmount*(discount/100)}`);


*/

/*


// CH 12 : Switch Statements 

//  SWITCH = Efficient Replacement to many else if Statements


let day = 2;

switch (day) {
    case 1:
        console.log(" It is Monday");
        break;
    case 2:
        console.log(" It is Tuesday");
        break;
    case 3:
        console.log(" It is Wednesday");
        break;
    case 4:
        console.log(" It is Thursday");
        break;
    case 5:
        console.log(" It is Friday");
        break;
    case 6:
        console.log(" It is Saturday");
        break;
    case 7:
        console.log(" It is Sunday");
        break;
    default:
        console.log(`${day} is not a day  `);
        break;
}


let testscore = 92;
let grade;


// insted of passing a vlaue we are Evaluating th expression if the statement is true the block of code is executed 


switch (true) {

    case testscore >= 90:
        grade = "A"
        break;
    case testscore >= 80:
        grade = "B"
        break;
    case testscore >= 70:
        grade = "C"
        break;
    case testscore >= 60:
        grade = "D"
        break;
    default:
        grade = "F"
        break;

}
console.log(grade)




*/

/*

// CH : 13 String Method

let userName = "Raj jitendra Lodh "

console.log(userName.charAt(0));
console.log(userName.indexOf("L"))
console.log(userName.lastIndexOf("L"))

console.log(userName.length);

console.log(userName.trim())
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())

console.log(userName.startsWith("R"))
userName.startsWith("R")  ? console.log("String start with R") : console.log ("String donot contain Letter R ")
console.log(userName.includes(" ")? "username shoul not in clude ' ' ": "Perfect username");

console.log(userName.endsWith("R"))


console.log(userName.repeat(2))

console.log(userName.replace("a","A"))
console.log(userName.replaceAll("a","A"))
console.log(userName)
console.log()

let phoneNumber = "877-963-8416"

// phoneNumber = phoneNumber.replaceAll("-","");
phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber)

// String Slicing = creating a substring from a portion of another string
//                      string.slice(start,end)


const fullName ="Raj Lodh";


// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(4,8);

// let firstChar =fullName.slice(0,1);
// let lastChar = fullName.slice(-4);
// console.log(lastChar)


let firstName = fullName.slice(0,fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ")+1)

console.log(firstName)
console.log(lastName)

let email ="Rajlodh12345@gmail.com";
let usernameE = email.slice(0,email.indexOf("@"));
let extention = email.slice(email.indexOf("@")+1,email.indexOf("."));

console.log(usernameE);
console.log(extention);



*/


/*

//  CH 14 : Method Chaining 

// Method Chaning = calling one method after another
//                   in one condition line of code

// EX No method Chaining

let userName = window.prompt("Enter UserName : ");

userName = userName.trim();
let letter = userName.charAt(0);
letter =letter.toUpperCase();

let extrachar =userName.slice(1);
extrachar=extrachar.toLowerCase();

userName=letter+extrachar;
console.log(userName);



//  Ex Method Chaining 

let userName2 = window.prompt("Enter UserName : ");

userName2 =userName2.trim().charAt(0).toUpperCase() + userName2.trim().slice(1).toLowerCase()
console.log(userName2);



*/

/*


// CH 15 :  Logical Operator 

//  Logical Operator  =  used to combine or manipulate boolean values  
//                      ( True or False )

//                          AND = &&
//                           OR = ||
//                          NOT = !


const temp = -200;


// using Logical Operator  AND &&

if(temp >0 && temp <=30){
    console.log("Weather is Good !!! ")
}else{
    console.log("THe Weather is Bad ")
}


// using Logical Operator OR ||
if (temp <= 0 || temp > 30) {
    console.log("THe Weather is Bad ")
} else {
    console.log("Weather is Good !!! ")
}

// using Logical Operator NOT !
const issunny = true;

if (!issunny) {
    console.log("It is Cloudy")
} else {
    console.log("It is Sunny ")
}


*/

/*

// CH 16 : Strict Equallity Operator  ===

//    =   Assignment Operator
//   ==   Comparision Oprator ( Compare if value are equal )
//  ===  Strict Equality  oprator (Compare if Vlaue & datatype are equal )
//   !=  inequality Operator
//   !=  Strict Inequality operator



const PI = 3.14;

// console.log(PI==="3.14" ? " That is Pi ": "That is Not Pi") 

//   Program with Equlaity Operator

if (PI == "3.14") {
    console.log("That is Pi Equality Operator")
} else {
    console.log("That is Not Pi Equality Operator")
}

// Same Program With Strict Equality Operator 
if (PI === "3.14") {
    console.log("That is Pi With Strict Equality Operator ")
} else {
    console.log("That is Not Pi Strict Equality Operator")
}

//  CH  17 :  Strict InEquallity Operator  !==

//   Program with InEqulaity Operator

if (PI != "3.14") {
    console.log("That is Pi InEquality Operator")
} else {
    console.log("That is Not Pi InEquality Operator")
}

//   Program with InEqulaity Operator

if (PI !== "3.14") {
    console.log("That is Pi Strict InEquality Operator")
} else {
    console.log("That is Not Pi Strict inEquality Operator")
}


*/

/*

// CH 18 : WHILE LOOP

// While Loop  = repeat some code While some conditino is true 

let username = "";

if(username===""){
    console.log(`You didn't enter your Username`)
}else{
    console.log(`Your UserName is ${username} `)
}

while(username==="" || username ===null){
    username=window.prompt(`Enter UserName`);
}
console.log(`Your UserName is ${username} `)


let usernamedw ;
do{
    usernamedw=window.prompt(`Enter UserName`);
}while(usernamedw==="" || usernamedw ===null)
console.log(`Your UserName is ${usernamedw} `)


let loggedin = false;
let userNamew ;
let password ;

while(!loggedin){
    userNamew=window.prompt(`Enter Username`)
    password=window.prompt(`enter your password `)

    if(userNamew === "username" && password ==="password"){
        loggedin =true;
        console.log("Your Are Loggedin ")

    }else{
        console.log("Invalid Credential ! please Try")
    }

}


*/


/*



// CH 19 : DO WHILE LOOP

do{
    userNamew=window.prompt(`Enter Username`)
    password=window.prompt(`enter your password `)

    if(userNamew === "username" && password ==="password"){
        loggedin =true;
        console.log("Your Are Loggedin ")

    }else{
        console.log("Invalid Credential ! please Try")
    }

}while(!loggedin)

console.log("hello")

*/

/*
// Ch 20 : FOR LOOPS

// for loop = repeate some code a limited amount of time 


for(let i =1 ;i<=10;i++){
    console.log(`the value of i is ${i}`)
}

for(let i =1 ;i<=10;i+=2){
    console.log(`the value of i is ${i}`)
}

console.log("hello")
for(let i =10 ;i>=1;i--){
    console.log(`the value of i is ${i}`)
}

for(let i =0; i<=20;i++){

    if(i==13){
        continue;
    }else if (i==16){
        break;
    }else{
        console.log(i)
    }
    
}


*/


/*

// Ch 21 : Number Gussing Game


const minNum=50;
const maxNum=100;
const ans =Math.floor(Math.random()*(maxNum - minNum+1))+minNum;
console.log(ans)

let attmpts=0;

let guess ;
let running = true;


while(running){

guess =window.prompt(` Enter Number between ${minNum} - ${maxNum}`);
guess =Number(guess);
console.log(typeof guess,guess);

if(isNaN(guess)){
    window.alert(`Enter a Valid Number ${ guess} is Not a number`)
}else if (guess<minNum || guess>maxNum){
    window.alert(`Enter number between ${minNum} - ${maxNum} : your Number is ${guess}`)
}else{
    attmpts++;
    if (attmpts==10){
        break;
    }
    if(guess<ans){
        window.alert(` Too Low `)
        
    }else if(guess>ans){
        window.alert(`Too High `)
    }else{
        window.alert(`Your Guess ${guess} is correct Number of Attempt is : ${attmpts}`)
        running =false;
    }
}


}
console.log(ans)

*/


