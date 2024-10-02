







// include  CH : 59,60,61,62,

/*

// CH 59: What is DOM ?

// DOM = DOCUMENT OBJECT MODEL  
//       Object{} that reprensent the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document ,
//       and structure all the elements in tree-like representation.    
//       JAvascript can access the DOM to dynamically
//       change yhe contant, structure, and style of a web page.
//
//




const username ="Raj Lodh"
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent+=username==""? `Guest`: username


*/
/*

// CH 60 : Element Selector

// element selector = methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM (Document Object Model)
// 
// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsByClassName()         // HTML COLLECTION
// 3. document.getElementsByTagName()           // HTML COLLECTION
// 4. document.querySelector()                  // ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST



// 1. document.getElementById()  

const myHeading =document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

// console.log(myHeading);



// 2. document.getElementsByClassName()

const fruits = document.getElementsByClassName("fruits") ;
 
Array.from(fruits).forEach(fruits =>{
    fruits.style.backgroundColor = "orange"
})



// 3. document.getElementsByTagName() 

const h4Elements =document.getElementsByTagName("h4");
const liElements =document.getElementsByTagName("li");
// h4Elements[1].style.backgroundColor="yellow";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor="yellow";
}

// for(let liElement of liElements){
//     liElement.style.backgroundColor="lightblue";
// }

Array.from(liElements).forEach(liElement =>{
    liElement.style.backgroundColor="lightblue";
} );


// 4. document.querySelector()

const element =document.querySelector(".fruits"); // only first elements
element.style.backgroundColor = "lightblue";


const foods =document.querySelectorAll("li")

foods[1].style.backgroundColor="red";

*/
/*

// CH 61 : DOM Navagation

// DOM Navagation = The proces of navagation through the structure 
//                  of an HTML document using JAvaScript

// .firstElementChild
// .lastElementChild
// .nextElementSiblings
// .priviousElementSiblings
// .parentElement
// .children
// 


// ---------- .firstElementChild --------------

// const element1 = document.getElementById("fruits");

// const firstChild = element1.firstElementChild;
// firstChild.style.background = "yellow";



// To select all the firstchildren of all matching elements

// const  ulElementsf =document.querySelectorAll("ul");
// ulElementsf.forEach(ulElement => {
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// });



// ---------- .lastElementChild --------------

// const elementLast1 = document.getElementById("fruits");

// const lastChild = elementLast1.lastElementChild;
// lastChild.style.background = "purple";

// To select all the lastchildren of all matching elements

// const  ulElementsf =document.querySelectorAll("ul");
// ulElementsf.forEach(ulElement => {
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "yellow";
// });


// ---------- .nextElementSiblings --------------

// const elementNext1 = document.getElementById("apple");
// const nextSibling1 =elementNext1.nextElementSibling;
// nextSibling1.style.backgroundColor="lightblue";


// // select all the element in next UL list 
// const elementNext2 = document.getElementById("fruits");
// const nextSibling2 =elementNext2.nextElementSibling;
// nextSibling2.style.backgroundColor="lightblue";


// ---------- .priviousElementSiblings --------------

const elementPrev1 = document.getElementById("orange");
console.log(elementPrev1);
const prevSibling1 = elementPrev1.previousElementSibling;
prevSibling1.style.backgroundColor="lightblue";



// ---------- .parentElement --------------

const elementPrnt1 =document.getElementById("carrots");
const Parent1=elementPrnt1.parentElement;
Parent1.style.backgroundColor="yellow";



// ---------- .children --------------

const elementchld1 =document.getElementById("desserts");
const children1 =elementchld1.children;
// return HTml Collection
// don't have array methods of oqn

 children1[1].style.backgroundColor="yellow"


// Array.from(children1).forEach(child =>{
//     child.style.backgroundColor="yellow"
// })



*/

/*
// CH 62 : ADD/ Change HTML Element



// <!-- Example : 1 --------------  -->

//  STEP 1 : CREATE THE ELEMENT

const newH1 = document.createElement("h1");


//  STEP 2 : ADD ATTRIBUTES/PROPERTIES


newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "lightblue";
newH1.style.textAlign = "center";





//  STEP 3 : APPEND ELEMENT TO DOM


// Adding element before and after
document.body.append(newH1);
// document.body.prepend(newH1);

// Adding element before and after paragraph inside a box
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2);


// <!-- Example : 2 --------------  -->
// const boxes =document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2]);

// <!-- Example : 1 cont.. --------------  -->


//  STEP xx : REMOVE HTML ELEMENT

// document.getElementById("box1").removeChild(newH1);

*/

// -- Example : 2 OL  --------------  >>>

//  STEP 1 : CREATE THE ELEMENT
const newListItems =document.createElement("li");


//  STEP 2 : ADD ATTRIBUTES/PROPERTIES
newListItems.textContent = "coconut";
newListItems.id="coconut";
newListItems.style.fontWeight="bold";
newListItems.style.backgroundColor="lightgreen";




//  STEP 3 : APPEND ELEMENT TO DOM


// with id
// document.getElementById("fruits").append(newListItems);
// document.getElementById("fruits").prepend(newListItems);


// const orange =document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItems,orange)

// without id
const listItems =document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItems,listItems[2]);


//  STEP xx : REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItems);




// hsa