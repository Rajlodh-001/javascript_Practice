
// include CH 56 ,57 ;

/*
// CH 56 : SYNC ASYNC

// Synchronous = Executes line by line consecutively in a sequential manner
//                code that waits for an operation to complite

// Asynchronous = Allows multiple operation to be performed concurrently without waitaing 
//                Doesn't block the execution flow and allows the program to continue 
//                (I/O operation ,network request, fetching Data)
//                Handled With CallBacks, promises, Async/Await


function func1(CallBack) {
    setTimeout(() => {console.log("Task 1");CallBack()}, 3000)
}


function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4 ");
}


func1(func2);
*/

/*
// CH 57 : Error

// 
// Error = An Object That is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try      {...} = Enclose code that might potentially cause an error
// Catch    {...} = catch and handle any thrown Errors from try { }
// finally  {...} = (optional) Always executes. used mostly for clean up
//                 ex. close file, close connection, release resources 


// Some Error
// NETWORK ERRORS
// PROMISE REJUCTION
// SECURITY ERRORS


try {
    // NETWORK ERRORS
    // PROMISE REJUCTION
    // SECURITY ERRORS
}

catch (error) {
    console.error(error)
}

finally {
    // CLOSE FILES
    // CLOSE CONNECTION
    // REALEASE RESOURCES
}


// try{
// console.log(x);

// }
// catch(error){
// // console.log(error)
// console.error(error)
// }
// finally{
// // CLOSE FILES
// // CLOSE CONNECTION
// // REALEASE RESOURCES
// console.log("This Always Execute ..")
// }

// console.log("you have reach the end !")


try {
    const dividend = Number(9);
    const divisor = Number("7");

    if (divisor == 0 ) {
        throw new Error("you Can't divide by zero")
    }
    if(isNaN(dividend)||isNaN(divisor)){
        throw new Error ("Value must be a number")
    }
    const result = dividend / divisor;
    console.log(result);
}
catch (error) {
    console.error(error);
}

console.log("end")



*/
















// satisfies