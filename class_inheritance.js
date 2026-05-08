//Define parent class 

// function Person (name) {
//     this.name = name ;
// }

// // Add method to prototype 
// Person.prototype.sayHello = function() {
//     console.log("Hello , my name is " + this.name);
// }

// // Define child class 
// function Student (name, age){
//     Person.call(this, name);
//     this.age = age ;
// }

// Student.prototype = Object.create(Person.prototype) ;
// Student.prototype.constructor = Student ;

// // Add method to child class 
// Student.prototype.eligiblity = function(){
//     console.log(this.name + " age is " + this.age + " " + (this.age >= 18 ? "Eligible":"Not Eligible"));
// };

// // create instances of classes 
// var person = new Person("Joes");
// var student = new Student("Joes",35);

// //Call methods on instances 
// person.sayHello();
// student.sayHello();
// student.eligiblity();


// ES6 Example
class Person{
    constructor(name){
        this.name = name ;
    }

    sayHello(){
        console.log(`Hello , my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age){
        super(name);
        this.age = age ;
    }

    eligiblity(){
        console.log(this.name + " age is " + this.age + " " );
    }
}

let person = new Person("Joes");
let student = new Student("Joes", 35);

person.sayHello();
student.sayHello();
student.eligiblity();