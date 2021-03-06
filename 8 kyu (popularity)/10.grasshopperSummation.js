// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//   return (num * (num+1)) / 2; // rumus summation from 1 to num 
// }

// option 2
var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) { // kenapa bukan let i = 0 ? karena summation mulai nya dari 1
    result += i;
  }
  return result;
}

console.log(summation(1), 1)
console.log(summation(8), 36)