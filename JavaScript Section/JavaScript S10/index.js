

//  include CH : 63,64,65 ;

/*
// CH 63 : Mouse Event

// EventListner = Listen for specific events to create interactive web pages 
//                events : clck ,mouseover,mouseout.
//                .addEventListner(event, callback)



const myBox = document.getElementById("myBox");

// function changeColor(event){
// event.target.style.backgroundColor="tomato";
// event.target.textContent ="Clicked 😁";
// }
// myBox.addEventListener("click",changeColor)

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Clicked 😁";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't Try 😎";
// })

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lemonchiffon";
//     event.target.textContent = "Clicked 😁";
// })

const mybtn = document.getElementById("mybtn");


// change the button
// mybtn.addEventListener("click",event =>{
//     event.target.style.backgroundColor="tomato";
// event.target.textContent ="Clicked 😁";
// });

// mybtn.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor="yellow";
// event.target.textContent ="Don't Try 😎"; 
// })

// mybtn.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor="lemonchiffon";
//     event.target.textContent ="Clicked 😁";
// })

mybtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
   myBox.textContent = "Clicked 😁";
});

mybtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't Try 😎";
})

mybtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lemonchiffon";
    myBox.textContent = "Clicked 😁";
})

*/
/*

// CH 64 : Key Events

// EventListner = Listen for specific events to create interactive web pages 
//                events : clck ,mouseover,mouseout.
//                .addEventListner(event, callback)

const mybox = document.getElementById("mybox");

const moveAmout = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event =>{
    mybox.textContent="😁";
    mybox.style.backgroundColor="tomato";
    console.log(`keydown = ${event.key}`);
})


document.addEventListener("keyup",event =>{
    mybox.textContent="😀";
    mybox.style.backgroundColor="lightblue";
    console.log(`keyup = ${event.key}`);
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {

        event.preventDefault();
        
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmout;
                break;
            case "ArrowDown":
                y += moveAmout;
                break;
            case "ArrowLeft":
                x -= moveAmout;
                break;
            case "ArrowRight":
                x += moveAmout;
                break;
        }
        console.log(`keydown = ${event.key}`);
        mybox.style.top=`${y}px`;
        mybox.style.left=`${x}px`;

    }
    // console.log(`keydown = ${event.key}`);
})


*/
/*
// CH 65 : Hide/Show HTML Element



const mybtn = document.getElementById("mybtn1");
const myimg = document.getElementById("myimg");


mybtn.addEventListener("click", event => {

    if (myimg.style.visibility === "hidden") {
        myimg.style.visibility = "visible";
        mybtn.textContent = "Hide";
    } else {
        myimg.style.visibility = "hidden";
        mybtn.textContent = "Show";
    }

})


*/
/*

// CH 66 : NodeList


// NodeList = Static collection of HTML elements by (id,class,elements)
//            Can be Created by using querySelectorAll()
//            Similarly to an Array, but no (map, filter, reduce)
//            NodeList won't update to automatically refelect changes.

// querySelectorAll again for updated list 


let buttons = document.querySelectorAll(".mybtns2");

console.log(buttons);

// ADD HTML/CSS PROPERTIES
// buttons.forEach(button => {
// button.style.backgroundColor="green";
// button.textContent+="😃"
// });


// CLICK EVENTLISTNER
// buttons.forEach(button => {
//     button.addEventListener("click",event =>{
//         event.target.style.backgroundColor="tomato"
//     })
// })


// MOUSEOVER + MOUSEOUT EVENTLISTNER
// buttons.forEach(button => {
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor="hsl(202, 100%, 40%)";
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor="hsl(202, 100%, 60%)";
//     })
// })

// ADD AN ELEMENT

const newbutton = document.createElement("button");

// STEP 2
newbutton.textContent ="Button 5";
newbutton.classList="mybtns2";

document.body.appendChild(newbutton);
// STEP 3

buttons=document.querySelectorAll(".mybtns2");
console.log(buttons);

// REMOVE AN ELEMENT
buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
        
        buttons =document.querySelectorAll(".mybtns2");
        console.log(buttons);
    })
})

*/

// CH 66 : ClassList

// classList = Element property in JavaScript used to intreast
//             with an element's list of classes (CSS Classes)for many elements
//             Allow you to make reusable classesfor many elements
//             across your webpage

// add() 
// remove()
// togale(Remove if present, add if not)
// replace(oldcalss, newClass)
// cosntains()

// const mybutton = document.getElementById("mybtn3");
// mybutton.classList.add("enabled");
// mybutton.classList.remove("enabled");

// mybutton.classList.add("hover");



// mybutton.addEventListener("mouseover", event =>{
//     event.target.classList.add("hover");
//     console.log("23")
// });

// mybutton.addEventListener("mouseout", event =>{
//     event.target.classList.remove("hover");
//     console.log("24")
// });

// -------------- EX 2 --------------------

// const myH1 =document.getElementById("myH1");

// myH1.classList.add("enabled")
// myH1.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "😀";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//         console.log("24");
//     }
// });

// mybutton.classList.add("enabled");


// mybutton.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "😀";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//         console.log("24");
//     }
// });



// -------------- EX 3 --------------------

let mybtns4 = document.querySelectorAll(".mybtns4");

mybtns4.forEach(button => {
    button.classList.add("enabled");
});

mybtns4.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

mybtns4.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});


mybtns4.forEach(button => {
    button.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            // event.target.textContent += "😐";
            event.target.classList.replace("disabled", "enabled");
        }else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});





























