// Exercise 44

function sandwiches(items) {
  let sandwich = [];
  for (let i = 0; i < items.length; i++) {
    sandwich.push(items[i]);
  }
  return `You want a ${sandwich.join(", ")} sandwich`;
}

console.log(sandwiches(["cheese"]));
console.log(sandwiches(["cheese", "lettuce"]));
console.log(sandwiches(["cheese", "lettuce", "tomato", "onion"]));
