// Exercise 19

var names = ["John", "Doe", "Lorem"];

names.forEach((name) => {
  console.log(
    `Hello ${name}, I want you to attend a dinner party at my house on Saturday.`
  );
});

console.log(`${names[1]} can't make it to the dinner party.`);

names.splice(1, 1, "Eric");

names.forEach((name) => {
  console.log(
    `Hello ${name}, I want you to attend a dinner party at my house on Saturday.`
  );
});

console.log(`I found a bigger dinner table.`);

names.unshift("Bob");
names.splice(2, 0, "Mary");
names.push("Jane");

names.forEach((name) => {
  console.log(
    `Hello ${name}, I want you to attend a dinner party at my house on Saturday.`
  );
});

console.log(`I can only invite two people to the dinner party.`);

while (names.length > 2) {
  var item = names.pop();
  console.log(`Sorry ${item}, I can't invite you to the dinner party.`);
}

names.forEach((name) => {
  console.log(
    `Hello ${name}, You're still invited to the dinner party at my house on Saturday.`
  );
});

const count = names.length;
console.log(`There are ${count} people invited to the dinner party.`);
