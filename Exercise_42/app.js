// Exercise 42

let magicians = ["Harry Houdini", "David Blaine", "Teller"];

function show_magicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);

function make_great(magicians) {
  let great_magicians = [];
  for (let magician of magicians) {
    great_magicians.push(`The Great ${magician}`);
  }
  return great_magicians;
}

let great_magicians = make_great(magicians);

console.log(great_magicians);
