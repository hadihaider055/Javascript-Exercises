// Exercise 33

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  //  ordinal numbers
  if (numbers[i] === 1) {
    console.log(`${numbers[i]}st`);
  } else if (numbers[i] === 2) {
    console.log(`${numbers[i]}nd`);
  } else if (numbers[i] === 3) {
    console.log(`${numbers[i]}rd`);
  } else if (numbers[i] === 4) {
    console.log(`${numbers[i]}th`);
  } else if (numbers[i] === 5) {
    console.log(`${numbers[i]}th`);
  } else if (numbers[i] === 6) {
    console.log(`${numbers[i]}th`);
  } else if (numbers[i] === 7) {
    console.log(`${numbers[i]}th`);
  } else if (numbers[i] === 8) {
    console.log(`${numbers[i]}th`);
  } else if (numbers[i] === 9) {
    console.log(`${numbers[i]}th`);
  } else {
    console.log("Invalid number");
  }
}
