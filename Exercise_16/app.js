// Exercise 16

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
