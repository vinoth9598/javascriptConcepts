//1.Using object literals:

const person = {
    name: "John",
    age: 30,
    job: "Developer"
};
console.log(person);

//2.Using the object constructor:
const person = new Object();
person.name = "John";
person.age = 30;
person.job = "Developer";
console.log(person);

//3. Using the Object.create() method:
const personProto = {
sayHello: function() {
console.log(`Hello, my name is ${this.name}`);
    }
};
const person = Object.create(personProto);
person.name = "John";
person.age = 30;
person.job = "Developer";
console.log(person);

//4.Using class:

class Person {
constructor(name, age, job) {
        this.name = name;
this.age = age;
this.job = job;
    }
}
const person = new Person("Tiya", 30, "Developer");
console.log(person);

