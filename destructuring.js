let numbers = [10, 20, 30, 40, 50];
let [a, b, c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); //30

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5
console.log(f); //6

// rest operator
let numbers = [10, 20, 30, 40, 50];
let [a, b, ...c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); // [30,40,50]

// object - destructuring
let person = {name: "Tiya", age: 5, gender: "female"};
let {name, age, gender} = person;
console.log(name); // "Tiya"
console.log(age); // 5
console.log(gender); // "female"

let address = {street: "Cherry Road", city: "Salem", state: "Tamil Nadu", zip: "636007"};
let employee = {name: "Tiya", age: 12, gender: "female", address};
let {name, age, gender, address: {city, state, zip}} = employee;
console.log(name); // "Tiya"
console.log(age); // 30
console.log(gender); // "female"
console.log(city); // "Salem"
console.log(state); // "Tamil Nadu"
console.log(zip); // "636007"