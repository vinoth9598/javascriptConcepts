//syntax
//array.forEach(function(currentValue, index, arr), thisValue)

const numbers = [1, 2, 3, 4, 5];
let total = 0;
numbers.forEach(number => {
  total += number;
});
console.log(total); // 15