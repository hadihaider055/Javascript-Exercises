// Exercise 40

function make_album(artist, title, tracks) {
  if (tracks) {
    return { artist, title, tracks };
  } else {
    return { artist, title };
  }
}

console.log(make_album("Michael Jackson", "Thriller"));
console.log(make_album("Michael Jackson", "Bad", 3));
