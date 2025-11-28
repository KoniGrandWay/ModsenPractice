function checkInteger(n) {
  try {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error(`"${number}" не является целым числом!`);
    }
    console.log('Число корректно');
  } catch(error) {
    console.error(error.message);
  }
}



console.log(checkInteger(1));
console.log(checkInteger(2));
console.log(checkInteger(3));
console.log(checkInteger(4,2));
console.log(checkInteger(5.1));

