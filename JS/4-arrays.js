function func(numbers) {
  return numbers.map(number => number * 1.1);
}

console.log("[100, 200, 50] = ", func([100, 200, 50]));
console.log("[10.5, 25.3, 7.8] = ", func([10.5, 25.3, 7.8]));
