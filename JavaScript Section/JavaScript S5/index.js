



/*

CH :37 ,38,39,40,41,42,43,44 ------

// CH 37 : Object


// Object = A Collection of related Properties and/or methods
//          can represent real world objects (People , Product, Places)
//          object = { Key:value,
//                     function() }

// Methods      = are function belongs to Object
// Properties   = are Attributes of an object


// Object can't have Same Name


const person1 ={
    firstName : "Raj",
    lastName :"Lodh",
    age : 21,
    isStudent :false,

    sayHello: function() {console.log(`Hello Raj`)},
    eat: ()=> console.log("Eating...")
}
 
person1.sayHello();
person1.eat();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isStudent);


const person2 ={
    firstName : "Adi",
    lastName :"singh",
    age : 21,
    isStudent :true,
    sayHello: function () { console.log(`Hello Adi`)},
    eat: ()=> console.log("Eating...  Pizza")
}

person2.sayHello();
person2.eat();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isStudent);

*/
/*


// CH 38 : this

// this = reference the object Where THIS is Used
//        (the object depends on the immidate context)
//        person.name = this.name

// this keyWord does'nt work with Arrow Function ,it points towards Window Object



const person1 = {
    name : "Raj",
    favfood :"Pizza",
    sayhello : function () { console.log(`Hi I am ${this.name}`)},
    eat: function (){console.log(`${this.name} is eathing ${this.favfood} ...`)}
}

const person2 = {
    name : "Vinay",
    favfood :"Samosa",
    sayhello : function () { console.log(`Hi I am ${this.name}`)},
    eat: function (){console.log(`${this.name} is eathing ${this.favfood} ...`)}
}

person1.sayhello();
person1.eat();



person2.sayhello();
person2.eat();

*/
/*

// CH 39 : Constructor 

// constructor = special method for defining the
//               properties and Methods of Objects


// Making a Constructor Syntx
function CarExample(make_value,model_value,year_value,color_value){
    this.make  = make_value,
    this.model = model_value,
    this.year  = year_value,
    this.color = color_value
}
const carsyntx= new CarExample("make_data","model_data","year_data","color_data");

console.log(carsyntx.make)
console.log(carsyntx.model)
console.log(carsyntx.year)
console.log(carsyntx.color)

// ------XXXXX------

const carDemo={
    make:"Ford",
    model:"Mustang",
    color:"Yellow",
    drive: function (){console.log("140 KMph ") }
}

// Making a Constructor

function Car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive = function (){console.log(`You Are driving ${this.make} ${this.model} of Year ${this.year}`) }
}

const car1= new Car("Ford","Mustang",2024,"Yellow");

const car2= new Car("Tata","suffari",2024,"Brown");

const car3 = new Car("Mahindra" ,"xuv 700",2024,"black");

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
car1.drive();


console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
car2.drive();

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)
car3.drive();

*/
/*
// CH 40 : Classes

// Class = (ES6 feature) provides a more Structured and cleaner way to
//         work with object compared to traditional constructor function
//         ex. Static Keyword , encaplustion inharitance


class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`product : ${this.name}`)
    console.log(`price : ₹${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price +(this.price*salesTax)
    }
}

const salesTax=0.05

const product1 = new Product("Shirt " , 900)
const product2 = new Product("Pants " , 1200)


product1.displayProduct()
product2.displayProduct()


const total = product1.calculateTotal(salesTax);
console.log(`your total is :${total.toFixed(2)}`)

*/
/*

// CH 41 : Static

// Static = Keyeord that defines Properties or methods that belongs 
//          to a class itself rather than the object created
//          form that class (Class own anythis Static, not the Object)


class MathUtil{
    static PI =3.14159;

    static getDiameter(radius){
        return radius *2;
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
}



// const MathUtil1 =new MathUtil(); // not Required for Static
// console.log(MathUtil1.PI);      //  ------|

console.log(MathUtil.PI);       // No Object creation is required for Static variable 


console.log(MathUtil.getDiameter(40));
console.log(MathUtil.getCircumference(4));


class User{
    static userCount = 0; // Static Data

    constructor(username){
        this.username =username;
        User.userCount ++;
    }
    static getUserCount(){
        console.log(`Ther are ${User.userCount} Account Registerd`)
    }

    // Non Static Methods to Get Static Data of Class User

    getUserCountnonstatic(){
        console.log(`Ther are ${User.userCount} Account Registerd`)
    }

    sayHello(){
        console.log(`Hello ${this.username}`)
    }
}
const user1 = new User("Raj Lodh");
const user2 = new User("Yesh");

user1.sayHello()

console.log(user1.username)
//console.log(user1.userCount)    // undefined Because usercount belong to class not to Object
console.log(User.userCount)     // usercount using Class Name

user1.sayHello();
user2.sayHello();



User.getUserCount();                // Using Class Static method
user1.getUserCountnonstatic()       // using non Static method with static Data

*/
/*

// Ch 42 : Inharitance 

// inharitance = allows a new classto inharite properties and methods
//               from an existing class ( Parent -> child )
//               helps with code resusability

class Animal {
    alive =true;
    eat(){
        console.log(`This ${this.name} is Eating ...`)
    }

    sleep(){
        console.log(`This ${this.name} is Sleeping ...`)
    }
}


class Rabbit extends Animal{
    name ="Rabbit";

    run(){
        console.log(`This ${this.name} is running ...`)
    }
}

class Fish extends Animal{
    name ="Fish";

    swim(){
        console.log(`This ${this.name} is Swmming ...`)
    }
}

class Birds extends Animal{
    name ="bird";
    fly(){
        console.log(`This ${this.name} is Flying ...`)
    }
}



const rabit1 =new Rabbit();
const Birds1 =new Birds();
const Fish1 =new Fish();


rabit1.eat()
rabit1.sleep();

rabit1.alive=false; // only affect for rabbit object 

console.log("Rabbit : "+rabit1.alive)   // value change for this object
console.log("Fish : "+Fish1.alive);     // value unchanged for this object

rabit1.run();

Birds1.fly();

Fish1.swim();

*/
/*

// Ch 43 : Super

//  super = keyword is used in classes to call the constructor or 
//          access the properties and methods of a parent ( Superclass ) 
//          this  = this object
//          super = the Parent



//  without supper keyword 
// class Animal {
//     constructor (){

//     }
// }

// class Rabbit extends Animal{
//     
//      constructor (name ,age,runspeed){
//         this.name=name;
//         this.age=age;
//         this.runspeed=runspeed;
//     }
// }

// const rabbit =new Rabbit("rabitrR1",1,25);
// console.log(rabbit.name)  // will not work, Must call super constructor 





class Animal {
    constructor (name ,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`the Speed of ${this.name} is ${speed}  `)
    }
}

class Rabbit extends Animal{
     constructor (name ,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    }
    run(){
        console.log(`name is : ${this.name}   `)
        super.move(this.runspeed)
    }
}

class Fish extends Animal{
    constructor (name ,age,swimspeed){
        super(name,age);
        this.swimspeed=swimspeed;
    }
    swim(){
        console.log(`name is : ${this.name}   `);
        super.move(this.swimspeed)
    }
}

class Birds extends Animal{
    constructor (name ,age,flyspeed){
        super(name,age);
        this.flyspeed=flyspeed;
    }
    fly(){
        console.log(`name is : ${this.name}   `)
        super.move(this.flyspeed)
    }
}

const rabbit2 =new Rabbit("rabitrR2",23,65);
const bird2 =new Birds("bird2",12,28);
const Fish2 =new Fish("fish2",17,15);

// console.log(rabbit2.name)
// console.log(rabbit2.runspeed)
// console.log(Fish2.swimspeed)
// console.log(bird2.name)
// console.log(bird2.age)
rabbit2.run();
Fish2.swim();
bird2.fly();


*/

// CH 44 : Getter & Setters

// getter = special methods that makes a property readable
// setter = special method that makes a property writeable

// validate & modify a value when reading and writing a property



// class Rectangle {

//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }

//     set height(newHeight){
//         if(newHeight >0){
//             this._height= newHeight;
//         }else{
//             console.error("width must be positive number")
//         }
//     }


//     set width(newWidth){
//             if(newWidth >0){
//                 this._width= newWidth;
//             }else{
//                 console.error("width must be positive number")
//             }
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }
//     get width(){
//         return this._width.toFixed(1);
//     }

//     get area(){
//         return this._height*this._width.toFixed(1);
//     }


// }


// const rectangle1 = new Rectangle(234,20);


// rectangle1.height=30;
// rectangle1.width=20;


// console.log(rectangle1.height);
// console.log(rectangle1.width);

// console.log(rectangle1.area);

// ----------- P2

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name should be string ");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name should be string ");
        }
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age should be positive number  ");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }

    get fullName(){
        return this._firstName+" "+this._lastName;
    }

}

const person1 = new Person("Raj", "Lodh", 22);

// person1.firstName ="raj";


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);





















