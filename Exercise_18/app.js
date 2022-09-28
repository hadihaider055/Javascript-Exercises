// Exercise 18

let locations = [
  "New York",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "Dallas",
];

console.log(locations);

const sortedLocations = [...locations].sort();

console.log(sortedLocations);
console.log("original Array", locations);

const reversedLocations = [...sortedLocations].reverse();

console.log(reversedLocations);
console.log("original Array", locations);

locations.reverse();
console.log(locations);

locations.reverse();
console.log(locations);

locations.sort();
console.log(locations);

locations.reverse();
console.log(locations);
