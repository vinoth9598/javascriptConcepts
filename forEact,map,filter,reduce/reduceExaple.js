
//syntax
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let numbers = [5, 10, 15, 20, 25];
let largest = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});
console.log(largest); // 25