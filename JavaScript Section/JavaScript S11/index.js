

// CH Include 70,71,71



// CH : 70 CallBack 

// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous function.
//                 Use Promises + async/await t oaavoid Callback Hell
// 

// Synchronous function

/*
function task1(){
    console.log("Task 1 Complete")
}
function task2(){
    console.log("Task 2 Complete")
}
function task3(){
    console.log("Task 3 Complete")
}
function task4(){
    console.log("Task 4 Complete")
}

task1();
task2();
task3();
task4();

console.log("All Task Complete");
/*

// aynchronous function

/*
function task1(){

    setTimeout (() => {
        console.log("Task 1 Complete");
    },2000)
   
}
function task2(){
    setTimeout (() => {
        console.log("Task 2 Complete");
    },1000)
}
function task3(){
    setTimeout (() => {
        console.log("Task 3 Complete");
    },3000)
}
function task4(){
    setTimeout (() => {
        console.log("Task 4 Complete");
    },1500)
}

task1();
task2();
task3();
task4();

console.log("All Task Complete")

*/
/*

// Asunc with CallBack

function task1(callback){

    setTimeout (() => {
        console.log("Task 1 Complete");
        callback();
    },2000)
   
}
function task2(callback){
    setTimeout (() => {
        console.log("Task 2 Complete");
        callback();
    },1000)
}
function task3(callback){
    setTimeout (() => {
        console.log("Task 3 Complete");
        callback();
    },3000)
}
function task4(callback){
    setTimeout (() => {
        console.log("Task 4 Complete");
        callback();
    },1500)
}

task1(() => {
    task2(()=>{
        task3 (()=> {
            task4(()=>{
                console.log("All Task Complete");
            });
        });
    });
});
// task2();
// task3();
// task4();


*/

//CH : 71 Promise

// Promise = An Object that manages Asynchronous Operation. 
//           Wrap a Promise Object around {asynchronous code}
//           " I promise t oreturn a value "
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve , reject) => {asynchronous code})
// 




// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

/*
// With callback

function walkDog(callback){
    setTimeout(()=> {
        console.log("walk the dog complete")
        callback();
    },1500);
}
function cleanKitchen(callback){
    setTimeout(()=> {
        console.log("cleanKitchen complete")
        callback();
    },2500);
}
function tackOutTrash(callback){
    setTimeout(()=> {
        console.log("tack Out Trash complete")
        callback();
    },500);
}


walkDog(()=>{
    cleanKitchen(()=>{
        tackOutTrash(()=> {
            console.log("all Task Complete");
        });
    });
});

*/

/*

// with Promise

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("walk the dog complete");
        },1500);
    })
}
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("cleanKitchen complete")            
        },2500);
    })
    
}
function tackOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("tack Out Trash complete")
        },500);
    })
    
}


walkDog().then(value=> {console.log(value); return cleanKitchen()})
.then(value=> {console.log(value); return tackOutTrash()})
.then(value=>  {console.log(value); console.log( "All Task Complete")});

*/

/*

// with Promise reject

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {

            const dogwalked =true;

            if(dogwalked){
                resolve("walk the dog complete");
            }else{
                reject("you Don't walked the dog");
            }
            
        },1500);
    })
}
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {

            const kitchenclean = true;

            if(kitchenclean){
                resolve("cleanKitchen complete");
            }else{
                reject(" you don't Clean The kitchen");
            }
                        
        },2500);
    })
    
}
function tackOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {

            const  tackOutTrash = false;

            if(tackOutTrash){
                resolve("tack Out Trash complete");
            }else{
                reject(" you don't takout hte Trash");
            }
            
        },500);
    })
    
}


walkDog().then(value=> {console.log(value); return cleanKitchen()})
.then(value=> {console.log(value); return tackOutTrash()})
.then(value=>  {console.log(value); console.log( "All Task Complete")})
.catch(error =>console.error(error));


*/


// CH 72 : Async/Await

// Async / Await = Async =make a function return a promise
//                 Await = makes an async function wait for promise

//                 Allows you to write Asynchronous code in synchronous manner 
//                 Async doesn't have resolve or reject parameters
//                 Everything after Await is placed in an event queue

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if (dogwalked) {
                resolve("walk the dog complete");
            } else {
                reject("you Don't walked the dog");
            }

        }, 1500);
    })
}
function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenclean = true;

            if (kitchenclean) {
                resolve("cleanKitchen complete");
            } else {
                reject(" you don't Clean The kitchen");
            }

        }, 2500);
    })

}
function tackOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const tackOutTrash = false;

            if (tackOutTrash) {
                resolve("tack Out Trash complete");
            } else {
                reject(" you don't takout the Trash");
            }

        }, 500);
    })

}


// walkDog().then(value=> {console.log(value); return cleanKitchen()})
// .then(value=> {console.log(value); return tackOutTrash()})
// .then(value=>  {console.log(value); console.log( "All Task Complete")})
// .catch(error =>console.error(error));


async function dochores() {

    try {
        const walkDogresult = await walkDog();
        console.log(walkDogresult);
        const cleanKitchenresult = await cleanKitchen();
        console.log(cleanKitchenresult);

        const tackOutTrashresult = await tackOutTrash();
        console.log(tackOutTrashresult);

        console.log("All task finished");
    }
    catch (error) {
        console.error(error)
    }
}

dochores();







































