// Exercise 43

let magicians = ["Harry Houdini", "David Blaine", "Teller"];

function show_magicians(magicians) {
  console.log(magicians);
}

function make_great(magicians) {
  let great_magicians = [];
  for (let magician of magicians) {
    great_magicians.push(`The Great ${magician}`);
  }
  return great_magicians;
}

let great_magicians = make_great(magicians);

show_magicians(magicians);

show_magicians(great_magicians);
