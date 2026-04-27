//callback function 
function myCallback() {
console.log("I am a callback function");
}

higherOrderFunction(myCallback);
// Output: "I am a callback function"

//examples 

setTimeout(function() {
console.log('Hello, world!');
}, 1000); // Output: "Hello, world!" after 1 second

//example
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number);
}); // Output: 1 2 3