

// JSON =  (JavaScript Object Notation) data-interchage format 
//         Used for exchanging data between a server and a web application 
//         JSON files {key:value} OR [value1, value2, value3]

//         JSON.stringify()=converts a JS object to a JSON string 
//         Json.parse()= convert a Json string to a JS object





// const names = ["RAJ", "RAJU", "VINAY", "YESH"];

// const jsonString =JSON.stringify(names);
// console.log(jsonString)


// const person = {
//     "name": "RAJ",
//     "age": 22,
//     "isEmployed": true,
//     "hobbies": ["games", "photography", "electronics"]
// };

// const jsonString =JSON.stringify(person);
// console.log(jsonString);


// const people = [
//     {
//         "name": "RAJ",
//         "age": 22,
//         "isEmployed": true
//     },
//     {
//         "name": "RAJU",
//         "age": 26,
//         "isEmployed": true
//     },
//     {
//         "name": "YESH",
//         "age": 24,
//         "isEmployed": false
//     },
//     {
//         "name": "VINAY",
//         "age": 20,
//         "isEmployed": false
//     }
// ];

// const jsonString = JSON.stringify(people);
// console.log(jsonString);





// const jsonNames = `["RAJ", "RAJU", "VINAY", "YESH"]`;


// const jsonPerson = `{
//     "name": "RAJ",
//     "age": 22,
//     "isEmployed": true,
//     "hobbies": ["games", "photography", "electronics"]
// }`;


// const jsonPeople = `[
//     {
//         "name": "RAJ",
//         "age": 22,
//         "isEmployed": true
//     },
//     {
//         "name": "RAJU",
//         "age": 26,
//         "isEmployed": true
//     },
//     {
//         "name": "YESH",
//         "age": 24,
//         "isEmployed": false
//     },
//     {
//         "name": "VINAY",
//         "age": 20,
//         "isEmployed": false
//     }
// ]`;


// const parsedData =JSON.parse(jsonPeople);

// console.log(parsedData)

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)))
.catch(error => console.error(error))



// fetch("people.json")
// .then(response => response.json())
// .then(values => values.forEach(value => console.log(value.isEmployed)))















