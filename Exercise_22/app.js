// Exercise 22

const listOfLanguages = [
  {
    name: "Python",
  },
  {
    name: "JavaScript",
  },
  {
    name: "C#",
  },
  {
    name: "Java",
  },
  {
    name: "C++",
  },
];

console.log(listOfLanguages);

if (listOfLanguages.findIndex((language) => language.name === "C") === -1) {
  throw new Error("C is not in the list");
}

listOfLanguages.push({
  name: "C",
});

console.log(listOfLanguages.findIndex((language) => language.name === "C"));
