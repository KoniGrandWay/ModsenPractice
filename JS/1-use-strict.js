'use strict';
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('Argument must be a whole number!')
  }
  if (n < 0) {
    return NaN;
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}



console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(-1));
