//Function Declaration
function location (place){
    console.log(`my location is ${place}`)
}
location("chennai");

//Function as Expression
const gmail = function(email){
    console.log(`my email is ${email}` );
}
gmail("java@gmail.com");
//arrow function 
const details = (course) => {
 console.log(`I am learning now ${course}`) ;  
}

details("javascript");

//IIFE - Immediate invoked function expression

(function (name) {
  let text = "Hello " + name;
  console.log(text);
})("srm students");