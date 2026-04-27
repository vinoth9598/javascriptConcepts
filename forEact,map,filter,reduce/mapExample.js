/*
Syntax
array.map(function(currentValue, index, arr), thisValue)
*/

const words = ["hello", "world"];
const capitalizedWords = words.map(word =>word.toUpperCase());
console.log(capitalizedWords); // ["HELLO", "WORLD"]